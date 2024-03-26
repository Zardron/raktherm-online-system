import React from "react";
import Pipes from "./Pipes";
import Fittings from "./Fittings";

const index = ({ orderId, setOrderData }) => {
  const renderProps = {
    orderId,
    setOrderData,
  };

  return (
    <>
      <h1 className="text-2xl">Pipes</h1>
      <Pipes {...renderProps} />
      <hr className="my-4" />
      <h1 className="text-2xl">Fittings</h1>
      <Fittings {...renderProps} />
      <hr className="my-4" />
    </>
  );
};

export default index;
