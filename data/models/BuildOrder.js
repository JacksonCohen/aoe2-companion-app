import mongoose, { Schema } from 'mongoose';

const BuildOrderSchema = new Schema({
  order: [
    {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      info: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.models.BuildOrders || mongoose.model('BuildOrders', BuildOrderSchema);
