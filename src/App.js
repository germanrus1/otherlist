import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import List from './components/list';
import Form from './components/form';
import Weather from './components/weather';
import './App.css';

const API_KEY = '650e7dc6baa9352d6ba5093237899c88';

class App extends React.Component {
  state = {
    country: undefined,     // регион
    cityName: undefined,    // название города
    population: undefined,  // Численность города
    list: undefined         // список погоды
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city) {
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
      const data = await api_url.json();

      if (data.cod == "200") {
        this.setState({
          cityName: data.city.name,
          country: data.city.country,
          population: data.city.population,
          list: data.list,
        });
      }
    }
  };

  render() {
    return (
      <div>
        <div className="header">
          <div style={{margin: 'auto', width: '100px'}}>
            Header
          </div>
        </div>
        <hr/>
        <Container>
          <Form weatherMethod={this.gettingWeather}/>
          <List state={this.state}/>
        </Container>
      </div>
    );
  }

}

export default App;
