import React from 'react';
import './App.css';
import MultiNumbers from './components/MultiNumbers';
import SingleNumber from './components/SingleNumber';

function App() {
  return (
    <main className="App">
      <header>
        <h2>The Prime Number Application</h2>
        <p>This is the awesome application for checking if a number or a sum of the numbers is a prime number.</p>
      </header>
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
