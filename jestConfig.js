/* eslint-disable import/no-extraneous-dependencies */
// React enzyme
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
