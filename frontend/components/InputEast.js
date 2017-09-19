import React from 'react';
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';

class InputEast extends React.Component {
  handleChange(e) {
    if (e.target.value != '' && !isNaN(e.target.value)) {
      this.props.setEast(parseFloat(e.target.value));
    } else {
      this.props.setEast(0);
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
              <InputGroup.Addon>East</InputGroup.Addon>
              <FormControl type='text' value={this.props.east} onChange={(e) => this.handleChange(e)} />
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default InputEast;
