import React from 'react';
import Header from './components/Header';

function App() {
  const title = "Cheese ��";
  return (
    <div>
      <Header title={title} />
      <p>App</p>
    </div>
  );
}

export default App;
