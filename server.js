const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const dbConnection = require("./db");

app.use(express.json());

const bodyPareser = require("body-parser");
const cors = require("cors");

app.use(bodyPareser.json({ extended: true }));
app.use(bodyPareser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/cars", require("./routes/carRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use("/api/bookings", require("./routes/bookingRoutes"));
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}
app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log("Node js server started in Port 5000"));
