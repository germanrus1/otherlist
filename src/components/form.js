import React from 'react';
import { Label, Row, FormGroup } from 'reactstrap';

class Form extends React.Component {

  render(){
    return(
      <div className='form list_content'>
        <form onSubmit={this.props.weatherMethod}>
          <Label>Введите название города</Label>
          <Row>
            <FormGroup>
              <input type='text' name='city' placeholder='Введите город'/>
              <button className='btn btn-primary'> ОК </button>
            </FormGroup>
          </Row>
        </form>
      </div>
    );
  }
}

export default Form;
