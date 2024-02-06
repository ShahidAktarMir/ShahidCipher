const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const app = express();
const connectDB = require("./config/mongoose");
dotenv.config();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
