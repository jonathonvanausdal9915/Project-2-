function renderLicenseBadge(license) {
    return `![Github License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  
  // If there is no license, return an empty string
  function renderLicenseLink(license) {}
  
  // If there is no license, return an empty string
  function renderLicenseSection(license) {}
  
  // function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Project Description
    ${data.description}
    ## Table of Contents:
    * [Installation](#installation)
    * [Contributors](#contributors)
    * [Usage](#usage)
    * Link to demo of code: 
    * [Tests](#tests)
    * [Questions](#questions)
    * [License](#license)
    * [Description](#description)
    ## Lead Name:
    ${data.name}
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Contributors
    ${data.contribution}
    ## Tests
    ${data.test}
    ## License
    ${data.license}
    ## Questions
    Github: [${data.username}](https://github.com/${data.username}/)
    Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;