
let toDoList=[];
module.exports=class Task{
    constructor(task){
        this.description = task; ///võib panna task.description kui on rohkem kui üks omandus
    }

    saveTask(){
        toDoList.push(this);
    }

    static fetchTasks(){
        return toDoList;
    }
}