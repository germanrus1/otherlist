import React from 'react';

class Login extends React.Component{

  render(){
    return(
      <div className='login'>
        <input name='login' placeholder='Логин' className='login__input'/>
        <input name='password' type='password' placeholder='Пароль' className='login__input'/>
        <button className='btn btn-primary btn-sm login__button'>Вход</button>
      </div>
    );
  }
}

export default Login;