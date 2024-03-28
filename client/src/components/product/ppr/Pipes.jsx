import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import { TiDelete } from "react-icons/ti";

const Pipes = ({ openPipes, setOpenPipes, setOpenFittings, type }) => {
  const [query, setQuery] = useState("");
  const [pipeData, setPipeData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/all-ppr-pipes")
      .then((res) => setPipeData(res?.data));
  }, [type]);

  const filter = () => {
    return pipeData.filter(
      (item) => item?.name?.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  console.log(filter());

  return (
    <>
      <div
        className="flex items-center justify-between p-4 border-r-2 border-l-2 border-t-2 bg-green-500 text-white rounded-tr-lg rounded-tl-lg cursor-pointer"
        onClick={() => {
          setOpenPipes(!openPipes);
          setOpenFittings(false);
        }}
      >
        <h1 className="text-2xl">Pipes</h1>
        <MdOutlineKeyboardArrowDown
          className={`${
            openPipes
              ? "rotate-180 ease-linear duration-300"
              : "rotate-0 ease-linear duration-300"
          }`}
          size={20}
        />
      </div>
      <div
        className={`border-r-2 border-l-2 border-b-2 overflow-hidden ease-linear duration-300 ${
          openPipes ? "max-h-[480px] p-4" : "max-h-0"
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

        <div className="flex items-center justify-between bg-gray-200/75 mt-4 p-2 px-4 border-b border-white">
          <h1 className="text-2xl pl-2 font-bold">PIPES LIST</h1>
          <input
            placeholder="Search . . . ."
            className="px-4 py-2 rounded-md border-2 focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {/* Header */}
        <div className="flex flex-row text-sm border-b">
          {/* Item Code */}
          <div className="w-full">
            <div className="bg-gray-200/75 text-left py-3 px-6 font-bold uppercase text-[#374151]">
              item name
            </div>
          </div>

          {/* Item Name */}
          <div className="w-full">
            <div className="bg-gray-200/75 text-left py-3 px-6 font-bold uppercase text-[#374151]">
              item code
            </div>
          </div>

          {/* Action */}
          <div className="w-1/2">
            <div className="bg-gray-200/75 text-right py-3 px-6 font-bold uppercase text-[#374151]">
              action
            </div>
          </div>
        </div>
        {/* End */}
        <div className="h-[350px] max-h-[350px] overflow-auto">
          {pipeData?.length === 0 ? (
            <div className="flex items-center justify-center w-full h-full text-2xl">
              -- No data available --
            </div>
          ) : (
            <>
              {filter()?.map((data, index) => (
                <div className="flex flex-row text-sm border-b-gray-100 border-b hover:bg-gray-50">
                  {/* Item Name */}
                  <div className="w-full">
                    {data?.items?.map((item) => (
                      <div className="text-left py-3 px-6 text-xs text-[#6b7280]">
                        {data.name}
                      </div>
                    ))}
                  </div>

                  {/* Item Code */}

                  <div className="w-full">
                    {data?.items?.map((item) => (
                      <div className="text-left py-3 px-6 text-xs text-[#6b7280]">
                        {item.itemCode}
                      </div>
                    ))}
                  </div>

                  {/* OEM */}
                  <div className="w-1/2">
                    {data?.items?.map((item) => (
                      <div className="flex items-center justify-end text-left py-3 px-6 text-xs text-[#6b7280] pr-10">
                        <TiDelete
                          size={16}
                          title="Remove"
                          color="red"
                          className="cursor-pointer"
                          onClick={() => console.log(data.name, item.itemCode)}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Pipes;
