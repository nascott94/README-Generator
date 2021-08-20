// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return `## License
    This project is licensed with ${license}`;
  }
  return;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return `## License link
    //where returns th actuion link of the license`;
  }
  return;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //creaing my markdown with template stings
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Descprition
  ${data.description}

  ## Table of Contents
  


`;
}

module.exports = generateMarkdown;
