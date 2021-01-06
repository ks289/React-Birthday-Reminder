import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  const numeric = { day: 'numeric', month: 'numeric' };
  const date = new Date();
  const regex = new RegExp(date.toLocaleDateString('en-GB', numeric), 'g');
  const filter = people.filter(({ dob }) => dob.match(regex));
  const len = filter.length;
  return (
    <main>
      <section className='container'>
        <h3>{len} birthdays today</h3>
        <List people={filter}/>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
    );
}

export default App;
