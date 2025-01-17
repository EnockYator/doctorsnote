import express from "express";
import Note from "../models/noteModel.js"; // Adjust path as per your project structure

// Controller for handling medical note requests
export const requestNote = async (req, res) => {
  try {
    const { noteType, duration, reason, additionalInfo } = req.body;

    // Validate input
    if (!noteType || !duration || !reason) {
      return res.status(400).json({ message: "All required fields must be filled." });
    }

    // Create a new note request
    const newNote = new Note({
      noteType,
      duration,
      reason,
      additionalInfo,
      requestedBy: req.user._id, // Assuming authentication middleware adds user info to req.user
    });

    // Save to database
    const savedNote = await newNote.save();

    res.status(201).json({
      message: "Medical note request submitted successfully.",
      note: savedNote,
    });
  } catch (error) {
    console.error("Error creating note request:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};