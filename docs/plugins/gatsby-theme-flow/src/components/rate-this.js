import styled from "@emotion/styled";

import { useMixpanel } from "gatsby-plugin-mixpanel";

import React, { useState, useEffect } from "react";

const StarButton = styled.button({
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
  marginLeft: "-6px",
  "&.on": {
    color: "#ffb400"
  },
  "&.off": {
    color: "#ccc"
  }
});

const StarRating = ({ pageInfo }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const mixpanel = useMixpanel();

  useEffect(() => {
    if (rating) {
      mixpanel.track("Page rating", {
        rating,
        url: pageInfo.path
      });
      setHasRated(true);
    }
  }, [rating]);

  return (
    <div>
      <div>{hasRated ? "Rating submitted, thank you!" : "Rate this page"}</div>
      {!hasRated &&
        [...Array(5)].map((_, i) => {
          i += 1;
          return (
            <StarButton
              type="button"
              key={i}
              className={i <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(i)}
              onMouseEnter={() => setHover(i)}
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
