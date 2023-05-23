/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Hotel = new Schema({
    hName: {
        type: String
    },
    address: {
        type: String
    },
    pNumber: {
        type: String
    },
    email: {
        type: String
    },
    date: {
        type: String
    },
    infromation: {
        type: String
    }
 },
  {
    collation: 'hotel'
});

module.exports = mongoose.model('Hotel',Hotel);
