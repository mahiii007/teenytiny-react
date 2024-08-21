import React, { useEffect, useState } from "react";
import "./InfiniteScroll.css";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const url = `https://dummyjson.com/posts?limit=10&skip=${
        page * 10
      }&select=title,reactions,userId'`;
      const resp = await fetch(url);
      const finalResp = await resp.json();
      setLoading(false);
      setData((data) => [...data, ...finalResp.posts]);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 50 >=
        document.documentElement.offsetHeight
      ) {
        console.log("BOTTOM REACHED>>>>>>>>>>>>>>>>>>>.");
        setPage((prevPage) => prevPage + 1);
      }

      return () => window.removeEventListener("scroll", handleScroll);
    };
    window.addEventListener("scroll", handleScroll);
  }, [loading]);
  return (
    <>
      {loading ? (
        <h2 className="loader-text">Loading....</h2>
      ) : (
        data.map((d) => {
          return (
            <div className="post-container" key={d?.id}>
              {d?.title}
            </div>
          );
        })
      )}
    </>
  );
};

export default InfiniteScroll;
