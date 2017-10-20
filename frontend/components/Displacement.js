import React from 'react';
var core = require('mathjs/core');
var math = core.create();
math.import(require('mathjs/lib/function/arithmetic/round'));

const Displacement = ({ displacement }) => (
  <h3>Displacement: {math.round(displacement, 3)}</h3>
)

export default Displacement;
