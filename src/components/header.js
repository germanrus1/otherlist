import React from 'react';
import Login from './login';

class Header extends React.Component{

  render(){
    return(
      <div className='header align-content'>
        <Login/>
      </div>
    );
  }
}

export default Header;