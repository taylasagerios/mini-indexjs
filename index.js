const inquirer = require("inquirer");
const fs = require("fs");
inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "location",
            message: "What is your location?"
        },
        {
            type: "input",
            name: "bio",
            message: "What do you want to put for your bio?"
        },
        {
            type: "input",
            name: "linkedInURL",
            message: "What is your LinkedIn URL?"
        },
        {
            type: "input",
            name: "githubURL",
            message: "What is your Github URL?"
        },
    ])
    .then((responses) => {
        var htmlText = genIndexhtml(responses)
        fs.writeFile('index.html', htmlText, (err) =>
            err ? console.error(err) : console.log('Success!')
        );

    })

function genIndexhtml(answers){
    console.log(answers)
    var htmlTxt = ""
    htmlTxt += `# Name
    ${answers.name}
    
## Location
    ${answers.location}
## Bio
    ${answers.bio}   
    
## LinkedInURL
  ${answers.linkedInURL}
## GithubURL
${answers.githubURL}
    

    `
return htmlTxt
}