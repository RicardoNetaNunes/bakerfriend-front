
import React from "react";

/*
import React, { useState } from "react";


function TemperatureConversor() {




  
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const convertCelsius = (e) => {
    e.preventDefault();
    
    let output = (parseFloat(celsius) * 9) / 5 + 32;
    setFahrenheit(parseFloat(output.toFixed(2)));
  };
console.log(celsius)
  const convertFahrenheit = (e) => {
    e.preventDefault();
    let output = ((parseFloat(fahrenheit) - 32) * 5) / 9;
    setCelsius(parseFloat(output.toFixed(2)));
  };


  return (
    <div className="TempConv">




      
      <form onChange={convertCelsius}>
        <div>
          <label>temperature in celsius</label>
          <input value={celsius} onChange={(e) => setCelsius(e.target.value)} />
        </div>
      </form>
      <p>{fahrenheit}ºf {celsius}ºC</p>
      <form onChange={convertFahrenheit}>
        <div>
          <label>temperature in Fahrenheit</label>
          <input value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} />
        </div>
      </form>
      
    </div>
  );
}

export default TemperatureConversor
*/

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

/*
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
*/

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <div>
        <h6>Enter temperature in {scaleNames[scale]}:</h6>
        <input value={temperature}onChange={this.handleChange} />
      </div>
    );
  }
}

class TemperatureConversor extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
          {/*
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
          */}
      </div>
    );
  }
}

export default TemperatureConversor 