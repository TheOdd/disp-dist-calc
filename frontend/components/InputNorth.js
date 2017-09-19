import React from 'react';
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';

class InputNorth extends React.Component {
  handleChange(e) {
    if (e.target.value != '' && !isNaN(e.target.value)) {
      this.props.setNorth(parseFloat(e.target.value));
    } else {
      this.props.setNorth(0);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup>
            <InputGroup style={{maxWidth: '10%'}}>
              <InputGroup.Addon>North</InputGroup.Addon>
              <FormControl type='text' value={this.props.north} onChange={(e) => this.handleChange(e)} />
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default InputNorth;
