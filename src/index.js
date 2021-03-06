const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [
  {
    name: 'githubUser',
  },
];

prompt.get(promptAttributes, async (err, result) => {
  if (err) {
    return 1;
  }
  getDataFromGithub(result.githubUser);
});

prompt.start();
