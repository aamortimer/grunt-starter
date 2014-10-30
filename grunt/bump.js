module.exports = function (grunt) {
  return {
    options: {
      files: ['package.json'],
      updateConfigs: [],
      commit: false,
      commitMessage: 'Updated to v%VERSION%',
      commitFiles: ['package.json'],
      createTag: true,
      tagName: 'v%VERSION%',
      tagMessage: 'Version %VERSION%',
      push: false,
      pushTo: 'origin',
      gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
    }
  };
};