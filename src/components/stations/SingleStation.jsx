import React from "react";
import { useParams } from "react-router-dom";

const SingleStation = () => {
  //create route parameters
  const { id } = useParams();
  return <div>{id}</div>;
};

export default SingleStation;
