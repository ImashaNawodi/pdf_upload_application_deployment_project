const mongoose = require('mongoose');
require('dotenv').config(); 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    });
    console.log('DB is connected!');
  } catch (err) {
    console.error('DB connection failed:');
    console.error(err);
    process.exit(1); 
  }
};

connectDB();
