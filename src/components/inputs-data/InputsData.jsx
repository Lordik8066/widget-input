import React, { Component } from 'react';
import logo from '../../assets/logo.png';

class InputsData extends Component {
  constructor() {
    super();
    this.state = {
      firstNumberValue: 5,
      secondNumberValue: 0,
      result: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmitButton(event) {
    event.preventDefault();
    this.setState({
      result: +this.state.firstNumberValue + +this.state.secondNumberValue
    })
  }

  render() {
    return <div className="inputs">
      <img src={logo} alt="logo"/>
      <form>
        <div>
          <label>
            First Number Value:<br/>
          </label>
          <input type="number" name="firstNumberValue" value={this.state.firstNumberValue} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>
            Second Number Value<br/>
          </label>
          <input type="number" name="secondNumberValue" value={this.state.secondNumberValue} onChange={this.handleInputChange} />
        </div>
        <br/>
        <br/>
        <div>
          Result: <strong>{this.state.result}</strong>
        </div>
        <input type="submit" value="Submit" className="button" onClick={this.handleSubmitButton} />
      </form>
    </div>;
  }
}
export default InputsData;