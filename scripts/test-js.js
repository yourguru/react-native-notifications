const exec = require('shell-utils').exec;
const _ = require('lodash');

run();

function run() {
  exec.execSync(`jest --coverage`);
}
