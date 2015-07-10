
exports.config = {
  allScriptsTimeout: 11000,
  baseUrl: 'http://localhost:3000/examples/todo',
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
    showTiming: true
  },
  capabilities: {
    'browserName': 'chrome'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/*.e2e.js']
};