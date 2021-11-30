const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
const Animal = require("../models/Animal.model");

const getAllAnimals = async (req, res, next) => {
  try {
    const animals = await Animal.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { animals: animals }
    });
  } catch (error) {
    return next(error);
  }
};

const getByIdAnimal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findById(id);
    if (animal) {
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { animal: animal }
      });
    } else {
      return res.json({
        status: 404,
        message: HTTPSTATUSCODE[404],
        data: { animal: animal }
      });
    }
  } catch (error) {
    return next(error);
  }
};

const getFilteredAnimal = async (req, res, next) => {
  try {
      const filters = req.query;
      const animals = await Animal.find(filters);
      return res.json({
          status: 200,
          message: HTTPSTATUSCODE[200],
          data: { animals: animals }
      });
  } catch (error) {
      return next(error);
  }
};

module.exports = { getAllAnimals, getByIdAnimal, getFilteredAnimal };