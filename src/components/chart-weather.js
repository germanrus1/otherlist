import React from 'react';
import Chart from 'react-google-charts';

class ChartWeather extends React.Component {
  options = {
    title: "Прогноз температуры на ближайшие 5 дней",
    hAxis: {
      title: "Дата",
      viewWindow: {
        min: 0,
        max: this.props.dataCount + 3,
      },
      ticks: this.props.dataTicks,
    },
    vAxis: {
      title: "Температура",
      viewWindow: {
        min: this.props.dataMinTemp - (this.props.dataMaxTemp - this.props.dataMinTemp) * 0.1,
        max: this.props.dataMaxTemp + (this.props.dataMaxTemp - this.props.dataMinTemp) * 0.1
      }
    },
    legend: "none"
  };
  data = this.props.dataChart;

  render(){
    console.log(this.props.dataChart);
    console.log(this.props.dataTicks);

    return(
        <Chart
          chartType="LineChart"
          data={this.data}
          options={this.options}
          legendToggle
        />
    );
  }
}

export default ChartWeather;