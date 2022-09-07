const add = require('./calculator/add');
const sub = require('./calculator/sub');
const mult = require('./calculator/mult');
const div = require('./calculator/div');

module.exports = {
    add: add.add,
    sub: sub.sub,
    mult: mult.mult,
    div: div.div,
};