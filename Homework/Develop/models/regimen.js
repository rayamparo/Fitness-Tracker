const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RegimenSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Enter exercise name"
            },
            type: {
                type: String,
                trim: true,
                required: "Enter exercise type"
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

const Regimen = mongoose.model("Regimen", RegimenSchema);

module.exports = Regimen;