const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://aryansingh1811:aryan1234@clusternetninja.8wsvxb2.mongodb.net/aryacars",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successful");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Failed");
  });
}

connectDB();

module.export = mongoose;
