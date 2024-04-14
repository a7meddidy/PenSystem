const Factory = require("./handlersFactory");
const Lecture = require("../models/lectureModel");
/**
 * @description Get List Lecture
 * @route  Get /api/v1/Lectures
 * @access Public
 */
exports.getLectures = Factory.getAll(Lecture);

/**
 * @description Get specific Lecture by  id
 * @route  Get /api/v1/Lectures/:id
 * @access Public
 */
exports.getLecture = Factory.getOne(Lecture);

/**
 * @description Create Lecture
 * @route  POST /api/v1/Lectures
 * @access Private
 */
exports.createLecture = Factory.createOne(Lecture);
/**
 * @description Update Lecture by id
 * @route  Put /api/v1/Lectures/:id
 * @access Private
 */
exports.updateLecture = Factory.updateOne(Lecture);

/**
 * @description Delete Lecture by id
 * @route  delete /api/v1/Lectures/:id
 * @access Private
 */
exports.deleteLecture = Factory.deleteOne(Lecture);
