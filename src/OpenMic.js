import React from 'react'

const OpenMic = ({ data }) => {
  return (
    <tr>
      <td>{data.day}</td>
      <td>{data.place}</td>
      <td>{data.time}</td>
      <td>{data.link}</td>
    </tr>
  );
}

export default OpenMic;