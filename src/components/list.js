import React from "react";
import {Row} from "reactstrap";
import ItemList from './itemList'
import ChartWeather from './chart-weather'

class List extends React.Component {
  dataChart = [['Температура', 'Дата']];
  dataTicks = [];
  dataMinTemp = 0;
  dataMaxTemp = 1;
  dataCount = 1;

  getDataChart(data){
    let count = 0;
    data.map(item => {
      count++;
      let date = new Date(item.dt * 1000);
      this.dataTicks.push(date.getUTCDate() + ' ' + String(date.getUTCHours()) + ':00');
      this.dataChart.push([count, item.main.temp]);
      if (item.main.temp < this.dataMinTemp) {
        this.dataMinTemp = item.main.temp;
      }
      if (item.main.temp > this.dataMaxTemp) {
        this.dataMaxTemp = item.main.temp;
      }
      return true;
    });
    this.dataCount = count;
    return true;
  }

  render() {
    return (
      <div className='list_content'>
        <div className='list_header'>
          <span>
            {this.props.state.cityName &&
            <div>
              <div><h5>Ваш город: <b>{this.props.state.cityName}</b></h5></div>
              <div>Регион: <b>{this.props.state.country}</b></div>
              <div>Численность: <b>{this.props.state.population}</b></div>
            </div>
            }
            {this.props.state.cityName == false &&
            <div>Введите название города</div>
            }
          </span>
          {this.props.state.list && this.getDataChart(this.props.state.list) &&
          <div className='list__chart' style={{height: '400px', width: '100%'}}>
            <ChartWeather
              dataChart={this.dataChart}
              dataTicks={this.dataTicks}
              dataMinTemp={this.dataMinTemp}
              dataMaxTemp={this.dataMaxTemp}
              dataCount={this.dataCount}
            />
          </div>
          }
          </div>
          {this.props.state.list &&
          this.props.state.list.map(item =>
            <ItemList item={item}/>
          )
        }
      </div>
    );
  }
}

export default List;
