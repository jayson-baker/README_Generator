// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case "Mozilla Public License 2.0":
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    case "Apache 2.0 License":
      return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    case "Boost Software License 1.0":
      return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
    case "None":
      return "";
    default:
      return "";
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `https://opensource.org/license/mit/`;
    case "Mozilla Public License 2.0":
      return `https://opensource.org/license/mpl-2-0/`;
    case "Apache 2.0 License":
      return `https://opensource.org/license/apache-2-0/`;
    case "Boost Software License 1.0":
      return `https://www.boost.org/LICENSE_1_0.txt`;
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

The MIT License`;
    case "Mozilla Public License 2.0":
      return `## License

Mozilla Public License 2.0`;
    case "Apache 2.0 License":
      return `## License

Apache 2.0 License`;
    case "Apache 2.0 License":
      return `## License

Boost Software License 1.0`;
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
