// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents  
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Testing](#testing)
  6. [License](#license)
  7. [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  To use the app:  
  ${data.usage}
  
  ## Contributing
  If you wish to contribute:  
  ${data.contribution}
  
  ## Testing
  To test the application: 
  ${data.tests}
  
  ## License
  ${data.license} 
 
  ##Quetions
  ${data} `;
}

module.exports = generateMarkdown;


