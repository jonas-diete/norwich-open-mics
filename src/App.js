import React, { useState } from 'react';
import Overview from './Overview';
import Header from './Header';
import AddEntry from './AddEntry';
import './App.css';

const App = () => {
  const [openMics, setOpenMics] = useState([
    { 
      day: 'Monday', 
      place: 'The Rose Tavern', 
      time: '8pm-11pm', 
      link: 'https://www.facebook.com/therosetavern' 
    }, 
    { 
      day: 'Tuesday', 
      place: 'The Pear Tree Inn', 
      time: '8pm-11pm', 
      link: 'https://www.facebook.com/peartreeinnnorwich' 
    }, 
    { 
      day: 'Tuesday', 
      place: 'The Brickmakers', 
      time: '?', 
      link: 'https://www.thebrickmakers.com/eventsguide' 
    }, 
    { 
      day: 'Wednesday (every 3rd of the Month)', 
      place: 'The Cellar House', 
      time: '?', 
      link: 'https://www.facebook.com/TheCellarHouse' 
    }, 
    { 
      day: 'Thursday', 
      place: 'The Walnut Tree Shades', 
      time: '8pm-11pm', 
      link: 'https://www.facebook.com/walnut.treeshades.7' 
    }, 
    { 
      day: 'Thursday', 
      place: 'The Reindeer', 
      time: '7pm-11pm', 
      link: 'https://www.facebook.com/TheReindeerNorwich' 
    }, 
  ])
  return (
    <>
      <Header />
      <Overview openMics = {openMics}/>
      <AddEntry />
    </>
  );
}

export default App;