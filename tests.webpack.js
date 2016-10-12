require('babel-polyfill');
// some setup first

const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');

chai.use(chaiEnzyme());

const context = require.context('./src', true, /\.spec\.js$/);
context.keys().forEach(context);