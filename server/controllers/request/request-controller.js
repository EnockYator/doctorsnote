
const Request = require("./../../models/Request");

// Create a new request
const requestNote = async (req, res) => {
  try {
    const { fullName, email, healthCareFacility, beginningDate, returnDate, reason, acceptedTerms, createdAt } = req.body;

    // Validate required fields
    if (!acceptedTerms) {
      return res.status(400).json({ 
        message: "You must accept the Terms of Service." 
    });
    }
    if (!fullName ||!email ||!healthCareFacility ||!beginningDate ||!returnDate ||!reason) {
      return res.status(400).json({
         message: "All fields are required." 
        });
    }

    const newRequest = new Request({
      fullName,
      email,
      healthCareFacility,
      beginningDate,
      returnDate,
      reason,
      acceptedTerms,
      createdAt
    });

    await newRequest.save();

    res.status(201).json({
      message: 'Request sent successfully.',
      newRequest: newRequest,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while creating the request.',
      error: error.message,
    });
  }
};

// Get all requests
const getAllRequests = async (req, res) => {
  try {
    const allRequests = await Request.find();
    res.status(200).json({
      message: 'Requests retrieved successfully.',
      allRequests: allRequests,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while retrieving requests.',
      error: error.message,
    });
  }
};

// Get a single request by ID
const getRequestById = async (req, res) => {
  try {
    const { id } = req.params;
    const requestById = await Request.findById(id);

    if (!requestById) {
      return res.status(404).json({ message: 'Request not found.' });
    }

    res.status(200).json({
      message: 'Request retrieved successfully.',
      requestById: requestById,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while retrieving the request.',
      error: error.message,
    });
  }
};

// Delete a request by ID
const deleteRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRequest = await Request.findByIdAndDelete(id);

    if (!deletedRequest) {
      return res.status(404).json({ message: 'Request not found.' });
    }

    res.status(200).json({
      message: 'Request deleted successfully.',
      deletedRequest: deletedRequest,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while deleting the request.',
      error: error.message,
    });
  }
};

module.exports = {
  requestNote,
  getAllRequests,
  getRequestById,
  deleteRequest,
};
