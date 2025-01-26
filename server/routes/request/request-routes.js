
// by which route to call a controller
const express = require('express');
const { requestNote, getAllRequests, getRequestById, deleteRequest } = require("./../../controllers/request/request-controller");

const router = express.Router();

//call controllers

// POST: Create a new request
router.post('/request-note', requestNote);

// GET: Get all requests
router.get('/get-requests', getAllRequests);

// GET: Get a specific request by ID
router.get('/:id', getRequestById);

// DELETE: Delete a specific request by ID
router.delete('/:id', deleteRequest);


module.exports = router;