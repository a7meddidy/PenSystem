const Factory = require("./handlersFactory");
const Section = require("../models/sectionModel");
/**
 * @description Get List Sections
 * @route  Get /api/v1/Sections
 * @access Public
 */
exports.getSections = Factory.getAll(Section);
/**
 * @description Get specific section by  id
 * @route  Get /api/v1/Sections/:id
 * @access Public
 */
exports.getSection = Factory.getOne(Section);

/**
 * @description Create Section
 * @route  POST /api/v1/Sections
 * @access Private
 */
exports.createSections = Factory.createOne(Section);

/**
 * @description Update Section by id
 * @route  Put /api/v1/Sections/:id
 * @access Private
 */
exports.updateSection = Factory.updateOne(Section);
/**
 * @description Delete Section by id
 * @route  delete /api/v1/Sections/:id
 * @access Private
 */

exports.deleteSection = Factory.deleteOne(Section);
