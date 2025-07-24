const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");

// POST - Save new doctor location
router.post("/add", async (req, res) => {
  try {
    const { name, specialization, latitude, longitude } = req.body;

    const doctor = new Doctor({
      name,
      specialization,
      location: {
        type: "Point",
        coordinates: [longitude, latitude],
      },
    });

    await doctor.save();
    res.status(201).json({ message: "Doctor saved", doctor });
  } catch (error) {
    res.status(500).json({ error: "Failed to save doctor" });
  }
});

// ✅ NEW: POST - Get nearby doctors using coordinates
router.post("/nearby", async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    const doctors = await Doctor.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          $maxDistance: 5000, // 5 km radius
        },
      },
    });

    res.json({ doctors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch nearby doctors" });
  }
});

module.exports = router;
