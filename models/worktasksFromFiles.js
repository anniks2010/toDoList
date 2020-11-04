const fs =require('fs');
const path = require('path'); ///see on objekt, kuhu salvestatakse teekonna fail. antud objektil on mugav meetod join.
const pathToRegularWorkFile = path.join(path.dirname(process.mainModule.filename),'data','regularWork.json');


////let toDoList=[];
module.exports=class Task{
    constructor(task){
        this.description = task; ///võib panna task.description kui on rohkem kui üks omandus
    }

    saveTask(){
        fs.readFile(pathToRegularWorkFile,(error, fileContent)=>{
            let works=[]; ///tasks massiiv on ajutine
            if (!error){
                works =JSON.parse(fileContent);
            }else{
                console.log(error);
            }
            works.push(this); ////this=item
            fs.writeFile(pathToRegularWorkFile,JSON.stringify(works),(error)=>{
                console.log('Error',error); 
        });

        });




        ///toDoList.push(this);
    }

    static fetchTasks(callBack){
        fs.readFile(pathToRegularWorkFile,(error,fileContent)=>{
            if (error){
                    callBack([]);
            }
            callBack(JSON.parse(fileContent)); ///see return peaks olema väljaspool meetodit, sest muidu peale readFile lõppemist on return tühi. See pärast kasutamisel callBack
    });


        ///return toDoList;
    }
    static deleteWork(description){
        fs.readFile(pathToRegularWorkFile,(error,fileContent)=>{
            let works =[];
            if(!error){
                works=JSON.parse(fileContent);
            }
            for(let i=0; i<works.length; i++){
                if(works[i].description===description){
                    console.log(works[i].description, "deleted");
                    works.splice(i,1);
                    break;
                }
            }
        fs.writeFile(pathToRegularWorkFile,JSON.stringify(works),(error)=>{
        console.log("Error while trying to delete",error);
        });

        });        
    }
}