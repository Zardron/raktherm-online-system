import Order from "../model/OrderModel.js";

export const getExistingOrder = async (req, res) => {
  const { id } = req.params;

  const getOrder = await Order.findOne({
    user: id,
    status: "Unfinished",
  });

  res.status(200).json(getOrder);
};

export const deleteExistingOrder = async (req, res) => {
  const { id } = req.params;

  await Order.findOneAndDelete({
    user: id,
    status: "Unfinished",
  });
};

export const getOrderDetails = async (req, res) => {
  const { userId, orderNo } = req.body;

  const checkOrder = await Order.findOne({
    user: userId,
    status: "Unfinished",
  });

  if (!checkOrder) {
    const createOrder = await Order.create({
      user: userId,
      orderNo,
    });
    return res.status(200).json(createOrder);
  }

  res.status(200).json(checkOrder);
};
