const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
const Habitat = require("../models/Habitat.model");

const getAllHabitats = async (req, res, next) => {
  try {
    const habitats = await Habitat.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { habitats: habitats }
    });
  } catch (error) {
    return next(error);
  }
};

const getByIdHabitat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const habitat = await Habitat.findById(id);
    if (habitat) {
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { habitat: habitat }
      });
    } else {
      return res.json({
        status: 404,
        message: HTTPSTATUSCODE[404],
        data: { habitat: habitat }
      });
    }
  } catch (error) {
    return next(error);
  }
};

const getFilteredHabitat = async (req, res, next) => {
  try {
      const filters = req.query;
      const habitats = await Habitat.find(filters);
      return res.json({
          status: 200,
          message: HTTPSTATUSCODE[200],
          data: { habitats: habitats }
      });
  } catch (error) {
      return next(error);
  }
};

module.exports = { getAllHabitats, getByIdHabitat, getFilteredHabitat };
