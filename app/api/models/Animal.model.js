const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const AnimalSchema = new Schema({
    name: { type: String, trim: true, required: true },
    isCarnivore: { type: Boolean, trim: true, required: true },
    family:  [{ type: Schema.Types.ObjectId, ref: "family", required: true }],
});

const Animal = mongoose.model("animal", AnimalSchema);
module.exports = Animal;