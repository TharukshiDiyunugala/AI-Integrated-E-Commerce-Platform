const mongoose = require('mongoose');
const User = require('E:/AI-Integrated-E-Commerce-Platform/backend/models/user.js');
const Product = require('E:/AI-Integrated-E-Commerce-Platform/backend/models/product.js');

const uri = 'mongodb+srv://appUser:J.DPjq92wLZbzuZ@cluster0.01v6y3p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Seed users
const seedUsers = async () => {
  await User.deleteMany(); // Clear existing data
  await User.insertMany([
    { name: 'Admin User', email: 'admin@example.com', password: 'password123', isAdmin: true },
    { name: 'Regular User', email: 'user@example.com', password: 'password123', isAdmin: false },
  ]);
  console.log('Users seeded');
};

// Seed products
const seedProducts = async () => {
  await Product.deleteMany(); // Clear existing data
  await Product.insertMany([
    { name: 'Product 1', category: 'Electronics', price: 100, stock: 50, image: 'image1.jpg' },
    { name: 'Product 2', category: 'Clothing', price: 30, stock: 100, image: 'image2.jpg' },
    { name: 'Product 3', category: 'Accessories', price: 20, stock: 200, image: 'image3.jpg' },
  ]);
  console.log('Products seeded');
};

// Seed all data
const seedData = async () => {
  await seedUsers();
  await seedProducts();
  mongoose.connection.close(); // Close the connection when done
};

seedData();
