import React, { useEffect, useState } from "react";
import Pipes from "./ppr/Pipes";
import axios from "axios";
import { Button, Modal } from "flowbite-react";
import { BsExclamationOctagon } from "react-icons/bs";
import ConfirmationMessage from "../ConfirmationMessage";
import OrderList from "./ppr/OrderList";

const AddOrder = ({ userData, status, setStatus }) => {
  const { userId } = userData;
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(true);
  const [openMessage, setOpenMessage] = useState(false);

  // Create Order No.
  const [orderNo, setOrderNo] = useState(
    "OR" +
      new Date().getFullYear() +
      Math.floor(100000 + Math.random() * 900000)
  );
  const [orderForm, setOrderForm] = useState(false);

  const generateNewOr = () => {
    setOrderNo(
      "OR" +
        new Date().getFullYear() +
        Math.floor(100000 + Math.random() * 900000)
    );
  };

  // Create / Get Order Details
  const handleOrder = () => {
    axios
      .post("http://localhost:5000/api/orders", {
        userId,
        orderNo,
      })
      .then((res) => {
        setData(res?.data), setOrderNo(res?.data?.orderNo);
      })
      .catch((err) => console.log(err));
    setOrderForm(true);
  };

  // Cancel Order
  const handleCancelOrder = (id) => {
    axios.delete(`http://localhost:5000/api/orders/${id}`);
    setStatus("");
    setOrderForm(false);
    generateNewOr();
  };

  const props = {
    userId,
    openMessage,
    setOpenMessage,
    message: "Are you sure you want to cancel this order?",
    handleCancelOrder,
  };

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
              onClick={() => setOpenMessage(true)}
            >
              Cancel Order
            </h1>
          </div>
          <hr className="mb-4" />
          <h1 className="text-2xl mb-4">Pipes</h1>
          <Pipes />
          <hr className="my-5" />
          <h1 className="text-2xl mb-4">Sockets</h1>
          <Pipes />
          <hr className="my-6" />
          <div className="mb-4">
            <OrderList />
          </div>
        </div>
      </div>

      <ConfirmationMessage {...props} />

      {/* MODAL */}
      {status === "Unfinished" && (
        <Modal
          show={openModal}
          size="lg"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <BsExclamationOctagon className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-base font-normal text-gray-500 dark:text-gray-400">
                You still have unfinished order wish to continue it?
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="failure"
                  onClick={() => {
                    setOpenModal(false), handleOrder();
                  }}
                >
                  {"Yes, I'll continue it."}
                </Button>
                <Button
                  color="gray"
                  onClick={() => {
                    setOpenModal(false), handleCancelOrder(userId);
                  }}
                >
                  No, I start new order.
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default AddOrder;
