import React, { useState, useRef } from 'react';
import Overview from './Overview';
import Header from './Header';
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

  const openMicDayRef = useRef()
  const openMicPlaceRef = useRef()
  const openMicTimeRef = useRef()
  const openMicLinkRef = useRef()

  const handleAddOpenMic = (e) => {
    const newDay = openMicDayRef.current.value;
    const newPlace = openMicPlaceRef.current.value;
    const newTime = openMicTimeRef.current.value;
    const newLink = openMicLinkRef.current.value;
    if (newDay === '' || newPlace === '' || newTime === '' || newLink === '') return
    setOpenMics([{      
      day: newDay, 
      place: newPlace, 
      time: newTime, 
      link: newLink 
    }]);
    openMicDayRef.current.value = null;
    openMicPlaceRef.current.value = null;
    openMicTimeRef.current.value = null;
    openMicLinkRef.current.value = null;
  }

  return (
    <>
      <Header />
      <Overview openMics={openMics}/>
      <div>Add a new entry:</div>
      <input ref={openMicDayRef} type="text" placeholder="Weekday" />
      <input ref={openMicPlaceRef} type="text" placeholder="Place" />
      <input ref={openMicTimeRef} type="text" placeholder="Time" />
      <input ref={openMicLinkRef} type="text" placeholder="Link" />
      <button onClick={handleAddOpenMic}>Add to overview</button>
    </>
  );
}

export default App;