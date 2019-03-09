#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const ctx = new chalk.constructor({ level: 2 });

const init = () => {
  console.log('\n')
  console.log(
    ctx.hex('#3786DC')(
      figlet.textSync(" Pneuma", {
        font: 'Modular', // Doom
        horizontalLayout: "full",
        verticalLayout: "full"
      })
    )
  );
  console.log('\n')
  console.log(ctx.green('🌪️  Pneuma is starting.'))
}

const askQuestions = () => {
  const questions = [
    {
      name: "PROJECTNAME",
      type: "input",
      message: "What's the name of your application?"
    },
    {
      type: "list",
      name: "TEMPLATE",
      message: "What kind of application do you have in mind?",
      choices: [
        "Empty - (react-router, redux, saga)",
        "Simple Auth - (react-router, redux, saga, firebase-auth)",
        "Backend with admin template - (react-router, redux, saga, firebase-auth)",
      ]
    }
  ];
  return inquirer.prompt(questions);
};

const run = async () => {
  // show script introduction
  init();

  // ask questions
  const answers = await askQuestions();
  const { PROJECTNAME, TEMPLATE } = answers;
  // console.log(answers)

  // create the file
  // show success message
};

run();
