const express = require("express")
const router = express.Router();

// Import controller
const {dummyLink} = require("../controllers/likeController");


// Mapping create
router.get("/dummyroute", dummyLink);


// expert

module.exports = router;

/// yes dummy .... samjh me aaya kya