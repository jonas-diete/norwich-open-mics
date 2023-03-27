import React, { useState } from 'react';
import Overview from './Overview';
import Header from './Header';
import AddEntry from './AddEntry';
import './App.css';

const App = () => {
  const [openMics, setOpenMics] = useState({ day: 'Someday', place: 'The Alex', time: '7-11pm', link: 'somewhere.com' })
  return (
    <>
      <Header />
      <Overview openMics = {openMics}/>
      <AddEntry />
    </>
  );
}

export default App;