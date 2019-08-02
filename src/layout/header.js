import React from 'react';

const Header =() => {
  return(
    <div className='header'>
      Header
      <div>
        <div className='menu-top'>
          <div className='menu-top__item'><a href='#index'>Главная</a></div>
          <div className='menu-top__item'><a href='#register'>Регистрация</a></div>
          <div className='menu-top__item'><a href='#login'>Авторизация</a></div>
        </div>
      </div>
    </div>
  );
};

export default Header;