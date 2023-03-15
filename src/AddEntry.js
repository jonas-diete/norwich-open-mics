import React from 'react'

const AddEntry = () => {
  return (
    <>
      <div>Add a new entry:</div>
      <input type='text' placeholder='Weekday' />
      <input type='text' placeholder='Place' />
      <input type='text' placeholder='Time' />
      <input type='text' placeholder='Link' />
      <button>Add to overview</button>
    </>
  );
}

export default AddEntry;