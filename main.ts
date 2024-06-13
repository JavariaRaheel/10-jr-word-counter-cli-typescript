#! /usr/bin/env node 

import inquirer from "inquirer";
console.log("Welcome to word counter app!");
let myLoop = true;
while(myLoop){
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "para",
            message: "Enter your paragraph to count words and letters in it!",
        },
        {
            type: "list",
            name: "ask",
            message: "what do you want to count in your paragraph?",
            choices: ["1. Letters","2. Words", "3. Both Letters and Words"],
        },
    ]);  
    let {para,ask} = userInput

        if(para.length === 0) emptyInput();
            
        if(ask === "1. Letters") letterFun();
        if( ask === "2. Words") wordsFun();
        if( ask === "3. Both Letters and Words") both();


     function emptyInput(){
        console.log(`Your input is empty please try again with a vaild input\n`)
     }
     function letterFun(){ 
        const letterWithoutSpace  = para.replace(/\s/g, "");
        const letterCount = letterWithoutSpace.length;
        console.log(`\nTotal letters in your giving paragraph are ${letterCount}!`);
     }

     function wordsFun(){
        const wordsArray = para.split(" ");
        const wordsCount = wordsArray.length;
        console.log(`Total words in your paragraph ${wordsCount}!`);
     }

     function both(){
        letterFun();
        wordsFun();

     };

     let countMore = await inquirer.prompt({
        type: "confirm",
        name: "more",   
        message: "do you want to more counts?",
        default: false
     })
     if(!countMore.more){
        myLoop = false
        console.log(`Thanks for using My Word counter app.`)
     }
    
} 