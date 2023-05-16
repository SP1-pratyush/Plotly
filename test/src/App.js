// import logo from './logo.svg';
import './App.css';

import React from 'react';
import Plot from 'react-plotly.js';

var xArray = [], yArray = [];
var time = 0
var size = 1000000
for(var i=0;i<size;i++){
  xArray.push(time);
  yArray.push(Math.random());
  time += 1;
}

const data = [
  {
    x: xArray,
    y: yArray,
    type: 'scatter',
    mode: 'lines+markers',
    marker: { color: 'blue' },
    
  },
];

const layout = {
  title: 'My Graph',
  xaxis: { range:[100,time], title: 'time' },
  yaxis: { range:[-1,2], title: 'alpha1' },
  width: '100%',
  height: '100%',
};

function App() {
  return (
      // <h1>Plotly Graph</h1>
      <Plot data={data} layout={layout} />
    
  );
}

export default App;