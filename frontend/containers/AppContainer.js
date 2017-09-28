import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Columns from 'react-columns';

import Title from '../components/Title';
import Instructions from '../components/Instructions';
import InputDir from '../components/InputDir';
import Distance from '../components/Distance';
import Displacement from '../components/Displacement';
import Angle from '../components/Angle';
import RenderTriangle from '../components/RenderTriangle';

const AppContainer = ({ distance, displacement, setNorth, setSouth, setEast, setWest, angle, xIn, yIn }) => {
  return (
    <Columns columns={2}>
      <div>
        <Title />
        <Instructions />
        <InputDir dir="North" setDir={(num) => setNorth(num)} />
        <InputDir dir="South" setDir={(num) => setSouth(num)} />
        <InputDir dir="East" setDir={(num) => setEast(num)} />
        <InputDir dir="West" setDir={(num) => setWest(num)} />
        <Distance distance={distance} />
        <Displacement displacement={displacement} />
        <Angle angle={angle} />
      </div>
      <RenderTriangle xIn={xIn} yIn={yIn} />
    </Columns>
  )
}

AppContainer.propTypes = {
  angle: PropTypes.number,
  xIn: PropTypes.number,
  yIn: PropTypes.number,
  distance: PropTypes.number,
  displacement: PropTypes.number,
  setNorth: PropTypes.func,
  setSouth: PropTypes.func,
  setEast: PropTypes.func,
  setWest: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
      north: state.north,
      south: state.south,
      east: state.east,
      west: state.west,
      distance: state.distance,
      displacement: state.displacement,
      angle: state.angle,
      xIn: state.xIn,
      yIn: state.yIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setNorth: (num) => {
        dispatch({
          newVal: num,
          type: 'UPDATE_NORTH'
        })
      },
      setSouth: (num) => {
        dispatch({
          newVal: num,
          type: 'UPDATE_SOUTH'
        })
      },
      setEast: (num) => {
        dispatch({
          newVal: num,
          type: 'UPDATE_EAST'
        })
      },
      setWest: (num) => {
        dispatch({
          newVal: num,
          type: 'UPDATE_WEST'
        })
      }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
