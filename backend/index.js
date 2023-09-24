require('dotenv').config();
const cors = require("cors");
const express = require('express');
const app = express();
const connectToDatabase=require('./config/db.js');
connectToDatabase();
const userRoutes = require('./routes/user.js');
const authRoutes = require('./routes/auth.js');
const port = process.env.PORT || 4000; 
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

