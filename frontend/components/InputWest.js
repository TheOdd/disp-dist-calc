import React from 'react';
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';

class InputWest extends React.Component {
  handleChange(e) {
    if (e.target.value != '' && !isNaN(e.target.value)) {
      this.props.setWest(parseInt(e.target.value));
    } else {
      this.props.setWest(0);
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
              <InputGroup.Addon>West</InputGroup.Addon>
              <FormControl type='text' value={this.props.west} onChange={(e) => this.handleChange(e)} />
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default InputWest;
