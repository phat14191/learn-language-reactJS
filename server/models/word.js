let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let wordSchema = new Schema({
    textEn: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Word", wordSchema);

//add stuffs
