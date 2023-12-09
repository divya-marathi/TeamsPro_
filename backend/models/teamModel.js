const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    require: true,
    unique : true

  },
  teamMembers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    }
  ],
});

const teamModel = mongoose.model("team",TeamSchema)

module.exports = {teamModel}