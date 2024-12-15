const express = require('express'); // Import Express framework
const cors = require('cors');      // Import CORS middleware

const app = express();             // Create an Express app instance

app.use(cors());                   // Enable CORS for cross-origin requests
app.use(express.json());           // Middleware to parse JSON bodies in requests

// Basic route to test if the API is running
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));

const mongoose = require('mongoose');

// Replace with your MongoDB Atlas connection string
const uri = 'mongodb+srv://appUser:J.DPjq92wLZbzuZ@cluster0.01v6y3p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));

