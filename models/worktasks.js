const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workSchema = new Schema({
description: {
    type: String
}
});

mongoose.model('Work',workSchema);