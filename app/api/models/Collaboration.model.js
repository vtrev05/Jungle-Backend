const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CollaborateSchema = new Schema(
    {
        animals: {
            name: { type: String, trim: true },
            isCarnivore: { type: Boolean, trim: true},
            family:  [{ type: String}]
        }
    },
    {
        timestamps: true
    }
);

const Collaborate = mongoose.model("collaborate", CollaborateSchema);
module.exports = Collaborate;