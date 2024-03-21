import { Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { PPR_PIPES } from "../data";
import axios from "axios";
import { toast } from "react-toastify";

const Pipes = ({ orderId, setOrderData }) => {
  const [data, setData] = useState({
    itemName: "",
    itemCode: "",
    quantity: "",
  });

  const { itemName, itemCode, quantity } = data;

  const filter = PPR_PIPES?.filter((item) => item?.name === itemName);

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const clearData = () => {
    setData({ ...data, itemName: "", itemCode: "", quantity: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put(`http://localhost:5000/api/orders/${orderId}`, {
        itemName: itemName,
        itemCode: itemCode,
        quantity: quantity,
        oem: "Meters",
      })
      .then(
        (res) => setOrderData(res?.data?.orders),
        toast.success("Item has been added", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        }),
        clearData()
      );
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-4 mb-3"
      >
        <Select
          id="itemName"
          className="w-full"
          required
          onChange={handleChange}
        >
          <option value={itemName}>Item Name</option>
          {PPR_PIPES.map((data) => (
            <>
              <option key={data.name} value={data.name}>
                {data.name}
              </option>
            </>
          ))}
        </Select>
        <Select
          id="itemCode"
          className="w-full"
          required
          onChange={handleChange}
        >
          <option value={itemCode}>Item Code</option>
          {filter[0]?.items?.map((data) => (
            <option key={data.name} value={data.itemCode}>
              {data.itemCode}
            </option>
          ))}
        </Select>
        <TextInput
          id="quantity"
          type="number"
          className="w-full"
          placeholder="Quantity"
          required
          value={quantity}
          onChange={handleChange}
        />
        <TextInput
          className="w-[250px] border-none outline-none"
          value="Meters"
          readOnly
        />
        <button
          type="submit"
          className="bg-green-500 text-white font-bold rounded-md py-1 px-4 text-2xl disabled:bg-gray-200"
        >
          +
        </button>
      </form>
    </>
  );
};

export default Pipes;
