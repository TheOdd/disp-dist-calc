const defaultState = {
  north: 0,
  south: 0,
  east: 0,
  west: 0,
  displacement: 0,
  distance: 0,
  angle: 0,
  xIn: 0,
  yIn: 0
};

var [dist, disp, distanceX, distanceY, angle] = Array(5).fill(0);

const calcFunc = (north, south, east, west) => {
  dist = north + south + east + west;
  distanceX = Math.abs(west - east);
  distanceY = Math.abs(south - north);
  disp = Math.hypot(distanceY, distanceX);
  angle = distanceX > distanceY ? distanceY : distanceX;
  angle /= disp;
  angle = Math.asin(angle) * 180/Math.PI;
  if (isNaN(angle))
    angle = 0;
  return {
      north: north,
      south: south,
      east: east,
      west: west,
      distance: dist,
      displacement: disp,
      angle: angle,
      xIn: distanceX,
      yIn: distanceY
  };
}

const rootReducer = (state = defaultState, action) => {
  var { newVal } = action;
  var { north, south, east, west } = state;
  switch (action.type) {
    case 'UPDATE_NORTH':
      return calcFunc(newVal, south, east, west);
    case 'UPDATE_SOUTH':
      return calcFunc(north, newVal, east, west);
    case 'UPDATE_EAST':
      return calcFunc(north, south, newVal, west);
    case 'UPDATE_WEST':
      return calcFunc(north, south, east, newVal);
    default:
      return state;
  }
}

export default rootReducer;
