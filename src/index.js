import React from 'react';
import ReactDOM from 'react-dom/client';

const title = <h1>Norwich Open Mic Nights</h1>
const openMicOverview = (
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
      <td>Wednesday - every 3rd Wednesday of the Month</td>
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
  </table>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(openMicOverview);