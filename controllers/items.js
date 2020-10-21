const date=require('../generatedate.js');
const Task=require('../models/task');

///let toDoList =[];


exports.getMainPage= (req,res)=>{
    
    let day=date.getDate(); //// siin kutsutakse välja const date = require(__dirname+"/generateDate.js");
    const itemsList=Task.fetchTasks();
    /*let weekday = date.getWeekDay();
    console.log(day);*/

    res.render("index.ejs",{date: day, toDoItems: itemsList});
};
exports.postNewItem=(req,res)=>{
    const item = new Task(req.body.newTask);
    item.saveTask();


    /*let newTask = req.body.newTask; // name tuleb vaadata input tag seest
    toDoList.push(newTask); // push lisab elemendi massiivi sisse.*/
    res.redirect("/");


};