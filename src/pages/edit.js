import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function EditProduct() {
  const { Id_saja } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    imageUrl: "",
    size: [],
    color: "",
    price: "",
  });
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/gambar/${Id_saja}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [Id_saja]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
    setIsModified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isModified) {
      Swal.fire({
        icon: "warning",
        title: "Perhatian!",
        text: "Anda harus mengubah setidaknya satu bidang untuk memperbarui produk.",
      });
      return;
    }
    axios
      .put(`http://localhost:3030/gambar/${Id_saja}`, product)
      .then((response) => {
        console.log("Produk berhasil diperbarui:", response.data);
        Swal.fire({
          icon: "success",
          title: "Sukses!",
          text: "Produk berhasil diperbarui!",
        }).then(() => {
          window.location.href = "/";
        });
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal memperbarui produk. Silakan coba lagi.",
        });
      });
  };


  // const history = useHistory();
  // const [nama,setNama] = useState("");
  // const [harga,setHarga] = useState("");
  // const [gambar,setGambar] = useState("");
  // const edit = async(e) => {
  //   e.preventDefault();

  //   try {
  //    await axios.put("http://localhost:3030/gambar/" + id, {
  //       nama,
  //       harga,
  //     });
  //     history.push("/data");
  //     window.location.reload();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <Card className="mx-auto my-3 p-4" style={{ maxWidth: "900px" }}>
      <h2 className="text-center mb-4">Edit</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Nama:</Form.Label>
          <Form.Control
            type="text"
            name="nama"
            value={product.nama}
            onChange={handleChange}
            placeholder="Judul produk"
            required
          />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Harga:</Form.Label>
          <Form.Control
            type="text"
            name="harga"
            value={product.harga}
            onChange={handleChange}
            placeholder="Judul produk"
            required
          />
        </Form.Group>
        <Form.Group controlId="text">
          <Form.Label> Gambar URL:</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="gambar"
            value={product.gambar}
            onChange={handleChange}
            placeholder="Deskripsi"
          />
        </Form.Group>
        <div className="text-center my-2">
          <Button variant="primary" type="submit">
            Simpan
          </Button>
        </div>
      </Form>
    </Card>
  );
}

export default EditProduct;
