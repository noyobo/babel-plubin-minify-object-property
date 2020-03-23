const pluginTester = require('babel-plugin-tester').default;
const path = require('path');
const plugin = require('../index');

pluginTester({
  pluginName: 'minify-object-property',
  plugin,
  fixtures: path.join(__dirname, '../fixtures'),
});
