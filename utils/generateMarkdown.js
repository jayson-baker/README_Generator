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

This application is covered under The MIT License`;
    case "Mozilla Public License 2.0":
      return `## License

This application is covered under Mozilla Public License 2.0`;
    case "Apache 2.0 License":
      return `## License

This application is covered under Apache 2.0 License`;
    case "Apache 2.0 License":
      return `## License

This application is covered under Boost Software License 1.0`;
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

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Installation

${install}
  
## Usage

${usage}
  
${renderLicenseSection(lic)}

${renderLicenseLink(lic)}

## Contributing

${contribution}
  
## Tests

${tests}


## Questions

https://github.com/${username}

If you have any questions, please feel free to contact me at ${email}`;
}

module.exports = generateMarkdown;
