import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result'

const APIKey = "30ea146af1fd481aaa7a726166fc4a0b";

class App extends Component {

  state = {
    value: '',
    time: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    city: '',
    err: false
  }

  handleInputChange = e => (
    this.setState({
      value: e.target.value
    })
  )
  handleFormSubmit = e => {
    e.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
    fetch(API)
    .then(response => {
      if(response.ok){
        return response 
      }
      throw Error ("Nie powiodło się")
    })
    .then(response => response.json())
    .then(data => {
      const date = new Date().toLocaleString();
      this.setState(prevState => ({
        err:false,
        time: date,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: Math.round(data.main.temp),
        pressure: data.main.pressure,
        wind: data.wind.speed,
        city: prevState.value.toUpperCase(),
        value: ''
      }))
    })
    .catch(err => {
      this.setState(prevState => ({
        err: true,
        city: prevState.value,
        value: ""
      }))
    })
  }
  render() {
    return (
      <>
      <div className="app">
      <h1>Sprawdź pogodę na dziś!</h1>
      <Form value={this.state.value} change={this.handleInputChange} submit={this.handleFormSubmit}/>
      <Result results={this.state}/>
      </div>
      <span id='photo'>Photo by <a href="https://unsplash.com/@goldcircuits?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Stacey Gabrielle Koenitz Rozells</a> on <a href="https://unsplash.com/images/nature/cloud?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
      </>
    );
  }
}

export default App;
