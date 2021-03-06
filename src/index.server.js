const express = require("express");
const app = express();
const env = require("dotenv");
const path = require("path");
const cors = require("cors");

env.config({ path: "./.env" });
require("./db/conn"); // Atfirst declare the .env file, then others who come through .env file

// routes

const port = process.env.PORT;
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const initialDataRoutes = require("./routes/admin/initialData");
const pageRoutes = require("./routes/admin/page");

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", initialDataRoutes);
app.use("/api", pageRoutes);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
