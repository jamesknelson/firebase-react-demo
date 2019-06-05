import React, { useState, useEffect } from 'react';
import { getServerTime } from './firebase';
import './App.css';

function App() {
  let [serverTime, setServerTime] = useState(undefined)

  useEffect(() => {
    getServerTime().then(({ data: serverTime }) => {
      setServerTime(serverTime)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {serverTime === undefined ? (
            'LOADING' 
          ) : (
            new Date(serverTime).toLocaleDateString()
          )}
        </p>
      </header>
    </div>
  );
}

export default App;
