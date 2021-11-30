const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const HabitatSchema = new Schema(
    {
        name: { type: String, trim: true, required: true },
        location: { type: [Number], trim: true, required: true },
        mode: { type: String, enum : ['tierra','aire', 'mar'], default: 'tierra' },
    },
);

const Habitat = mongoose.model("habitat", HabitatSchema);
module.exports = Habitat;