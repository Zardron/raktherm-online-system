import PEX_Adapters from "../model/PEXAdaptersModel.js";
import PEX_Pipes from "../model/PEXPipesModel.js";

// PIPES

export const getAllPexPipes = async (req, res) => {
  const allPipes = await PEX_Pipes.find({}).sort({ name: 1 });

  res.status(200).json(allPipes);
};

export const getPexPipes = async (req, res) => {
  const allPipes = await PEX_Pipes.find(
    {},
    { _id: 0, items: 0, createdAt: 0, updatedAt: 0, __v: 0 }
  ).sort({ name: 1 });

  res.status(200).json(allPipes);
};

export const addPexPipes = async (req, res) => {
  const addPex = await PEX_Pipes.create(req.body);
  res.status(200).json(addPex);
};

export const addPexAdapters = async (req, res) => {
  const addPex = await PEX_Adapters.create(req.body);
  res.status(200).json(addPex);
};

// ADAPTERS

export const getAllPexAdapters = async (req, res) => {
  const allAdapters = await PEX_Adapters.find({}).sort({ name: 1 });

  res.status(200).json(allAdapters);
};

export const getPexAdapters = async (req, res) => {
  const allAdapters = await PEX_Adapters.find(
    {},
    { _id: 0, items: 0, createdAt: 0, updatedAt: 0, __v: 0 }
  ).sort({ name: 1 });

  res.status(200).json(allAdapters);
};

// export const addPprPipes = async (req, res) => {
//   const { itemName, itemCode } = req.body;

//   const findPipe = await PPR_Pipes.findOne({ name: itemName });

//   if (findPipe) {
//     let exist;
//     findPipe?.items.forEach((element) => {
//       if (element.itemCode === itemCode) {
//         return (exist = "true");
//       }
//       return (exist = false);
//     });

//     if (exist)
//       return res.status(400).json({ message: "Product is already exist." });

//     try {
//       const updateProduct = await PPR_Pipes.findByIdAndUpdate(
//         findPipe._id,
//         {
//           $push: {
//             items: {
//               itemCode: itemCode,
//             },
//           },
//         },
//         {
//           new: true,
//         }
//       );

//       res.status(200).json(updateProduct);
//     } catch (error) {
//       res.status(401).json(error);
//     }
//   } else {
//     const newProduct = await PPR_Pipes.create({
//       name: itemName,
//       items: [{ itemCode: itemCode }],
//     });

//     res.status(200).json(newProduct);
//   }
// };

// export const removePprPipes = async (req, res) => {
//   const { itemName, itemCode } = req.body;

//   const removePprPipes = await PPR_Pipes.findOneAndUpdate(
//     { name: itemName },
//     {
//       $pull: {
//         items: {
//           itemCode: itemCode,
//         },
//       },
//     }
//   );

//   if (removePprPipes) {
//     const allPipes = await PPR_Pipes.find({}).sort({ name: 1 });

//     return res.status(200).json(allPipes);
//   }
// };

// export const addPprFittings = async (req, res) => {
//   const { itemName, itemCode } = req.body;

//   const findPipe = await PPR_Fittings.findOne({ name: itemName });

//   if (findPipe) {
//     let exist;
//     findPipe?.items.forEach((element) => {
//       if (element.itemCode === itemCode) {
//         return (exist = "true");
//       }
//       return (exist = false);
//     });

//     if (exist)
//       return res.status(400).json({ message: "Product is already exist." });

//     try {
//       const updateProduct = await PPR_Fittings.findByIdAndUpdate(
//         findPipe._id,
//         {
//           $push: {
//             items: {
//               itemCode: itemCode,
//             },
//           },
//         },
//         {
//           new: true,
//         }
//       );

//       res.status(200).json(updateProduct);
//     } catch (error) {
//       res.status(401).json(error);
//     }
//   } else {
//     const newProduct = await PPR_Fittings.create({
//       name: itemName,
//       items: [{ itemCode: itemCode }],
//     });

//     res.status(200).json(newProduct);
//   }
// };

// export const removePprFittings = async (req, res) => {
//   const { itemName, itemCode } = req.body;

//   const removePprPipes = await PPR_Fittings.findOneAndUpdate(
//     { name: itemName },
//     {
//       $pull: {
//         items: {
//           itemCode: itemCode,
//         },
//       },
//     }
//   );

//   if (removePprPipes) {
//     const allPipes = await PPR_Fittings.find({}).sort({ name: 1 });

//     return res.status(200).json(allPipes);
//   }
// };
