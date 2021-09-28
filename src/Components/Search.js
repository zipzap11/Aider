import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://api-sekolah-indonesia.herokuapp.com/sekolah?page=1&perPage=5"
      );
      setPosts(response.data.dataSekolah);
      console.log(response.data.dataSekolah);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <div className="App">
      <h3>Search Filter</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return null;
            } else if (
              value.sekolah.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => (
            <div key={item.id}>
              <p>
                <a
                  className="btn btn-primary"
                  data-toggle="collapse"
                  href={`#${item.id}`}
                  role="button"
                  aria-expanded="false"
                  aria-controls={item.id}
                >
                  {item.sekolah}
                </a>
              </p>
              <div className="collapse" id={item.id}>
                <div className="card card-body">{item.alamat_jalan}</div>
              </div>
            </div>
          ))
      )}
    </div>
  );
}
