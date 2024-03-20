import React from "react";

import Header from "./Header";
import Customers from "./Customers";
import Orders from "./Orders";
import OrderStatus from "./OrderStatus";
import AddCustomer from "./AddCustomer";
import AddOrder from "./client/AddOrder";

const Content = ({ show, setShow, page, userData, status, setStatus }) => {
  const props = { show, setShow, page, userData, status, setStatus };

  const renderComponent = (component) => {
    switch (component) {
      case "customers":
        return <Customers {...props} />;

      case "order":
        return <AddOrder {...props} />;

      case "orders":
        return <Orders {...props} />;

      case "order-status":
        return <OrderStatus {...props} />;

      case "add-customer":
        return <AddCustomer {...props} />;
    }
  };

  return (
    <>
      <Header {...props} />
      <div className="p-4">{renderComponent(page)}</div>
    </>
  );
};

export default Content;
