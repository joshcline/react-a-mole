import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MoleContainer from './Components/MoleContainer';
import Mole from './Components/Mole'
import EmptySlot from './Components/EmptySlot'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <MoleContainer />
    <Mole />
    <EmptySlot />
  </div>
);