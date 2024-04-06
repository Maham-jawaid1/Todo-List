#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] = [];
let conditions = true;

console.log(chalk.magentaBright.bold("\n\t Welcome to Maham - Todo-List Aplication\n"));

// while (conditions){
//       let addTask = await inquirer.prompt([
//          {
//             name: "task",
//             type: "input",
//             message: " Enter Your New Task :"
//          }
//       ]);
//       todoList.push(addTask.task);
//       console.log(`${addTask.task} Task added in Todo-List successfully`);

//       let addMoreTask = await inquirer.prompt([
//          {
//             name: "addmore",
//             type: "confirm",
//             message: " Do you want to add more task ?",
//             default: "false"
//          }
//       ]);
//       conditions = addMoreTask.addmore
// }
// console.log(chalk.bgMagentaBright.bold("\n\tYour updated Todo-List:",todoList));

let main = async () => {
   while (conditions){
      let option = await inquirer.prompt([
  {
          name : "choice",
          type : "list",
          message: "Select an option you want to do:",
          choices : ["Add Task", "Delete Task", "Update Task", "View Todo-List","Exit"],

  }
      ]);
    if(option.choice === "Add Task"){
     await addTask()
      }
      else if (option.choice === "Delete Task"){
        await deleteTask()
      }
      else if (option.choice === "View Todo-List" ){
         await viewTask()
      }
      else if (option.choice === "Exit") {
         conditions = false;
      }
   }
}

// function to add new task to the list
let addTask = async () => {
      let newTask = await inquirer.prompt([
         {
           name : "task",
           type: "input",
           message: "Enter your new task:",
         }
      ]);
      todoList.push( newTask.task);
      console.log(`\n ${newTask.task} task added successfully in Todo-List`);
}
//function to view all todo list task
let viewTask =  ()=> {
   console.log("\n Your Todo-List: \n");
   todoList.forEach((task,index) => {
      console.log(`${index}: ${task}`)
   })
}


//function to delete task from the list
let deleteTask = async () => {
      await viewTask()
      let taskIndex = await inquirer.prompt([
         {
            name: "index",
            type: "number",
            message: "Enter the `index no.`of the task  you want to delete:",
         }
      ]);
      let deleteTask = todoList.splice(taskIndex.index, 1);
      console.log(`\n ${deleteTask} this task has been deleted successfully from your Todo-list\n`);
}



main();