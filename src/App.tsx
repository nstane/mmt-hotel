import React from 'react';
import { SortBar } from './components/sort-bar';
import HotelList  from './components/hotel-list';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <SortBar/>
      <HotelList/>
    </div>
  );
}

export default App;
