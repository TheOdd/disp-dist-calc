import React from 'react';
var core = require('mathjs/core');
var math = core.create();
math.import(require('mathjs/lib/function/arithmetic/round'));

const Distance = ({ distance }) => (
  <h3>Distance: {math.round(distance, 3)}</h3>
)

export default Distance;
