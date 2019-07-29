import React from 'react'
import { Row }from 'reactstrap'

const date = new Date();

const ItemList = (props) => {
  var item = props.item,
      date = new Date();
  date.setTime(item.dt);

  return(
    <Row className='list_item'>
      <div className='row'>
        <div className='col-6'>Дата: </div><div className='col-6'>{item.dt}</div>
      </div>
      <div className='row'>
        <div className='col-6'>Температура (Кельвин): </div><div className='col-6'>{item.dt}</div>
      </div>
      <div className='row'>
        <div className='col-6'>Атмосферное давление (гПа): </div><div className='col-6'>{item.main.pressure}</div>
      </div>
      <div className='row'>
        <div className='col-6'>Влажность (%): </div><div className='col-6'>{item.main.humidity}</div>
      </div>
      <div className='row'>
        <div className='col-6'>Осадки: </div><div className='col-6'>{item.weather.main}</div>
      </div>
      <div className='row'>
        <div className='col-6'>Облачность (%): </div><div className='col-6'>{item.clouds.all}</div>
      </div>
      <div className='row'>
        <div className='col-6'>Облачность (%): </div><div className='col-6'>{item.clouds.all}</div>
      </div>
    </Row>
  );
};

export default ItemList;