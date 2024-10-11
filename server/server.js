const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(bodyParser.json());
app.use(cors("http://localhost:5173")); 

// Routes
app.use('/api', userRoutes);
app.use('/api', movieRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
