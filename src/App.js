import React, { useState } from 'react';
import './App.css';
import allCountryScores from './scores';

let worldwideScores = [];
for(let i = 0; i < allCountryScores.length; ++i) {
  for(let j = 0; j < allCountryScores[i].scores.length; ++j) {
    worldwideScores.push(allCountryScores[i].scores[j]);
  }
}

function sortScores(asc) {
  allCountryScores.sort((a, b) => a.name > b.name);
  allCountryScores.map(country => country.scores.sort((a, b) => (asc ? a.s - b.s : b.s - a.s)));
  worldwideScores.sort((a, b) => (asc ? a.s - b.s : b.s - a.s));
}

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
  let [sortOrder, setSortOrder] = useState(false);
  function changeOrder() {
    setSortOrder(!sortOrder);
    sortScores(sortOrder);
  }

  sortScores(sortOrder);

  return (
    <div id="page">
      <h1>High Scores per Country</h1>
      <button onClick={changeOrder}>Change Score Order</button>
      <div id="contents">
        <CountryScores country={{name: "Worldwide", scores:worldwideScores}}/>
        {allCountryScores.map(country => (<CountryScores country={country}/>))}
      </div>
    </div>
  );
}

export default App;