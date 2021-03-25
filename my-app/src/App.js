import React from 'react';
import { Header } from './components/header/Header';
import { Nav } from "./components/nav/Nav";
import { Profile } from "./components/profile/Profile";
import './App.css';

const App = () => {
  return (
      <div className='app-wrapper'>
          <Header />
          <div className='main-content'>
              <Nav />
              <Profile />
          </div>
      </div>
  );
}

export default App;
