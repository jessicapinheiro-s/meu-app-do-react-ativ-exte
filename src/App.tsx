import React from 'react';
import logo from './imgs/logo.svg';
import MenuHeader from './components/header/header';
import './styles/style.css';

function App() {
  return (
    <div className="App">
    <header className='header'>
      <img src={logo} alt="" id='logo-header'/>
        <p>osdsdmsa</p>
        <MenuHeader/>
    </header>
      
    </div>
  );
}

export default App;
