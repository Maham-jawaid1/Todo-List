#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let conditions = true;

console.log(chalk.magentaBright.bold("\n\t Welcome to Maham - Todo-List Aplication\n"));

while (conditions){
      let addTask = await inquirer.prompt([
         {
            name: "task",
            type: "input",
            message: " Enter Your New Task :"
         }
      ]);
      todoList.push(addTask.task);
      console.log(`${addTask.task} Task added in Todo-List successfully`);

      let addMoreTask = await inquirer.prompt([
         {
            name: "addmore",
            type: "confirm",
            message: " Do you want to add more task ?",
            default: "false"
         }
      ]);
      conditions = addMoreTask.addmore
}
console.log(chalk.bgMagentaBright.bold("\n\tYour updated Todo-List:",todoList));