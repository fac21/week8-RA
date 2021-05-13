import React from "react";

const Card = (props) => {

//  console.log("Card",props)
  const { frontImg, backImg, flipped, onClick } = props;
  const img = flipped ? frontImg : backImg;
  return (
    <div className="Card" onClick={onClick}>
      <img src={img} alt="" />
    </div>
  );
};

export default Card;
