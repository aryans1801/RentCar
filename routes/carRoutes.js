const express = require("express");
const router = express.Router();
const Cars = require("../models/carModel");

router.get("/getallcars", async (req, res) => {
  try {
    const cars = await Cars.find();
    res.send(cars);
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.post("/addcar", async (req, res) => {
  try {
    const newCar = new Cars(req.body);
    await newCar.save();
    res.send("Car Added Successfully");
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.post("/editcar", async (req, res) => {
  try {
    const car = await Cars.findOne({ _id: req.body._id });
    car.name = req.body.name;
    car.image = req.body.image;
    car.fuelType = req.body.fuelType;
    car.rentPerHour = req.body.rentPerHour;
    car.capacity = req.body.capacity;

    await car.save();
    res.send("Car details updated Successfully");
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.post("/deletecar", async (req, res) => {
  try {
    await Cars.findOneAndDelete({ _id: req.body.carid });

    res.send("Car deleted Successfully");
  } catch (error) {
    return res.status(404).json(error);
  }
});
module.exports = router;
