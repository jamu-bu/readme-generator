const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


inquirer 
    .prompt(questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {   
        type: 'input',
        name: 'installation',
        message: 'What are the instructions to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the steps of your project? Feel free to input video link demoing',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who were the contributors to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test the project?',
    },
    {
        type:'rawlist',
        name: 'license',
        message: 'What kind of License does your project use?',
        choices: [
            'MIT License',
            'GNU GPLv3',
            'The Unlicense',
        ]
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your GitHub URL',
    },
    {
        type: 'input',
        name:'email',
        message: 'What is your email address?'
    }
])
    .then((answers) => {
        const ReadMeContent = generateMarkdown(answers);
        console.log(answers)
        writeToFile('README.md',ReadMeContent)
        console.log(ReadMeContent);
    })
;


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err) =>
        err ? console.log(err): console.log ('created readme'))
}

function init() {}


init();