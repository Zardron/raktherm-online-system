import LOGO from "../assets/img/rak-logo.png";
import { TbLogout } from "react-icons/tb";
import { FaMoon, FaRegListAlt } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { LiaUsersSolid } from "react-icons/lia";
import { GrStatusInfo } from "react-icons/gr";
import { LuUserPlus2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const SideBar = ({ page, setPage, handleStatus }) => {
  const navigate = useNavigate();
  return (
    <div className={`relative h-screen shadow-md border-r overflow-hidden`}>
      <div className="flex h-screen flex-col items-center justify-between p-4">
        <div className="w-full">
          <img src={LOGO} alt="logo" className="h-32 mb-4 m-4" />

          <div className="p-2">
            <div
              className={`${
                page === "customers" && "bg-gray-100"
              } flex flex-row items-center gap-4 text-xl hover:bg-gray-100 p-4 rounded-md cursor-pointer`}
              onClick={() => setPage("customers")}
            >
              <LiaUsersSolid /> Customers
            </div>
            <div
              className={`${
                page === "order" && "bg-gray-100"
              } flex flex-row items-center gap-4 text-xl hover:bg-gray-100 p-4 rounded-md cursor-pointer`}
              onClick={() => {
                setPage("order"), handleStatus();
              }}
            >
              <FaRegListAlt /> Order
            </div>
            <div
              className={`${
                page === "orders" && "bg-gray-100"
              } flex flex-row items-center gap-4 text-xl hover:bg-gray-100 p-4 rounded-md cursor-pointer`}
              onClick={() => setPage("orders")}
            >
              <FaRegListAlt /> Orders
            </div>
            <div
              className={`${
                page === "order-status" && "bg-gray-100"
              } flex flex-row items-center gap-4 text-xl hover:bg-gray-100 p-4 rounded-md cursor-pointer`}
              onClick={() => setPage("order-status")}
            >
              <GrStatusInfo /> Order Status
            </div>
          </div>
        </div>

        <div className="w-full px-2 border-t border-gray-300">
          <div className="py-2">
            <div
              className={`${
                page === "add-customer" && "bg-gray-100"
              } flex flex-row items-center gap-4 text-xl hover:bg-gray-100 p-4 rounded-md cursor-pointer`}
              onClick={() => setPage("add-customer")}
            >
              <LuUserPlus2 /> Add Customer
            </div>
            {/* <div className="flex flex-row items-center gap-4 text-xl hover:bg-gray-100 p-4 rounded-md cursor-pointer">
              <FaMoon /> Dark
            </div> */}
            <div className="flex flex-row items-center gap-4 text-xl hover:bg-gray-100 p-4 rounded-md cursor-pointer">
              <TbReportAnalytics /> Report
            </div>
            <div
              className="flex flex-row items-center gap-4 text-xl hover:bg-gray-100 p-4 rounded-md cursor-pointer"
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              <TbLogout /> Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
