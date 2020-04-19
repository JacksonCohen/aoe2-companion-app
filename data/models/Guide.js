import { Schema } from 'mongoose';

const GuideSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = GuideSchema;
