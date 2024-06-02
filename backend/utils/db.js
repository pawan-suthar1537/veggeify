const mongoose = require('mongoose');

const connectDB = async () => {
  // Check if Mongoose is already connected or connecting
  if (mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2) {
    console.log('MongoDB is already connected or connecting');
    return;
  }

  try {
    await mongoose.connect(process.env.DB);
    console.log('MongoDB connected', mongoose.connection.name);
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

module.exports = connectDB;
