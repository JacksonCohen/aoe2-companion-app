import mongoose, { Schema } from 'mongoose';

const subSchema = new Schema(
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
  { _id: false }
);

const BuildOrderSchema = new Schema({
  order: [subSchema],
});

module.exports = mongoose.models.BuildOrders || mongoose.model('BuildOrders', BuildOrderSchema);
