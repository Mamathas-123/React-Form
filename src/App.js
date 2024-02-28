import React from 'react';
import ComponentA from './components/componentA';

import './App.css';

function App() {
  const data="Form component";
  return (
    <div className="App">
     
      <ComponentA data={data}/>
    </div>
  );
}

export default App;
