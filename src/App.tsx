import React, { useEffect } from 'react';
import './App.css';
import { search } from './utils/spotify';

function App() {
  useEffect(() => {
    search('beatles', 'artist').then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
