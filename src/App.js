import React from 'react';
import Overview from './Overview';
import Header from './Header';
import AddEntry from './AddEntry';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Overview />
      <AddEntry />
    </>
  );
}

export default App;