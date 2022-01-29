import React, { useState } from 'react';
import './App.css';
import * as Api from './api/Api';
import Landing from './pages/Landing';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';
import About from './pages/About';


function App() {
  const [deckId, setDeckId] = useState('');

  const getDeck = () => {
    Api.getDeck()
      .then(res => {
        setDeckId(res.data.deck_id);

        // disable button
        document.getElementById('get-deck').disabled = true;
        console.log(deckId)
      })
      .catch(err => {
        console.log(err);
      });
  };

  console.log(deckId);


  return (
    // <div className="App">
    //     <Landing />
    // </div>
    
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element ={<Landing />} />
          <Route path="/landing" element ={<Landing />} />
          <Route path="/about" element ={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
