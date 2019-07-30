import React from 'react'
import {Collapse} from 'reactstrap'

const date = new Date();
const weekName = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.item = this.props.item;
    this.date = new Date(this.item.dt * 1000);
    this.getRgbColorByTemp(this.item.main.temp);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  getRgbColorByTemp(temp) {
    let rgb = [223, 223, 223];

    if (temp >= 25) {
      rgb =[223, 76 + Math.round(147 * (temp - 25) / 25) , 76]
    }
    if (temp < 25 && temp >= 0) {
      rgb =[76 + Math.round(147 * temp / 25) ,223, 76]
    }
    if (temp < 0 && temp >= -25) {
      rgb =[76, 223, 76 + Math.round(147 * (temp + 25) / 25)]
    }
    if (temp < -25) {
      rgb =[76, 76 + Math.round(147 * (temp + 50) / 25) ,223]
    }

    this.rgb = rgb;
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render(){
    return (
      <div className='list_item'>
        {/*<button onClick={this.toggle}>Давай уже</button>*/}
        <div className='item__header d-flex flex-row' onClick={this.toggle} style={{backgroundColor: `rgb(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]})`}}>
          <div className='p-1 item__date'>
            <span className='text__date text-light'>{this.date.getUTCDate()}</span>
          </div>
          <div className='p-1 item__day text-secondary'>
            {weekName[this.date.getDay()]} <b>{this.date.getUTCHours()}:00</b>
          </div>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <div className='item__content'>
            <div className='row'>
              <div className='col-6'>Температура (C°):</div>
              <div className='col-6'>{this.item.main.temp}</div>
            </div>
            <div className='row'>
              <div className='col-6'>Атмосферное давление (гПа):</div>
              <div className='col-6'>{this.item.main.pressure}</div>
            </div>
            <div className='row'>
              <div className='col-6'>Влажность (%):</div>
              <div className='col-6'>{this.item.main.humidity}</div>
            </div>
            <div className='row'>
              <div className='col-6'>Осадки:</div>
              <div className='col-6'>{this.item.weather.main}</div>
            </div>
            <div className='row'>
              <div className='col-6'>Облачность (%):</div>
              <div className='col-6'>{this.item.clouds.all}</div>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
};

export default ItemList;