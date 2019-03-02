import React, { useState } from 'react';
import './App.css';

const AstroList = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpius',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces'
]

const ChartList = [
  'Sun',
  'Moon',
  'Rising',
  'Mercury',
  'Venus',
  'Mars',
]

const ChartExplainerMap = {
  'Sun': 'How you present to the world. What is your general vibe.',
  'Moon': 'How you drunk talk. What are you like alone.',
  'Rising': 'How you small talk. What you like on social media.',
  'Mercury': 'How you communicate. What are you like at work.',
  'Venus': 'How you express love. What are you like in relationships.',
  'Mars': 'How you resolve conflict. What are you like in a fight.',
}

const AstroSymbolsMap = {
  'Aries': '♈',
  'Taurus': '♉',
  'Gemini': '♊',
  'Cancer': '♋',
  'Leo': '♌',
  'Virgo': '♍',
  'Libra': '♎',
  'Scorpius': '♏',
  'Sagittarius': '♐',
  'Capricorn': '♑',
  'Aquarius': '♒',
  'Pisces': '♓',
}


const AstroDatesMap = {
  'Aries': 'March 21 - April 20',
  'Taurus': 'April 21 - May 21',
  'Gemini': 'May 22 - June 21',
  'Cancer': 'June 22 - July 22',
  'Leo': 'July 23 - August 22',
  'Virgo': 'August 23 - September 23',
  'Libra': 'September 24 - October 23',
  'Scorpius': 'October 24 - November 22',
  'Sagittarius': 'November 23 - December 21',
  'Capricorn': 'December 22 - January 20',
  'Aquarius': 'January 21 - February 19',
  'Pisces': 'February 20 - March 20  ',
}


function GetRandomAstro() {
  return AstroList[Math.floor((Math.random() * AstroList.length))];
}

function Title(props) {
  return (
    <h1>
      <a onClick={props.onClick}>
        Click to randomize your chart
      </a>
    </h1>
  );
}


function Explainer(props) {
  const explanation = [];
  ChartList.forEach((chart) => {
    explanation.push(
      <div key={chart}>
        <b>{`${chart} Sign: ${props.yourChart[chart].symbol} `}</b>
        <span>{props.yourChart[chart].name}</span>
        {chart === 'Sun' && <div>{props.yourChart[chart].date}</div>}
        <div>{ChartExplainerMap[chart]}</div>
      </div>
    );
  })
  return (
    <div>
      {explanation}
    </div>
  );
}

const getRandomChart = () => {
  const chart = {}
  ChartList.forEach((sign) => {
    const signName = GetRandomAstro();
    chart[sign] = {
      symbol: AstroSymbolsMap[signName],
      name: signName,
      date: AstroDatesMap[signName],
    }
  })
  return chart;
}

function App() {
  const [yourChart, setChart] = useState({});

  const rollChart = () => {
    setChart(getRandomChart());
  }

  if (!yourChart.Sun){
    rollChart();
  }

  return (
    <div className="App">
      <body>
       <Title onClick={rollChart}/>
       <Explainer yourChart={yourChart}/>
      </body>
    </div>
  );
}

export default App;
