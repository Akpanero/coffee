import React from "react";
import Button from "../layouts/Button";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

const ProductCard = (props) => {
  return (
    <div className=" w-full lg:w-1/4 bg-white p-3 rounded-lg">
      <img className=" rounded-lg" src={props.img} alt="img" />
      <div className=" flex flex-col items-start mt-5 gap-3">
        <h2 className=" font-medium text-xl">{props.title}</h2>
        <div className=" flex">
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarHalf className=" text-brightColor" />
        </div>
        <h3 className=" font-semibold text-lg">$15.99</h3>
        <Button title="Add To Cart" />
      </div>
    </div>
  );
};

export default ProductCard;
