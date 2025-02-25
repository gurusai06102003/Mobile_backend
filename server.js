require("dotenv").config();
const express = require("express");
const cors = require("cors"); 
const connectToDB = require("./Database/db");
const bookRoutes = require("./Routes/mobile-router");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "https://mobilecomparision.vercel.app", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

connectToDB();
app.use(express.json());
app.use("/api/mobiles", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
