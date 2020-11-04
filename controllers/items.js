const date=require('../generatedate.js');
const mongoose = require('mongoose');

const Task = mongoose.model('Task');




exports.getMainPage= (req,res)=>{
    let day =date.getDate();
    Task.find((error,tasks)=>{
        if(!error){
            res.render("index.ejs",{date: day, toDoItems:tasks});
        }else{
            console.log("Failed to retireve data: ", error);
        }
    });  
};

exports.postNewItem=(req,res)=>{
    const item = req.body.newTask;
    let newTask = new Task();
    newTask.description=item;
   
    newTask.save((error,response)=>{
        if(!error){
            res.redirect('/');
        }else{
            console.log(error);
        }
    });
};
exports.deleteItem = (req,res)=>{
    console.log("Call from to delete",req.body.checkbox);
    const checkItemId= req.body.checkbox;

    Task.findByIdAndRemove(checkItemId,function(error){
        if(!error){
            console.log("Successfully deleted the item");
            res.redirect('/');
        }else{
            console.log(error);
        }
    });
}
