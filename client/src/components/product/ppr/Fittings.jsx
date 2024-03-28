import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Fittings = ({ openFittings, setOpenFittings, setOpenPipes }) => {
  const [orderData, setOrderData] = useState([]);
  return (
    <>
      <div
        className="flex items-center justify-between p-4 border-r-2 border-l-2 border-t-2 bg-green-500 text-white rounded-tr-lg rounded-tl-lg cursor-pointer"
        onClick={() => {
          setOpenFittings(!openFittings);
          setOpenPipes(false);
        }}
      >
        <h1 className="text-2xl">Fittings</h1>
        <MdOutlineKeyboardArrowDown
          className={`${
            openFittings
              ? "rotate-180 ease-linear duration-300"
              : "rotate-0 ease-linear duration-300"
          }`}
          size={20}
        />
      </div>
      <div
        className={`border-r-2 border-l-2 border-b-2 overflow-hidden ease-linear duration-300 ${
          openFittings ? "max-h-[500px] p-4" : "max-h-0"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <input
            placeholder="Item Name"
            className="w-full px-4 py-2 rounded-md border-2 focus:outline-none"
          />

          <input
            placeholder="Item Code"
            className="w-full px-4 py-2 rounded-md border-2 focus:outline-none"
          />

          <button className="px-4 py-1 bg-green-500 border-2 border-green-500 rounded-md text-2xl text-white hover:border-green-500 hover:bg-white hover:text-black">
            +
          </button>
        </div>

        {/* Header */}
        <div className="flex flex-row text-sm border-b pt-4">
          {/* Item Code */}
          <div className="w-1/2">
            <div className="bg-gray-200/75 text-left py-3 px-6 font-bold uppercase text-[#374151]">
              item no
            </div>
          </div>

          {/* Item Code */}
          <div className="w-full">
            <div className="bg-gray-200/75 text-left py-3 px-6 font-bold uppercase text-[#374151]">
              item code
            </div>
          </div>

          {/* Item Name */}
          <div className="w-full">
            <div className="bg-gray-200/75 text-left py-3 px-6 font-bold uppercase text-[#374151]">
              item name
            </div>
          </div>

          {/* Action */}
          <div className="w-1/2">
            <div className="bg-gray-200/75 text-center py-3 px-6 font-bold uppercase text-[#374151]">
              action
            </div>
          </div>
        </div>
        {/* End */}

        <div className="h-[350px] max-h-[350px] overflow-auto">
          {orderData?.length === 0 ? (
            <div className="flex items-center justify-center w-full h-full text-2xl">
              -- No data available --
            </div>
          ) : (
            <>
              {orderData?.map((data) => (
                <div
                  className="flex flex-row text-sm border-b-gray-100 border-b hover:bg-gray-50"
                  ref={ref}
                >
                  {/* Item Name */}
                  <div className="w-full">
                    <div className="text-left py-3 px-6 font-medium text-[#111827]">
                      {data.itemName}
                    </div>
                  </div>

                  {/* Item Code */}
                  <div className="w-1/2">
                    <div className="text-left py-3 px-6 text-xs text-[#6b7280]">
                      {data.itemCode}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="w-1/2">
                    <div className="text-left py-3 px-6 text-xs text-[#6b7280]">
                      {data.quantity}
                    </div>
                  </div>

                  {/* OEM */}
                  <div className="w-1/2">
                    <div className="text-left py-3 px-6 text-xs text-[#6b7280]">
                      {data.oem}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="w-1/2">
                    <div
                      className="flex items-center justify-center py-3 px-6 text-xs text-red-500 cursor-pointer"
                      onClick={() => handleRemoveItem(data._id)}
                    >
                      <TiDelete size={20} title="Remove" />
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Fittings;
