import React, { useState } from "react";
import "./StartRating.css";

export const StarRating = () => {
  const [click, setClick] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      {[1, 2, 3, 4, 5].map((rating) => {
        return (
          <button
            className={rating <= click || rating <= hover ? "filled" : "blank"}
            onClick={() => setClick(rating)}
            onMouseOver={() => setHover(rating)}
            onMouseLeave={() => setHover(click)}
            id="star-btn"
          >
            &#9734;
          </button>
        );
      })}
    </div>
  );
};
