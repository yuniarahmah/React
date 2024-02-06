// import React from "react";

// function Profile() {
//   const data = [
//     {
//       nama: "Secondta",
//       kelas: "X TKJ",
//     },
//   ];

//   return (
//     <div style={{textAlign: 'center'}}>
//       <h1>Profile</h1>
//       {data.map((item, index) => (
//         <div key={index}>
//           <div>
//             <p style={{ fontWeight: "bold", fontSize: "30px" }}>Profile</p>
//             <p style={{ margin: "3px 0" }}>
//               <strong style={{ fontSize: "15px" }}>Nama Saya:</strong>
//               {item.nama}
//             </p>
//             <p style={{ margin: "3px 0" }}>
//               <strong style={{ fontSize: "15px" }}>Kelas :</strong>
//               {item.kelas}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default Profile;

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function App() {
  const data = [
        {
          nama: "Mathias",
          kelas: "X TKJ",
        },
      ];
    
  return (
    <div className="vh-500" style={{ backgroundColor: "#fff", marginTop: "10%", width: "100%" }}>
      {data.map((item, index) => (
        <div key={index}>
      <Container>
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="5" className="mt-5">
            <Card style={{ borderRadius: "15px" }}>
              <Card.Body className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <Card.Img
                      style={{ width: "180px", borderRadius: "10px" }}
                      src="https://i.pinimg.com/736x/70/6b/85/706b85fc2b8fd6837802852868f9f3ba.jpg"
                      alt="Generic placeholder image"
                      fluid
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <Card.Title>Nama : {item.nama}</Card.Title>
                    <Card.Text>Kelas : {item.kelas}</Card.Text>

                    <div
                      className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: "#efefef" }}
                    >
                      <div>
                        <p className="small text-muted mb-1">Articles</p>
                        <p className="mb-0">1</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">976 T</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">10/10000</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <Button variant="outline-secondary" className="me-1 flex-grow-1">
                        Chat
                      </Button>
                      <Button variant="secondary" className="flex-grow-1">Follow</Button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
      ))}
    </div>
  );
}

export default App;
