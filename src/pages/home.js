// import React, from "react";
import Button from "react-bootstrap/Button";
import { Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/gambar", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Card style={{ marginTop: "5%", width: "90%", marginLeft: "5%" }}>
        <Carousel>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src="https://cdn.hswstatic.com/gif/desserts-update.jpg"
              alt="First slide desert"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src="https://img.harianjogja.com/posts/2023/05/13/1135099/makanan_manis_1664261026.jpg"
              alt="First slide desert"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src="https://cdn0-production-images-kly.akamaized.net/eOhGouoJEOqT2ZbxxlQme6g2lvI=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1367799/original/048059200_1475843806-Masakan_Indonesia.jpg"
              alt="First slide makanan"
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
              src="https://impessa.id/sas-content/uploads/modules/posts/20230512104314.png"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/08/09053913/Resep-Es-Buah-Pelangi-Minuman-Segar-Kekinian-Pelepas-Dahaga.jpg.webp"
              alt="Second slide minuman"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src="https://d1bpj0tv6vfxyp.cloudfront.net/salah-pilih-smoothies-bisa-naikkan-berat-badan-perhatikan-x-hal-ini.jpg"
              alt="Third slide minuman"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src="https://lautan-natural-krimerindo.com/wp-content/uploads/2023/07/Bisnis-Es-Krim-Buah-buahan-Modal-Aman-1024x682.jpg"
              alt="Fourth slide es cream"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/nCvCASrESH.jpg"
              alt="Fourth slide es cream"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src="https://asset.momsindonesia.com/storage/article/d1d98db7e1bf0a624586380d0e1512be.jpg"
              alt="First slide es cream"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </Carousel.Item>
          {/* Add more Carousel.Items with additional images as needed */}
        </Carousel>
        <Card.Body>
          <Card.Text>
            Diatas merupakan menu terbaik yang tersedia dari toko kami silahkan
            menikmati pesanan Anda
          </Card.Text>
        </Card.Body>
      </Card>
      <h1
        style={{
          color: "black",
          marginTop: "3rem",
          marginBottom: "2%",
          marginLeft: "15%",
        }}
      >
        Selamat datang di Toko Online kami Silahkan Order Pesanan Yang anda
        Inginkan
      </h1>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-lg-6 mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src={post.gambar}
                  style={{
                    height: "10%",
                    width: "60%",
                    marginLeft: "20%",
                    marginTop: "1%",
                  }}
                />
                <Card.Body>
                  <Card.Text>
                    <div> Nama: {post.nama}</div>
                    <div> Harga: {post.harga}</div>
                  </Card.Text>
                  <Link
                    to={"/lengkap/" + post.id}
                    style={{ marginRight: "2%" }}
                  >
                    <Button variant="primary">Selengkapnya</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;