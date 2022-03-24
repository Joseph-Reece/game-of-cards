import { Box, Button, Container } from '@chakra-ui/react';
import React, { useState } from 'react'
import { getDeck } from '../api/Api';

const Gameroom = () => {
    const [deckId, setDeckId] = useState(0);

    const activateRoom = async() => {
        await getDeck().then(res =>{
            setDeckId(res.deck_id)
        }).catch(err => console.log(err))
    }
    
    return (
        <Container>
            <Box marginTop={3}>
                <Button
                    onClick={activateRoom}
                    aria-label={'Open Menu'}>
                    Get Deck
                </Button>
                <p>Game room  = deckId {deckId}</p>
            </Box>
        </Container>
    )
}

export default Gameroom