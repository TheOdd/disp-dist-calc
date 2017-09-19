const defaultState = {
  north: 0,
  south: 0,
  east: 0,
  west: 0,
  displacement: 0,
  distance: 0
};

var dist = 0;
var disp = 0;
var distanceX = 0;
var distanceY = 0;

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_NORTH':
      dist = state.south + state.east + state.west + action.north;
      distanceX = Math.abs(state.west - state.east);
      distanceY = Math.abs(state.south - action.north);
      disp = Math.hypot(distanceY, distanceX);
      return Object.assign({}, state, {
          north: action.north,
          distance: dist,
          displacement: disp
      });
    case 'UPDATE_SOUTH':
      dist = state.north + state.east + state.west + action.south;
      distanceX = Math.abs(state.west - state.east);
      distanceY = Math.abs(state.north - action.south);
      disp = Math.hypot(distanceY, distanceX);
      return Object.assign({}, state, {
          south: action.south,
          distance: dist,
          displacement: disp
      });
    case 'UPDATE_EAST':
      dist = state.north + state.south + state.west + action.east;
      distanceX = Math.abs(state.west - action.east);
      distanceY = Math.abs(state.south - state.north);
      disp = Math.hypot(distanceY, distanceX);
      return Object.assign({}, state, {
          east: action.east,
          distance: dist,
          displacement: disp
      });
    case 'UPDATE_WEST':
      dist = state.north + state.east + state.south + action.west;
      distanceX = Math.abs(action.west - state.east);
      distanceY = Math.abs(state.south - state.north);
      disp = Math.hypot(distanceY, distanceX);
      return Object.assign({}, state, {
          west: action.west,
          distance: dist,
          displacement: disp
      });
    default:
      return state;
  }
}

export default rootReducer;