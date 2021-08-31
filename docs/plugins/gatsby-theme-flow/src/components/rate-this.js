import styled from "@emotion/styled";

import { useState } from "react";

const StarButton = styled.button((props) => ({
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
  color: props.isSelected === "on" ? "#ffb400" : "#d8d8d8"
}));

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <StarButton
            type="button"
            key={index}
            isSelected={index <= (hover || rating) ? true : false}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </StarButton>
        );
      })}
    </div>
  );
};

export default StarRating;
