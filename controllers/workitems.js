const date=require('../generatedate.js');
const Task=require('../models/worktasks');


///let toDoList =[];


exports.getWorkPage= (req,res)=>{

    Task.fetchTasks(workItems=>{
        let day =date.getDate();
        res.render("work.ejs",{date: day, toDoItems:workItems});
    }); ///items=callback

    
    //let day=date.getDate(); //// siin kutsutakse välja const date = require(__dirname+"/generateDate.js");
    //const itemsList=Task.fetchTasks();
    /*let weekday = date.getWeekDay();
    console.log(day);*/

    ///res.render("work.ejs",{date: day, toDoItems: itemsList});
};
exports.postNewWork=(req,res)=>{

    const item = new Task(req.body.newWork);
    item.saveTask();
    /*let newWork = req.body.newWork; // name tuleb vaadata input tag seest
    toDoList.push(newWork); // push lisab elemendi massiivi sisse.*/

    res.redirect("/work");


};
exports.deleteWork = (req,res)=>{
    console.log("Call from to delete",req.body.checkbox);
    Task.deleteWork(req.body.checkbox);
    res.redirect('/work');
}