import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    noteType: {
      type: String,
      required: [true, "Note type is required."],
    },
    duration: {
      type: Number,
      required: [true, "Duration is required."],
    },
    reason: {
      type: String,
      required: [true, "Reason is required."],
      minlength: [10, "Reason must be at least 10 characters long."],
    },
    additionalInfo: {
      type: String,
    },
    requestedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;