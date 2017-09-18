import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Instructions from '../components/Instructions';
import InputNorth from '../components/InputNorth';
import InputSouth from '../components/InputSouth';
import InputEast from '../components/InputEast';
import InputWest from '../components/InputWest';
import Distance from '../components/Distance';
import Displacement from '../components/Displacement';

const AppContainer = ({ north, south, east, west, distance, displacement, setNorth, setSouth, setEast, setWest }) => {
  return (
    <div>
      <Title />
      <Instructions />
      <InputNorth north={north} setNorth={(num) => setNorth(num)} />
      <InputSouth south={south} setSouth={(num) => setSouth(num)} />
      <InputEast east={east} setEast={(num) => setEast(num)} />
      <InputWest west={west} setWest={(num) => setWest(num)} />
      <Distance distance={distance} />
      <Displacement displacement={displacement} />
    </div>
  )
}

AppContainer.propTypes = {
  north: PropTypes.number,
  south: PropTypes.number,
  east: PropTypes.number,
  west: PropTypes.number,
};

const mapStateToProps = (state) => {
    return {
      north: state.north,
      south: state.south,
      east: state.east,
      west: state.west,
      distance: state.distance,
      displacement: state.displacement
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setNorth: (num) => {
        dispatch({
          north: num,
          type: 'UPDATE_NORTH'
        })
      },
      setSouth: (num) => {
        dispatch({
          south: num,
          type: 'UPDATE_SOUTH'
        })
      },
      setEast: (num) => {
        dispatch({
          east: num,
          type: 'UPDATE_EAST'
        })
      },
      setWest: (num) => {
        dispatch({
          west: num,
          type: 'UPDATE_WEST'
        })
      }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
