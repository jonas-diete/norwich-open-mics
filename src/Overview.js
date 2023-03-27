import React from 'react';
import OpenMic from './OpenMic';

const Overview = ({ openMics }) => {
  return (
    <table>
      <tbody>        
        <tr>
          <th>Day</th>
          <th>Place</th>
          <th>Time</th>
          <th>Link</th>
        </tr>
        {
          openMics.map(openMic => {
            return <OpenMic data={ openMic } />
          })
        }
      </tbody>
    </table>
  );
}

export default Overview;