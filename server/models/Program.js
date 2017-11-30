const mongoose = require('mongoose');

const { Schema } = mongoose;
const programSchema = new Schema(
  {
    title: {
      type: String,
    },
    sourceCode: {
      type: String,
    },
    input: {
      type: String,
    },
    language: {
      type: String,
      enum: ['python', 'c', 'cpp', 'java', 'javascript'],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Program', programSchema);
