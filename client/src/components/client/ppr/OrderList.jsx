import React from "react";
import { TiDelete } from "react-icons/ti";

const OrderList = () => {
  return (
    <div className="w-full shadow-md">
      {/* Header */}

      <div className="flex flex-row text-sm">
        {/* Item Name */}
        <div className="w-3/4">
          <div className="bg-gray-50 text-left py-3 px-6 font-bold uppercase text-[#374151]">
            item name
          </div>
        </div>

        {/* Item Code */}
        <div className="w-1/2">
          <div className="bg-gray-50 text-left py-3 px-6 font-bold uppercase text-[#374151]">
            item code
          </div>
        </div>

        {/* Quantity */}
        <div className="w-1/2">
          <div className="bg-gray-50 text-left py-3 px-6 font-bold uppercase text-[#374151]">
            quantity
          </div>
        </div>

        {/* OEM */}
        <div className="w-1/2">
          <div className="bg-gray-50 text-left py-3 px-6 font-bold uppercase text-[#374151]">
            oem
          </div>
        </div>

        {/* Action */}
        <div className="w-1/2">
          <div className="bg-gray-50 text-left py-3 px-6 font-bold uppercase text-[#374151]">
            action
          </div>
        </div>
      </div>
      {/* End */}

      {/* ******************************************************************************************** */}

      {/* Content */}
      <div className="flex flex-row text-sm h-[340px] max-h-[350px] overflow-auto">
        {/* Item Name */}
        <div className="w-3/4">
          <div className="text-left py-3 px-6 font-medium text-[#111827]">
            PN 10 Solid PP-R Pipes
          </div>
          <div className="text-left py-3 px-6 font-medium text-[#111827]">
            PN 10 Solid PP-R Pipes
          </div>
          <div className="text-left py-3 px-6 font-medium text-[#111827]">
            PN 10 Solid PP-R Pipes
          </div>
          <div className="text-left py-3 px-6 font-medium text-[#111827]">
            PN 10 Solid PP-R Pipes
          </div>
          <div className="text-left py-3 px-6 font-medium text-[#111827]">
            PN 10 Solid PP-R Pipes
          </div>
          <div className="text-left py-3 px-6 font-medium text-[#111827]">
            PN 10 Solid PP-R Pipes
          </div>
          <div className="text-left py-3 px-6 font-medium text-[#111827]">
            PN 10 Solid PP-R Pipes
          </div>
          <div className="text-left py-3 px-6 font-medium text-[#111827]">
            PN 10 Solid PP-R Pipes
          </div>
          <div className="text-left py-3 px-6 font-medium text-[#111827]">
            PN 10 Solid PP-R Pipes
          </div>
          <div className="text-left py-3 px-6 font-medium text-[#111827]">
            PN 10 Solid PP-R Pipes
          </div>
        </div>

        {/* Item Code */}
        <div className="w-1/2">
          <div className="text-left py-3 px-6 text-xs text-[#6b7280]">asd</div>
        </div>

        {/* Quantity */}
        <div className="w-1/2">
          <div className="text-left py-3 px-6 text-xs text-[#6b7280]">asd</div>
        </div>

        {/* OEM */}
        <div className="w-1/2">
          <div className="text-left py-3 px-6 text-xs text-[#6b7280]">asd</div>
        </div>

        {/* Action */}
        <div className="w-1/2">
          <div className="text-left py-3 px-6 text-xs text-red-500">
            <TiDelete size={20} title="Remove" />
          </div>
        </div>
      </div>
      {/* End */}
    </div>
  );
};

export default OrderList;
