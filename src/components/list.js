import React from "react";
import {Row} from "reactstrap";
import ItemList from './itemList'

class List extends React.Component {
  render() {
    return (
      <div className='list_content'>
        <Row className='list_header'>
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
        </Row>
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
