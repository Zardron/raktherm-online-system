import React, { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import OrderList from "./OrderList";
import axios from "axios";
import { Button, Modal } from "flowbite-react";
import { BsExclamationOctagon } from "react-icons/bs";
import ConfirmationMessage from "../ConfirmationMessage";

const AddOrder = ({ userData, status, setStatus }) => {
  const { userId } = userData;
  const [orderData, setOrderData] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [orderNo, setOrderNo] = useState(
    "OR" +
      new Date().getFullYear() +
      Math.floor(100000 + Math.random() * 900000)
  );
  const [orderForm, setOrderForm] = useState(false);

  // Generate New OR #
  const generateNewOr = () => {
    setOrderNo(
      "OR" +
        new Date().getFullYear() +
        Math.floor(100000 + Math.random() * 900000)
    );
  };

  // Create / Get Order Details
  const handleCreateOrder = () => {
    setOrderForm(true);
    setOrderData("");

    axios
      .post("http://localhost:5000/api/orders", {
        userId,
        orderNo,
      })
      .then((res) => {
        setOrderNo(res?.data?.orderNo),
          setOrderData(res?.data?.orders),
          setOrderId(res?.data?._id);
      })
      .catch((err) => console.log(err));
  };

  // Cancel Order
  const handleCancelOrder = (id) => {
    axios.delete(`http://localhost:5000/api/orders/${id}`);
    setStatus("");
    setOrderForm(false);
    generateNewOr();
    setOrderData("");
    setOrderId("");
  };

  // Modal Properties
  const [openModal, setOpenModal] = useState(true);
  const [openMessage, setOpenMessage] = useState(false);

  // Props
  const props = {
    userId,
    openMessage,
    setOpenMessage,
    message: "Are you sure you want to cancel this order?",
    handleCancelOrder,
    setStatus,
    setOrderForm,
    generateNewOr,
    setOrderData,
    setOrderId,
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h1
          className="flex items-center gap-1 text-base bg-green-500 text-white px-2 py-1 rounded-md border-2 border-white shadow-md cursor-pointer hover:bg-white hover:border-2 hover:border-green-500 hover:text-black"
          onClick={handleCreateOrder}
        >
          <IoCreateOutline size={20} className="mb-1" />
          Create New Order
        </h1>
        {orderForm && (
          <h1
            className="flex items-center gap-1 text-base bg-red-500 text-white px-2 py-1 rounded-md border-2 border-white shadow-md cursor-pointer hover:bg-white hover:border-2 hover:border-red-500 hover:text-black"
            onClick={() => setOpenMessage(true)}
          >
            <MdCancel size={20} />
            Cancel Order
          </h1>
        )}
      </div>

      <div className="relative h-full w-full border shadow-md">
        {!orderForm && <div className="absolute w-full h-full bg-glass z-50" />}
        <div className="p-4">
          <div className="flex flex-row items-center justify-between mb-4">
            <h1 className="text-2xl">Pipes</h1>
          </div>
          <hr className="my-5" />
          <h1 className="text-2xl mb-4">Fittings</h1>
          <hr className="my-6" />
          <div className="flex items-center justify-start mb-2">
            <h1 className="text-2xl">
              Order #: <span className="font-medium">{orderNo}</span>
            </h1>
          </div>
          <OrderList
            orderData={orderData}
            orderId={orderId}
            setOrderData={setOrderData}
          />
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
              <BsExclamationOctagon
                color="orange"
                className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"
              />
              <h3 className="mb-5 text-base font-normal text-gray-500 dark:text-gray-400">
                You still have unfinished order wish to continue it?
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="success"
                  onClick={() => {
                    setOpenModal(false), handleCreateOrder();
                  }}
                >
                  {"Yes, I'll continue it."}
                </Button>
                <Button
                  color="failure"
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
