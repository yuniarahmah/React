// import React from "react";
// // import Button from 'react-bootstrap/Button';
// import Card from "react-bootstrap/Card";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// const Detail = ({ data }) => {
//   const gambar = [
//     {
//       id: 1,
//       gambar:
//         "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg?w=600&q=90",
//       harga: "15.000",
//       nama: "Mie Pedas",
//     },
//     {
//       id: 2,
//       gambar:
//         "https://blog.bankmega.com/wp-content/uploads/2022/10/Makanan-tradisional-indonesia.jpg",
//       harga: "10.000",
//       nama: "Nasi Komplit",
//     },
//     {
//       id: 3,
//       gambar:
//         "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg",
//       harga: "12.000",
//       nama: "Bakso",
//     },
//     {
//       id: 4,
//       gambar:
//         "https://images.tokopedia.net/img/KRMmCm/2023/11/27/19071782-916e-4ed6-8e09-c724e900366a.png",
//       harga: "20.000",
//       nama: "Ketoprak",
//     },
//     {
//       id: 5,
//       gambar:
//         "https://disk.mediaindonesia.com/files/news/2023/10/bf08649a2bca507026329e27a4d08bc2.jpg",
//       harga: "1.000",
//       nama: "Tempe Mendoan",
//     },
//     {
//       id: 6,
//       gambar:
//         "https://i0.wp.com/bosmeal.com/wp-content/uploads/2020/01/Makanan-Khas-Betawi-Kue-Cucur.jpg?resize=637%2C350&ssl=1",
//       harga: "5.00",
//       nama: "Kue Cucur",
//     },
//     {
//       id: 7,
//       gambar:
//         "https://cdn.idntimes.com/content-images/community/2019/11/putri-noongjpg-c798a5e100a9e05c4c912e09f8bab0a2.jpg",
//       harga: "1.000",
//       nama: "Pisang Hijau",
//     },
//     {
//       id: 8,
//       gambar:
//         "https://image.popbela.com/content-images/post/20221208/b849eeb5d40e4893d6164e4bacbcbbc7.png",
//       harga: "10.000",
//       nama: "Seblak",
//     },
//     {
//       id: 9,
//       gambar:
//         "https://media.suara.com/pictures/653x366/2021/03/30/23908-sate-ayam-dapur-kobe.jpg",
//       harga: "10.000",
//       nama: "Sate Ayam",
//     },
//   ];
//   const { id } = useParams();

//   const selectedData = gambar.find((data) => data.id === parseInt(id, 10));

//   return (
//     <>
//       <div style={{ marginTop: "5%" }}>
//         <h1>detail</h1>
//         {selectedData ? (
//           <Card style={{ width: "20rem", marginLeft: "5rem", height: "1em" }}>
//             <Card.Img variant="top" src={selectedData.gambar} />
//             <Card.Body>
//               <Card.Title>{selectedData.nama}</Card.Title>
//               <Card.Text>{selectedData.harga}</Card.Text>
//             </Card.Body>
//           </Card>
//         ) : (
//           <p>Data not found</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default Detail;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Card from "react-bootstrap/Card";

function DetailProduct() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("http://localhost:3030/products/" + id)
        .then((data) => setPosts(data.data))
        .catch((error) => console.log(error));
    };
    getData();
  }, []);
  return (
    <div>
      <h3>
        <span>{posts.id}</span> {posts.title}
      </h3>
      <p>{posts.price}</p>
    </div>
  );
}

export default DetailProduct;
