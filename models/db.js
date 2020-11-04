///enne on vaja intallida Mongo package git bash terminalis: npm i mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/toDoListDB',{useNewUrlParser: true, useUnifiedTopology:true});
require('./task'); /// model, mida ta kasutab selleks, et andmedi pakkida andmebassi ja kätte saada andmeid.
require('./worktasks');