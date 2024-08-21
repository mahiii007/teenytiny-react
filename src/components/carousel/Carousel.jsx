import React, { useEffect, useState } from "react";
import "./Carousel.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const getImageUrls = async () => {
    setIsLoading(true);
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const resp = await fetch(url);
    let finalResp = await resp.json();
    finalResp = finalResp.slice(0, 10);
    const urls = finalResp?.map((data) => data.url);
    setImageUrls(urls);
    setIsLoading(false);
  };

  const clickHandler = (btnType) => {
    if (btnType === "leftClick") {
      if (index === 0) {
        setIndex(imageUrls.length - 1);
      } else {
        setIndex((i) => i - 1);
      }
    } else if (btnType === "rightClick") {
      if (index === imageUrls.length - 1) {
        setIndex(0);
      } else {
        setIndex((i) => i + 1);
      }
    }
  };
  useEffect(() => {
    getImageUrls();
  }, []);
  useEffect(() => {
    const tim = setInterval(() => {
      if (index === imageUrls.length - 1) {
        setIndex(0);
      } else {
        setIndex((i) => i + 1);
      }
    }, 1000);

    return () => {
      clearInterval(tim);
    };
  });
  return (
    <div className="carousel">
      <button onClick={() => clickHandler("leftClick")} className="toggle-btn">
        <ArrowBackIosIcon />
      </button>
      <img src={imageUrls[index]} alt="" />
      <span>Image No : {index}</span>
      <button onClick={() => clickHandler("rightClick")} className="toggle-btn">
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default Carousel;
