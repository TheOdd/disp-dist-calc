import React from 'react';
var core = require('mathjs/core');
var math = core.create();
math.import(require('mathjs/lib/function/arithmetic/round'));

const Angle = ({ angle }) => (
  <h3>Angle: {math.round(angle, 3)}°</h3>
)

export default Angle;
