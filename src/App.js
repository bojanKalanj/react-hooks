import React, { useState } from 'react';
import Toggle from './Toggle';

const App = () => {
  const [ name, setName ] = useState(' ');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      {name}
      <form onSubmit={e => onFormSubmit(e, name, setName)}>
        <input type='text' onChange={(e) => setName(e.target.value)} value={name} />
      </form>
    </div>
  );
};

const onFormSubmit = (e, name, setName) => {
  e.preventDefault();
  console.log(`email sent to ${name}`);
  setName('');
}
export default App;
