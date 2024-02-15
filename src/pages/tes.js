import React, { useState, useEffect } from "react";
import axios from "axios";

const TesJs = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    axios // axios berfungsi untuk request data melalui http
      .get(`http://localhost:3030/makanan`) // mengambil data dari link tersebut
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        alert("terjadi kesalahan" + error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id_user}>
          <h3>
            <span>{post.id_user}</span> {post.menu}
          </h3>
          <p>{post.harga}</p>
        </div>
      ))}
    </div>
  );
};

export default TesJs;
