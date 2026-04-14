const mongoose = require("mongoose");
const { Schema } = mongoose;

const IssueSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      default: "open",
    },
    repository: {
      type: Schema.Types.ObjectId,
      ref: "Repository",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true, // ✅ FIXED HERE
  }
);

module.exports = mongoose.model("Issue", IssueSchema);