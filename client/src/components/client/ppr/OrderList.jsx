import axios from "axios";
import React from "react";
import { TiDelete } from "react-icons/ti";

const OrderList = ({ orderData, orderId, setOrderData }) => {
  const handleRemoveItem = (id) => {
    axios
      .put(`http://localhost:5000/api/orders/remove/${orderId}`, {
        itemId: id,
      })
      .then((res) => setOrderData(res?.data?.orders));
  };

  return (
    <div className="w-full shadow-md border">
      {/* Header */}

      <div className="flex flex-row text-sm border-b">
        {/* Item Name */}
        <div className="w-full">
          <div className="bg-gray-200/75 text-left py-3 px-6 font-bold uppercase text-[#374151]">
            item name
          </div>
        </div>

        {/* Item Code */}
        <div className="w-1/2">
          <div className="bg-gray-200/75 text-left py-3 px-6 font-bold uppercase text-[#374151]">
            item code
          </div>
        </div>

        {/* Quantity */}
        <div className="w-1/2">
          <div className="bg-gray-200/75 text-left py-3 px-6 font-bold uppercase text-[#374151]">
            quantity
          </div>
        </div>

        {/* OEM */}
        <div className="w-1/2">
          <div className="bg-gray-200/75 text-left py-3 px-6 font-bold uppercase text-[#374151]">
            oem
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

      {/* ******************************************************************************************** */}

      {/* Content */}
      <div className="h-[320px] max-h-[320px] overflow-auto">
        {orderData?.length === 0 ? (
          <div className="flex items-center justify-center w-full h-full text-2xl">
            -- No data available --
          </div>
        ) : (
          <>
            {orderData?.map((data) => (
              <div className="flex flex-row text-sm border-b-gray-100 border-b hover:bg-gray-50">
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
      {/* End */}
    </div>
  );
};

export default OrderList;
