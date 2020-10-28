const date=require('../generatedate.js');
const Task=require('../models/task');

///let toDoList =[];


exports.getMainPage= (req,res)=>{

    Task.fetchTasks(items=>{
        let day =date.getDate();
        res.render("index.ejs",{date: day, toDoItems:items});
    }); ///items=callback
    
   /* let day=date.getDate(); //// siin kutsutakse välja const date = require(__dirname+"/generateDate.js");
    const itemsList=Task.fetchTasks();*/
    /*let weekday = date.getWeekDay();
    console.log(day);*/

    ///res.render("index.ejs",{date: day, toDoItems:itemsList});
};
exports.postNewItem=(req,res)=>{
    const item = new Task(req.body.newTask);
    item.saveTask();


    /*let newTask = req.body.newTask; // name tuleb vaadata input tag seest
    toDoList.push(newTask); // push lisab elemendi massiivi sisse.*/
    res.redirect("/");


};
exports.deleteItem = (req,res)=>{
    console.log("Call from to delete",req.body.checkbox);
    Task.deleteItem(req.body.checkbox);
    res.redirect('/');
}