import React from 'react';
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';

class InputSouth extends React.Component {
  handleChange(e) {
    if (e.target.value != '' && !isNaN(e.target.value)) {
      this.props.setSouth(parseInt(e.target.value));
    } else {
      this.props.setSouth(0);
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
              <InputGroup.Addon>South</InputGroup.Addon>
              <FormControl type='text' value={this.props.south} onChange={(e) => this.handleChange(e)} />
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default InputSouth;
