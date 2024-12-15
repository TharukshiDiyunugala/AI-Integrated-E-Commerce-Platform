const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number,
    },
  ],
  totalAmount: Number,
  status: { type: String, default: 'Pending' },
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
