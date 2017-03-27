"use strict";

const babel = require("../.babelrc");
const register = require("babel-register").default;

register(babel);
register({
  extensions: [".js"],
  // Only js files in the test folder but not in the subfolder fixtures.
  only: [/packages\/.+\/test\/(?!fixtures\/).+\.js$/],
  babelrc: false,
  compact: true,
});