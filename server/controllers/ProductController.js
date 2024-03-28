import PPR_Fittings from "../model/PPRFittingsModel.js";
import PPR_Pipes from "../model/PPRPipesModel.js";

export const getAllPprPipes = async (req, res) => {
  const allPipes = await PPR_Pipes.find({}).sort({ name: 1 });

  res.status(200).json(allPipes);
};

export const getAllPprFittings = async (req, res) => {
  const allPipes = await PPR_Fittings.find({}).sort({ name: 1 });

  res.status(200).json(allPipes);
};

export const getPprPipes = async (req, res) => {
  const allPipes = await PPR_Pipes.find(
    {},
    { _id: 0, items: 0, createdAt: 0, updatedAt: 0, __v: 0 }
  ).sort({ name: 1 });

  res.status(200).json(allPipes);
};

export const addPprPipes = async (req, res) => {
  const products = await PPR_Pipes.create(req.body);

  res.status(200).json(products);
};

export const addPprFittings = async (req, res) => {
  const products = await PPR_Fittings.create(req.body);

  res.status(200).json(products);
};
