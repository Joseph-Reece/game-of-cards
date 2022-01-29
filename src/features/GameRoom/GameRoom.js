import React from 'react';
import Card from '../../components/Card'
import Deck from '../../components/Deck'

// Game room takes number of participants(piles) and deck id

const GameRoom = ({ players, deck }) => {


  return (
    <div>
        Game room
        <Card />
        <Deck />
    </div>
);
};

export default GameRoom;
