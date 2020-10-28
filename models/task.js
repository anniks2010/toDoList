const fs =require('fs');
const path = require('path'); ///see on objekt, kuhu salvestatakse teekonna fail. antud objektil on mugav meetod join.
const pathToRegularTaskFile = path.join(path.dirname(process.mainModule.filename),'data','regularTask.json'); ///mainModul on meie server fail, process on meie rakendus. See on address, kust saad faili, kuhu salvestada



//let toDoList=[]; seda ei kasuta enam, vaid salvestame json faili
module.exports=class Task{
    constructor(task){
        this.description = task; ///võib panna task.description kui on rohkem kui üks omandus
    }

    saveTask(){
        ///kõige pealt tuleb faili sisu lugeda
        fs.readFile(pathToRegularTaskFile,(error, fileContent)=>{
            let tasks=[]; ///tasks massiiv on ajutine
            if (!error){
                tasks =JSON.parse(fileContent);
            }else{
                console.log(error);
            }
            tasks.push(this); ////this=item
            fs.writeFile(pathToRegularTaskFile,JSON.stringify(tasks),(error)=>{
                console.log('Error',error);
        });

        });

        
        ////toDoList.push(this);
    }

    static fetchTasks(callBack){
        ////FetchTask peab saama andmed failist ja need tagastama
        fs.readFile(pathToRegularTaskFile,(error,fileContent)=>{
            if (error){
                    callBack([]);
            }
            callBack(JSON.parse(fileContent)); ///see return peaks olema väljaspool meetodit, sest muidu peale readFile lõppemist on return tühi. See pärast kasutamisel callBack
    });

        ////return toDoList;
    }

    static deleteItem(description){
        fs.readFile(pathToRegularTaskFile,(error,fileContent)=>{
            let tasks =[];
            if(!error){
                tasks=JSON.parse(fileContent);
            }
            for(let i=0; i<tasks.length; i++){
                if(tasks[i].description===description){
                    console.log(tasks[i].description, "deleted");
                    tasks.splice(i,1);
                    break;
                }
            }
        fs.writeFile(pathToRegularTaskFile,JSON.stringify(tasks),(error)=>{
        console.log("Error while trying to delete",error);
        });

        });        
    }
}