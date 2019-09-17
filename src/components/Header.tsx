import React from 'react';

class Header extends React.Component <{name: string, image: string}, {}> {
  
  render() {
    return (
      <div className='header'>
        <div className='header-logo'>
        <h1 className='header-item'>Recipe House</h1>
          <img className='header-item' src='logo.png'/>
        </div>
      </div>
    );
  }
}

export default Header;
