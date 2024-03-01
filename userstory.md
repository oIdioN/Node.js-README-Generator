Working with ES6 & Node.js: Professional README Generator

When creating an open source project on GitHub, it's important to have a high-quality README for the app. This should include the app's purpose, how to use the app, how to install it, how to report issues, and how to make contributions. This last part increases the likelihood that other developers will contribute to the success of the project.

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package
Links to an external site.. Review the Professional README Guide

Links to an external site. as a reminder of everything that a high-quality, professional README should contain.

The application will be invoked by using the following command:

node index.js

Because this application won't be deployed, you'll also need to provide a link to a walkthrough video that demonstrates its functionality. Review the Video Submission Guide

Links to an external site. before you get started. You'll need to submit a link to the video and add it to the README of your project.

Before you begin, download your starter code

Links to an external site. for this Challenge and unzip the zip file.
User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

Acceptance Criteria

    Create a command-line application that accepts user input.

    When a user is prompted for information about the application repository, a high-quality, professional README.md is generated with:

        The title of my project

        Sections entitled:

        Description

        Table of Contents

        Installation

        Usage

        License

        Contributing

        Tests

        Questions

    When a user enters the project title, it's displayed as the title of the README.

    When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

    When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

    When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.

    When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

    When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.

Getting Started

Here are some guidelines to help you get started:

    Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.

    Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.

Grading Requirements
note

If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:

    A repository that has no code

    A repository that includes a unique name but nothing else

    A repository that includes only a README file but nothing else

    A repository that only includes starter code

This Challenge is graded based on the following criteria:
Deliverables: 20%

    A sample README generated using the application must be submitted.

    Your GitHub repository containing your application code.

Walkthrough Video: 27%

    A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.

    The walkthrough video must demonstrate how a user would invoke the application from the command line.

    The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

    The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

Technical Acceptance Criteria: 40%

    Satisfies all of the above acceptance criteria plus the following:
        Uses the Inquirer package 

        Links to an external site..

Repository Quality: 13%

    Repository has a unique name.

    Repository follows best practices for file structure and naming conventions.

    Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

    Repository contains multiple descriptive commit messages.

    Repository contains a high-quality README with description and a link to walkthrough video.

Review

You are required to submit the following for review:

    A walkthrough video demonstrating the functionality of the application.

    A sample README.md file for a project repository generated using your application

    The URL of the GitHub repository, with a unique name and a README describing the project
