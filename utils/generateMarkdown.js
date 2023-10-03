const { makeBadge, ValidationError } = require('badge-maker')

function renderLicenseBadge(license) {
  const MITLicense = {
    label: 'build',
    message: 'MIT License',
    labelColor: 'red',
  }
  const GNUGPLv3 = {
    label: 'build',
    message: 'GNU GPLv3',
    labelColor: 'green',
  }
  const theUnlicense = {
    label: 'build',
    message: 'The Unlicense',
    labelColor: 'yellow',
  }
  if (license == 'MIT License') {
    return makeBadge(MITLicense);
  } 
  else if(license =='GNU GPLv3') {
    return makeBadge(GNUGPLv3)
  }
  else if(license ==='The Unlicense') {
    return makeBadge(theUnlicense)
  }
  else{
    return ''
  }
};

function renderLicenseLink(license) {
  if (license == 'MIT License') {
    return 'https://choosealicense.com/licenses/mit/'
  } 
  else if(license =='GNU GPLv3') {
    return 'https://choosealicense.com/licenses/gpl-3.0/'
  }
  else if(license ==='The Unlicense') {
    return 'https://choosealicense.com/licenses/unlicense/'
  }
  else{
    return ''
  }
};

function renderLicenseSection(license) {
  if (license != null)
  return `${renderLicenseLink(license)}
${renderLicenseBadge(license)}`
};



function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
      ${data.description}
      
  ## Table of Contents
    
      - [Installation](#installation)
      - [Usage](#usage)
      - [Credits](#credits)
      - [License](#license)
      
  ## Installation
      ${data.installation}
  
  ## Usage 
      ${data.usage}
  
  ## Credits
      ${data.contributing}
  
  ## License 
      ${data.license}
      ${renderLicenseSection(data.license)}
  
  ## Test
      ${data.tests}
  
  ## Questions
      If you have further inquiries feel free to email me at ${data.email}
      Or view my work over at ${data.GitHub}
      `
}

module.exports = generateMarkdown;
