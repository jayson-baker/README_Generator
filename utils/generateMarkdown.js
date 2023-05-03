// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `## License
      MIT`;
    case "Microsoft Public License":
      return `## License
      Microsoft Public License`;
    case "Open Software License 3.0":
      return `## License
      Open Software License 3.0`;
    case "None":
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
