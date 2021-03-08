import React, {useState, useEffect, useLayoutEffect} from 'react';
import './App.css';
import Tab from './Tab';
import TabFunction from './TabFunction';
import {getWaterSource} from './api/ApiHelper';
import ErrorBoundary from './ErrorBoundary';

function App() {

  let [value, setValue] = useState(0);
  const [wsCount, setWsCount] = useState(0);

  useLayoutEffect(  () => {
    console.log('APP: running use layout effect');
    getWaterSource().then(res=> {
      localStorage.setItem('ws', res.data);
    });
        
   },[]
  )
  // method 1 use then
  useEffect( () => {
    console.log('APP: running use effect 1');
    getWaterSource().then (d => {
      if (d) {
        const len = d.data.water_sources.length;
        console.log('method1', d.data.water_sources.length);
        setValue(len);
      }
    });
   },[]
  );

  //method 2 : use dynamic function
  useEffect( () => {
    console.log('APP: running use effect 2');

    (async()=> {
       const d =  await getWaterSource();
       if (d) {
        const len = d.data.water_sources.length;
        console.log('method2', d.data.water_sources.length);
        setWsCount(len);
      }
    })(); 
   },[]
  );

  return (
    <div className="App">
     <div>Method 1 {value}</div>
     <div>Method 2 {wsCount}</div>
     <button onClick={()=> setValue(value + 1)} > Add Value </button>
     <ErrorBoundary>
      <Tab />
      <TabFunction />
     </ErrorBoundary>
    </div>
  );
}

export default App;
