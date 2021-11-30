const Collaboration = require("../models/Collaboration.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const postCollaboration = async (req, res, next) => {
    try {
        const newCollaboration = new Collaboration();
        newCollaboration.animals = req.body.animals;

        const collaborationDb = await newCollaboration.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: collaborationDb
        });
    } catch (error) {
        return next(error);
    }
}

module.exports = { postCollaboration };