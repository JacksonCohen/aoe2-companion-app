import mongoose, { Schema } from 'mongoose';

const subSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    stepTitle: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const BuildOrderSchema = new Schema({
  orderTitle: { type: String, required: true },
  order: [subSchema],
});

module.exports = mongoose.models.BuildOrders || mongoose.model('BuildOrders', BuildOrderSchema);
