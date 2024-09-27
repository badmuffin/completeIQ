const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/completeIq', {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error(error);
});

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});