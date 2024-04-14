const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");
const ApiFeatures = require("../utils/apiFeatures");

exports.deleteOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const document = await Model.findByIdAndDelete(id);

    if (!document) {
      return next(new ApiError(`No document for this id ${id}`, 404));
    }
    res.status(204).send();
  });

exports.updateOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!document) {
      return next(new ApiError(`No document For This id ${id}`, 404));
    }
    res.status(200).json({ data: document });
  });

exports.createOne = (Model) =>
  asyncHandler(async (req, res) => {
    const document = await Model.create(req.body);
    res.status(201).json({ data: document });
  });

exports.getOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const document = await Model.findById(id);
    if (!document) {
      return next(new ApiError(`No document For This id ${id}`, 404));
    }
    res.status(200).json({ data: document });
  });

exports.getAll = (Model, modelName = "") =>
  asyncHandler(async (req, res) => {
    //if i need subcategies by category id in params in file subcategoryservices

    // Build query
    const documentsCounts = await Model.countDocuments(); //num of products ex
    const apiFeatures = new ApiFeatures(Model.find(), req.query) //build and easy chain these methods
      //.paginate(documentsCounts)
      .filter()
      .search(modelName) //in product modelNname contains value
      .limitfields()
      .sort();

    // Execute query
    const { mongooseQuery, paginationResult } = apiFeatures; // those in propery in class change at previous method(sort....)
    const documents = await mongooseQuery;

    res
      .status(200)
      .json({ results: documents.length, paginationResult, data: documents });
  });
