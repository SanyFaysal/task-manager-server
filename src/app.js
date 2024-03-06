const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./app/module/auth/auth.routes.js");
const taskRoutes = require("./app/module/task/task.routes.js");

app.use(express.json());
app.use(
  cors({
    // origin: [
    //   "http://localhost:5173",
    //   "https://mobile-banking-frontend.vercel.app",
    // ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/task", taskRoutes);

module.exports = app;
