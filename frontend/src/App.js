import React from 'react';
import './App.css';
import MultiNumbers from './components/MultiNumbers';
import SingleNumber from './components/SingleNumber';

function App() {
  return (
    <main className="App">
      <section className="multinumbers">
        <MultiNumbers />
      </section>
      <section className="singlenumber">
        <SingleNumber />
      </section>
    </main>
  );
}

export default App;
