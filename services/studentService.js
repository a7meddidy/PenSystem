const Factory = require("./handlersFactory");
const Student = require("../models/studentModel");
/**
 * @description Get List Students
 * @route  Get /api/v1/Students
 * @access Public
 */
exports.getStudents = Factory.getAll(Student);

/**
 * @description Get specific Student by  id
 * @route  Get /api/v1/Students/:id
 * @access Public
 */
exports.getStudent = Factory.getOne(Student);

/**
 * @description Create Student
 * @route  POST /api/v1/Students
 * @access Private
 */
exports.createStudent = Factory.createOne(Student);
/**
 * @description Update Student by id
 * @route  Put /api/v1/Students/:id
 * @access Private
 */
exports.updateStudent = Factory.updateOne(Student);

/**
 * @description Delete Student by id
 * @route  delete /api/v1/Students/:id
 * @access Private
 */

exports.deleteStudent = Factory.deleteOne(Student);
