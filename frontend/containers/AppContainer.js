import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Columns from 'react-columns';

import Title from '../components/Title';
import Instructions from '../components/Instructions';
import InputNorth from '../components/InputNorth';
import InputSouth from '../components/InputSouth';
import InputEast from '../components/InputEast';
import InputWest from '../components/InputWest';
import Distance from '../components/Distance';
import Displacement from '../components/Displacement';
import Angle from '../components/Angle';
import RenderTriangle from '../components/RenderTriangle';

const AppContainer = ({ north, south, east, west, distance, displacement, setNorth, setSouth, setEast, setWest, angle, xIn, yIn }) => {
  return (
    <Columns columns={2}>
      <div>
        <Title />
        <Instructions />
        <InputNorth north={north} setNorth={(num) => setNorth(num)} />
        <InputSouth south={south} setSouth={(num) => setSouth(num)} />
        <InputEast east={east} setEast={(num) => setEast(num)} />
        <InputWest west={west} setWest={(num) => setWest(num)} />
        <Distance distance={distance} />
        <Displacement displacement={displacement} />
        <Angle angle={angle} />
      </div>
      <RenderTriangle xIn={xIn} yIn={yIn} />
    </Columns>
  )
}

AppContainer.propTypes = {
  north: PropTypes.number,
  south: PropTypes.number,
  east: PropTypes.number,
  west: PropTypes.number,
  angle: PropTypes.number,
  xIn: PropTypes.number,
  yIn: PropTypes.number
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
