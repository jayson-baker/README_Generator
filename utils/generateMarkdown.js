// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `https://opensource.org/license/mit/`;
    case "Mozilla Public License 2.0":
      return `https://opensource.org/license/mpl-2-0/`;
    case "IBM Public License Version 1.0":
      return `https://opensource.org/licenses/IPL-1.0`;
    case "None":
      return "";
    default:
      return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `## License 
MIT`;
    case "Mozilla Public License 2.0":
      return `## License
Mozilla Public License 2.0`;
    case "IBM Public License Version 1.0":
      return `## License
IBM Public License Version 1.0`;
    case "None":
      return "";
    default:
      return "";
  }
}

// Function to generate markdown for README
function generateMarkdown({
  title,
  description,
  install,
  usage,
  contribution,
  tests,
  license: [lic],
  username,
  email,
}) {
  return `# ${title} ${renderLicenseBadge(lic)}
  
## Description
${description}
  
## Install Instructions
${install}
  
## Usage
${usage}
  
## Contributors
${contribution}
  
## Tests
${tests}
  
${renderLicenseSection(lic)}
${renderLicenseLink(lic)}

## Contact for Questions
${username}
${email}`;
}

module.exports = generateMarkdown;
