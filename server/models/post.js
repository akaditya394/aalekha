const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    author: String,
    body: String,
  },
  { timestamps: true }
);

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
