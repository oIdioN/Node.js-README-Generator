const inquirer = require("inquirer");
const fs = require("fs");

// Function to generate license badge based on user's choice
function renderBadge(license) {
    let badge = '';
    switch (license) {
        case 'MIT':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)';
            break;
        case 'Apache 2.0':
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=for-the-badge)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'GPLv3':
            badge = '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'GPL':
            badge = '[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg?style=for-the-badge)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'Boost':
            badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg?style=for-the-badge)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
        case 'GNU AGPL v3':
            badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg?style=for-the-badge)](https://www.gnu.org/licenses/agpl-3.0)';
            break;
        case 'Perl':
            badge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg?style=for-the-badge)](https://opensource.org/licenses/Artistic-2.0)';
            break;

        // Default license - MIT
        default:
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)';            
    }
    return badge;
}

// Function to generate the README content
const generateREADME = (answers) => {
    let badge = renderBadge(answers.license);
    badge += ` This project is licensed under the ${answers.license} license.`;
    return `# ${answers.title}
    

${badge}

# Description
${answers.description}

# Table of Contents
- **[Description](#description)**
- **[License](#license)**
- **[Features](#features)**
- **[Installation](#installation)**
- **[Test](#tests)**
- **[Usage](#usage)**
- **[Contributions](#contributions)**
- **[Contact](#contact)**
- **[Acknowledgments](#acknowledgments)**

# License
${answers.license}

This project is licensed under the [${answers.license}](https://opensource.org/licenses/${answers.license.toLowerCase().replace(' ', '_')}) license. <br>
To learn further about the license, please follow the provided link provided.

## Features
${answers.features}

# Installation
${answers.installation}

## Tests
${answers.tests}

## Usage
${answers.usage}

## Contributions
${answers.contributions}

# Contact
For any inquires contact me either at ${answers.email} or     
GitHub: [${answers.github}](https://github.com/${answers.github})

# Acknowledgement
${answers.acknowledgement}  

`;
};

// Prompt the user for input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description of your project:",
    },
        {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "Apache 2.0", "GPLv3", "GPL", "Boost", "GNU AGPL v3", "Perl",],
    },
    {
        type: "input",
        name: "features",
        message: "What are the key features of your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Explain how to use your project:",
    },
    {
        type: "input",
        name: "contributions",
        message: "How can others contribute to your project?:",
    },
    {
        type: "input",
        name: "tests",
        message: "Describe how to run tests for your project:",
    },
    {
        type: "input",
        name: "email",
        message: "Provide your email for contact information:",
    },
    {
        type: "input",
        name: "github",
        message: "What is you Github account?",
    },
    {
        type: "input",
        name: "acknowledgement",
        message: "Any contributing peers, teams or someone you want to thank for?",
    },
  ];

// Generating the README file and placing in the _build folder
inquirer.prompt(questions).then((answers) => {
     console.log(answers);

    const readmeContent = generateREADME(answers);
    fs.writeFile('_build/README.md', readmeContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Your README file has been generated successfully into the _build folder!');
        }
    });
});