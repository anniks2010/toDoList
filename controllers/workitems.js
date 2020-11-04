const date=require('../generatedate.js');
const mongoose = require('mongoose');
const Work = mongoose.model('Work');




exports.getWorkPage= (req,res)=>{

    let day =date.getDate();
    Work.find((error,works)=>{
        if(!error){
            res.render("work.ejs",{date: day, toDoItems:works});
        }else{
            console.log("Failed to retireve data: ", error);
        }
    });  
};
exports.postNewWork=(req,res)=>{

    const work = req.body.newWork;
    let newWork = new Work();
    newWork.description=work;
   
    newWork.save((error,response)=>{
        if(!error){
            res.redirect('/work');
        }else{
            console.log(error);
        }
    });


};
exports.deleteWork = (req,res)=>{
    console.log("Call from to delete",req.body.checkbox);
    const checkItemId= req.body.checkbox;

    Work.findByIdAndRemove(checkItemId,function(error){
        if(!error){
            console.log("Successfully deleted the item");
            res.redirect('/work');
        }else{
            console.log(error);
        }
    });
}