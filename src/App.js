import React from 'react';
import './App.css';
import allCountryScores from './scores';

function CountryScores(props) {
  return (
  <div class="country">
    <h2>HIGH SCORES: {props.country.name}</h2>
    <div class="country-table">

      {props.country.scores.map(score => (
        <div class="individual-score">
          <p class="name-data">{score.n}</p>
          <p class="score-data">{score.s}</p>
        </div>
      ))}
      
    </div>
  </div>
  );
}

function App() {
  return (
    <div id="page">
      <h1>High Scores per Country</h1>
      <div id="contents">
        {allCountryScores.map(country => (<CountryScores country={country}/>))}
      </div>
    </div>
  );
}

export default App;

/*
TODO:

Level 2

    Present the High Score Tables sorted alphabetically by country name

Level 3

    Within each individual table, show the highest scores first - i.e. sort the scores numerically, descending.

Level 4 - advanced (needs content from React week 2)

    Add a single button at the top of the page which toggles the sort order of every high-score-table between ascending and descending by scores. This will require some study about event handlers and the use of a "State hook".

Level 5 - advanced

    Add a "world-wide" table, shown first, which shows the sorted high scores from EVERYONE, regardless of country.

Bonus

    Add your own country and scores!
    Add some old-skool videogame icons or animations

*/