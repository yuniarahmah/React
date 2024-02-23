// import React, from "react";
// import Button from "react-bootstrap/Button";
import { Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [editingId, setEditingId] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3030/gambar");
      const result = await response.json();
      setPosts(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/gambar/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const editUser = async (id) => {
    try {
      await axios.put(`http://localhost:3030/gambar/${id}`, editedData);
      setEditingId(null);
      setEditedData({});
      window.location.reload();
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const handleEdit = (id, row) => {
    setEditingId(id);
    setEditedData(row);
  };

  const handleInputChange = (e, field) => {
    setEditedData({
      ...editedData,
      [field]: e.target.value,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const chunkArray = (array, chunkSize) => {
    const resultArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      resultArray.push(array.slice(i, i + chunkSize));
    }
    return resultArray;
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Card
          style={{
            width: "65%",
            height: "5%",
            marginLeft: "3%",
            boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Carousel>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                className="d-block w-100"
                src="https://s3-ap-southeast-1.amazonaws.com/paxelbucket/revamp/article-FA76QDQ-MK77D4V-CNHG7B1-7BV7YXO.webp"
                alt="First slide desert"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                className="d-block w-100"
                src="https://images.tokopedia.net/img/KRMmCm/2023/11/9/ef079998-a8b8-4041-9c27-4730007415ae.png"
                alt="Second slide makanan"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                className="d-block w-100"
                src="https://akcdn.detik.net.id/visual/2022/06/07/adv-rankpillar_169.jpeg?w=650"
                alt="Third slide makanan"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <Carousel.Item style={{ height: "400px" }}>
                <img
                  className="d-block w-100"
                  src="https://kaltimtoday.co/wp-content/uploads/2023/11/palestine-food-englishpalinfocom-655022cd5eadf.jpg"
                  alt="Fourth slide makanan"
                  style={{ objectFit: "cover", height: "100%" }}
                />
              </Carousel.Item>
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                className="d-block w-100"
                src="https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2022/05/resep-minuman-segar.webp"
                alt="Second slide minuman"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                className="d-block w-100"
                src="https://resepmasakankuliner.com/content/images/2022/12/Cara-Membuat-Es-Dawet-Nangka.webp"
                alt="Second slide minuman"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                className="d-block w-100"
                src="https://cdn0-production-images-kly.akamaized.net/QRnSGX-QpWHj1GiH73Ayu8DotZU=/277x0:944x667/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3386408/original/011847400_1614226791-shutterstock_1654982767.jpg"
                alt="Second slide minuman"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                className="d-block w-100"
                src="https://t-2.tstatic.net/wartakota/foto/bank/images/Rice-Bowl-Indonesia-promo-makanan-diskon-30-persen.jpg"
                alt="Fourth slide es cream"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                className="d-block w-100"
                src="https://ayomakan.oss-ap-southeast-5.aliyuncs.com/article/ARTICLE-AYOMAKAN_20230605091840.png"
                alt="Fourth slide es cream"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                className="d-block w-100"
                src="https://qph.cf2.quoracdn.net/main-qimg-23ac1d3c93431de34d09bcc1178a4308"
                alt="First slide es cream"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </Carousel.Item>
            {/* Add more Carousel.Items with additional images as needed */}
          </Carousel>
        </Card>
        <div style={{ width: "28%", marginLeft: "1%" }}>
          <img
            src="https://ayomakan.oss-ap-southeast-5.aliyuncs.com/article/ARTICLE-AYOMAKAN_20231107132104.png"
            style={{ width: "100%" }}
          />
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <img
              src="https://marketplace.canva.com/EAFl9DI1Bfo/1/0/1131w/canva-orange-krem-minimalist-promo-makanan-flyer-BavbwKe-WoU.jpg"
              style={{ width: "48%", marginBottom: "10px", marginTop: "10px" }}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77OrvgX6a0zGDycLKWCLH2PREdozN6X0pDXPxe_RJzP6BfPv2wjB5zP-OGx6D997VGgU&usqp=CAU"
              style={{
                width: "48%",
                marginBottom: "10px",
                marginTop: "10px",
                marginLeft: "5px",
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "3%" }}>
        <h2>Silahkan dipilih</h2>
        <div className="row" style={{ margin: 0 }}>
          {posts.map((post) => (
            <div key={post.id} className="col-md-3 mb-3">
              <div
                style={{
                  width: "100%",
                  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease",
                  transform: "translateY(-20px) : translateY(0)",
                }}
              >
                <Link to={`/lengkap/${post.id}`}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={post.gambar}
                      style={{ height: "200px" }}
                    />
                    <Card.Body>
                      <Card.Title>{post.nama}</Card.Title>
                      <Card.Text>
                        Harga: {post.harga}
                        {/* Deskripsi: {post.dekripsi} */}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
                <Card.Body>
                </Card.Body>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "5%" }}>
        <h2>Rekomendasi</h2>
        <div className="row" style={{ margin: 0 }}>
          {posts
            .filter((post) => post.harga > 10.0)
            .map((post) => (
              <div key={post.id} className="col-md-3 mb-3">
                <Link to={`/lengkap/${post.id}`} style={{ marginRight: "2%" }}>
                  <Card
                    style={{
                      width: "100%",
                      boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={post.gambar}
                      style={{ height: "200px" }}
                    />
                    <Card.Body>
                      <Card.Title>{post.nama}</Card.Title>
                      <Card.Text>
                        Harga: {post.harga}
                        {/* Deskripsi: {post.dekripsi} */}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p>&copy; Yuzashoop 2024. Hak Cipta Dilindungi.</p>
      </div>
    </div>
  );
};

export default Home;
