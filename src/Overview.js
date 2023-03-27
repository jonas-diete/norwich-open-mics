import React from 'react';

const Overview = ({ openMics }) => {
  return (
    <table>
      <tr>
        <th>Day</th>
        <th>Place</th>
        <th>Time</th>
        <th>Link</th>
      </tr>
      <tr>
        <td>Monday</td>
        <td>The Rose Tavern</td>
        <td>8pm-11pm</td>
        <td>https://www.facebook.com/therosetavern</td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td>The Pear Tree Inn</td>
        <td>8pm-11pm</td>
        <td>https://www.facebook.com/peartreeinnnorwich</td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td>The Brickmakers</td>
        <td>?</td>
        <td>https://www.thebrickmakers.com/eventsguide </td>
      </tr>
      <tr>
        <td>Wednesday (3rd of every Month)</td>
        <td>The Cellar House</td>
        <td>?</td>
        <td>https://www.facebook.com/TheCellarHouse</td>
      </tr>
      <tr>
        <td>Thursday</td>
        <td>The Walnut Tree Shades</td>
        <td>8pm-11pm</td>
        <td>https://www.facebook.com/walnut.treeshades.7</td>
      </tr>
      <tr>
        <td>Thursday</td>
        <td>The Reindeer</td>
        <td>7pm-11pm</td>
        <td>https://www.facebook.com/TheReindeerNorwich</td>
      </tr>
      <tr>
        <td>{openMics[0].day}</td>
        <td>{openMics[0].place}</td>
        <td>{openMics[0].time}</td>
        <td>{openMics[0].link}</td>
      </tr>
    </table>
  );
}

export default Overview;