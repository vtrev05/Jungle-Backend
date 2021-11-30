const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
const Family = require("../models/Families.model");

const getAllFamilies = async (req, res, next) => {
  try {
    const familiies = await Family.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { familiies: familiies }
    });
  } catch (error) {
    return next(error);
  }
};

const getByIdFamilies = async (req, res, next) => {
  try {
    const { id } = req.params;
    const familiy = await Family.findById(id);
    if (familiy) {
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { familiy: familiy }
      });
    } else {
      return res.json({
        status: 404,
        message: HTTPSTATUSCODE[404],
        data: { familiy: familiy }
      });
    }
  } catch (error) {
    return next(error);
  }
};

const getFilteredFamily = async (req, res, next) => {
  try {
      const filters = req.query;
      const families = await Family.find(filters);
      return res.json({
          status: 200,
          message: HTTPSTATUSCODE[200],
          data: { families: families }
      });
  } catch (error) {
      return next(error);
  }
};

module.exports = { getAllFamilies, getByIdFamilies, getFilteredFamily };