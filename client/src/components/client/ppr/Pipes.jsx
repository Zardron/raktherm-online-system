import { Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { PPR_PIPES } from "../data";

const Pipes = () => {
  const [data, setData] = useState([
    { itemName: "", itemCode: "", quantity: "" },
  ]);

  const [dataIndex, setDataIndex] = useState(0);

  const { itemName, itemCode } = data[dataIndex];

  const filter = PPR_PIPES?.filter((item) => item?.name === itemName);

  const handleAddInput = () => {
    setData([...data, { itemName: "", itemCode: "", quantity: "" }]);
  };

  const handleChange = (event, index) => {
    let { id, value } = event.target;
    let onChangeValue = [...data];
    onChangeValue[index][id] = value;
    setData(onChangeValue);
    setDataIndex(index);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...data];
    newArray.splice(index, 1);
    setData(newArray);
  };

  return (
    <>
      {data.map((item, index) => (
        <div className="input_container" key={index}>
          <div className="flex items-center justify-center gap-4 mb-3">
            <Select
              id="itemName"
              className="w-full"
              required
              onChange={(event) => handleChange(event, index)}
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
              onChange={(event) => handleChange(event, index)}
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
              value={item.quantity}
              onChange={(event) => handleChange(event, index)}
            />

            <button
              className="bg-green-500 text-white font-bold rounded-md py-1 px-4 text-2xl disabled:bg-gray-200"
              onClick={() => handleAddInput()}
              disabled={
                index === data.length - 1
                  ? false
                  : data.length > 1
                  ? true
                  : false
              }
            >
              +
            </button>
            <button
              className="bg-red-500 text-white font-bold rounded-md py-1 px-4 text-2xl disabled:bg-gray-200"
              onClick={() => handleDeleteInput(index)}
              disabled={data.length > 1 ? false : true}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pipes;
