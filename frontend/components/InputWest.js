import React from 'react';
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';

class InputWest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    if (e.target.value != '' && !isNaN(e.target.value)) {
      this.props.setWest(parseFloat(e.target.value));
      this.setState({
        value: e.target.value
      })
    } else {
      this.setState({
        value: e.target.value
      })
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
            <InputGroup style={{maxWidth: '25%'}}>
              <InputGroup.Addon>West</InputGroup.Addon>
              <FormControl type='text' value={this.state.value} onChange={(e) => this.handleChange(e)} />
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default InputWest;
