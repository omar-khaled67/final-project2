const express = require("express");
const {
  createDonor,
  getAlldonors,
  updateDonor,
  getOneDonor,
  deleteDonor,
  getDonorStats
} = require("../controllers/donor");
const { verifyToken } = require("../middlewares/verifyToken");


const router = express.Router();

// ADD DONOR
router.post("/", verifyToken, createDonor);

// GET ALL DONORS
router.get("/", getAlldonors);

// UPDATE DONOR
router.put("/:id", updateDonor);

// GET ONE DONOR
router.get("/find/:id", getOneDonor);

// DELETE DONOR
router.delete("/:id", deleteDonor);

// DONOR STATS
router.get("/stats", getDonorStats);

module.exports = router;
/*
const express = require("express"); const { createDonor, getAlldonors, updateDonor, getOneDonor, deleteDonor, getDonorStats } = require("../controllers/donor"); router.get("/stats", getDonorStats); const { verifyToken } = require("../middlewares/verifyToken"); const router = express.Router(); // ADD DONOR router.post("/",verifyToken, createDonor); // GET ALL DONORS router.get("/", getAlldonors); // UPDATE DONOR router.put("/:id", updateDonor); //GET ONE DONOR router.get("/find/:id", getOneDonor); //DELETE DONOR router.delete("/:id", deleteDonor); //DONOR STATS router.get("/stats", getDonorsStats); module.exports=router
*/ 