const mongoose = require('mongoose');
const electricMeterSchema = new mongoose.Schema(
  {
     electricMeterId: {
       type: String,
     },
    electricMeterName: {
      type: String,
    },
    location: {
      type: String,
    },
    manufacturer: {
      type: String,
    },
    model: {
      type: String,
    },
    electricCapacity: {
      type: String,
    },
    installationMethod: {
      type: String,
    },
    userId: {
      type: String,
      required: false,
    },
    cloudStatus: {
      type: Number,
      required: false,
    },
    workingStatus: {
      type: Number,
      required: false,
    },
    activeStatus: {
      type: Number,
      required: false,
    },
    measurementAccuracy: {
      type: String,
    },
    dimensions: {
      type: String,
    },
    deploymentDate: {
      type: String,
    },
    installationDate: {
      type: String,
    },
    power: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model('electricMeter', electricMeterSchema, 'electricMeter');
