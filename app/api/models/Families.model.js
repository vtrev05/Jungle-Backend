const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const FamiliesSchema = new Schema({
    name: { type: String, trim: true, required: true },
    livingInGroup: { type: Boolean, trim: true, required: true },
    habitat:  [{ type: Schema.Types.ObjectId, ref: "habitat", trim: true, required: true }],
})

const Families = mongoose.model("families", FamiliesSchema);
module.exports = Families;