/**
 * Module dependencies.
 */

var program = require('../')
  , should = require('should');

program
  .version('0.0.1')
  .option('-c, --cheese <cheese*>', 'specify a list of cheeses', function(val) {return val.split(' ')})
  .option('-x, --extra <cheese>', 'specify an extra cheese')
  .option('-s, --sauce <sauce*>', 'specify a list of sauces', function(val) {return val.split(' ')})

  .option('-p, --pepper', 'add pepper');

program.parse(['node', 'test', '--cheese', 'feta', 'cheddar', '--extra', 'gouda', 'other', '--sauce', 'bbq', '--', 'tomato']);
program.cheese.should.be.eql(['feta', 'cheddar']);
program.extra.should.be.eql('gouda');
program.args.should.be.eql(['other', 'tomato']);
program.sauce.should.be.eql(['bbq']);
