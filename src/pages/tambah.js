import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function TambahProduct() {
  const [newProduct, setNewProduct] = useState({
    nama: "",
    harga: "",
    gambar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3030/gambar", newProduct)
      .then((response) => {
        console.log("Product successfully added:", response.data);
        Swal.fire({
          icon: "success",
          title: "Sukses!",
          text: "Produk berhasil ditambahkan!",
        }).then(() => {
          // You can redirect or handle it as needed
          window.location.href = "/";
        });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menambahkan produk. Silakan coba lagi.",
        });
      });
  };

  return (
    <Card className="mx-auto my-3 p-4" style={{ maxWidth: "900px" }}>
      <h2 className="text-center mb-4">Tambah Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nama">
          <Form.Label>Nama:</Form.Label>
          <Form.Control
            type="text"
            name="nama"
            value={newProduct.nama}
            onChange={handleChange}
            placeholder="Nama produk"
            required
          />
        </Form.Group>
        <Form.Group controlId="harga">
          <Form.Label>Harga:</Form.Label>
          <Form.Control
            type="text"
            name="harga"
            value={newProduct.harga}
            onChange={handleChange}
            placeholder="Harga produk"
            required
          />
        </Form.Group>
        <Form.Group controlId="gambar">
          <Form.Label>Gambar URL:</Form.Label>
          <Form.Control
            type="text"
            name="gambar"
            value={newProduct.gambar}
            onChange={handleChange}
            placeholder="URL gambar produk"
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

export default TambahProduct;
