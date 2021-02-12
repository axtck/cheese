import React from 'react';
import Header from './components/header/Header';
import MainContent from './containers/content/MainContent';

function App() {
  const title: string = "Cheese";

  return (
    <>
      <Header title={title} />
      <MainContent />
    </>
  );
}

export default App;
