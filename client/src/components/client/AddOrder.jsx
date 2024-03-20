import React, { useEffect, useState } from "react";
import Pipes from "./ppr/Pipes";
import axios from "axios";

const AddOrder = () => {
  const [customerId, setCustomerId] = useState("65f420df5fb1389dc0218920");
  const [orderNo, setOrderNo] = useState();
  const [orderForm, setOrderForm] = useState(false);

  const handleOrder = () => {
    setOrderForm(true);
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/orders/", customerId)
      .then((res) => console.log("res:", res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold">Order</h1>

      <div className="flex items-center justify-between mb-4">
        <h1
          className="text-xl bg-green-200 text-white px-4 py-2 mt-2 rounded-md shadow-md cursor-pointer hover:bg-green-400"
          onClick={handleOrder}
        >
          Create New Order
        </h1>
      </div>

      <div className="relative h-full w-full border shadow-md">
        {!orderForm && <div className="absolute w-full h-full bg-glass z-50" />}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl">
              Order #: <span className="font-medium">{orderNo}</span>
            </h1>

            <h1
              className="text-lg bg-red-300 py-1 px-2 text-white rounded-md cursor-pointer hover:bg-red-500"
              onClick={() => setOrderForm(false)}
            >
              Cancel Order
            </h1>
          </div>
          <hr className="mb-4" />
          <h1 className="text-2xl mb-4">Pipes</h1>
          <Pipes />

          <hr className="my-6" />

          <h1 className="text-2xl mb-4">Sockets</h1>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
