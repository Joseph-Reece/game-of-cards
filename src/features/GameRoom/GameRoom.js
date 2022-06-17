import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Text,
  Heading,
  Grid,
  GridItem
} from '@chakra-ui/react'



import {
  getDeckAsync,
  reshuffleDeckRemaining,
  startGame,
  StopGame,
  getDeck,
  reshuffleDeck,
  setIsGameActive,
  setIsError,
  setErrorMessage,
  setPlayerNames,
  setInput,
  setIsLoading,
  setIsReshuffling,
  setIsReshufflingError,
  setReshuffleErrorMessage,
  setReshuffleDeckId,
  setReshuffleDeck,
  setIsGameOver,
  setGameOverMessage,
  setIsGameWon,
  setGameWonMessage,
  setIsGameLost,
  setGameLostMessage,
  setIsGameDraw,
  setGameDrawMessage,
  selectDeckId,
  selectIsGameActive,
  selectIsError,
  selectErrorMessage,
  selectPlayerNames,
  selectInput,
  selectIsLoading,
  selectIsReshuffling,
  selectIsReshufflingError,
  selectReshuffleErrorMessage,
  selectReshuffleDeckId,
  selectReshuffleDeck,
  selectIsGameOver,
  selectGameOverMessage,
  selectIsGameWon,
  selectGameWonMessage,
  selectIsGameLost,
  selectGameLostMessage,
  selectIsGameDraw,
  selectGameDrawMessage,
  DrawACard,

} from './gameroomSlice';



const GameRoom = () => {
  const dispatch = useDispatch();
  const deckId = useSelector(selectDeckId);
  const isGameActive = useSelector(selectIsGameActive);
  const isError = useSelector(selectIsError);
  const errorMessage = useSelector(selectErrorMessage);
  const playerNames = useSelector(selectPlayerNames);
  const input = useSelector(selectInput);
  const isLoading = useSelector(selectIsLoading);
  const isReshuffling = useSelector(selectIsReshuffling);
  const isReshufflingError = useSelector(selectIsReshufflingError);
  const reshuffleErrorMessage = useSelector(selectReshuffleErrorMessage);
  const reshuffleDeckId = useSelector(selectReshuffleDeckId);
  const reshuffleDeck = useSelector(selectReshuffleDeck);
  const isGameOver = useSelector(selectIsGameOver);
  const gameOverMessage = useSelector(selectGameOverMessage);
  const isGameWon = useSelector(selectIsGameWon);
  const gameWonMessage = useSelector(selectGameWonMessage);
  const isGameLost = useSelector(selectIsGameLost);
  const gameLostMessage = useSelector(selectGameLostMessage);
  const isGameDraw = useSelector(selectIsGameDraw);
  const gameDrawMessage = useSelector(selectGameDrawMessage);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOverr, setIsGameOverr] = useState(false);
  const [isGameWonr, setIsGameWonr] = useState(false);
  const [isGameLostr, setIsGameLostr] = useState(false);
  const [isGameDrawr, setIsGameDrawr] = useState(false);

  useEffect(() => {
    if (isGameActive) {
      setIsGameStarted(true);
    }
  }, [isGameActive]);
  useEffect(() => {
    if (isGameOver) {
      setIsGameOverr(true);
    }
  }, [isGameOver]);
  useEffect(() => {
    if (isGameWon) {
      setIsGameWonr(true);
    }
  }, [isGameWon]);
  useEffect(() => {
    if (isGameLost) {
      setIsGameLostr(true);
    }
  }, [isGameLost]);
  useEffect(() => {
    if (isGameDraw) {
      setIsGameDrawr(true);
    }
  }, [isGameDraw]);
  useEffect(() => {
    if (isGameOverr || isGameWonr || isGameLostr || isGameDrawr) {
      setIsGameStarted(false);
    }
  }, [isGameOverr, isGameWonr, isGameLostr, isGameDrawr]);
  useEffect(() => {
    if (isGameOverr || isGameWonr || isGameLostr || isGameDrawr) {
      setIsGameOverr(false);
    }
  }, [isGameOverr, isGameWonr, isGameLostr, isGameDrawr]);
  useEffect(() => {
    if (isGameOverr || isGameWonr || isGameLostr || isGameDrawr) {
      setIsGameWonr(false);
    }
  }, [isGameOverr, isGameWonr, isGameLostr, isGameDrawr]);
  useEffect(() => {
    if (isGameOverr || isGameWonr || isGameLostr || isGameDrawr) {
      setIsGameLostr(false);
    }
  }, [isGameOverr, isGameWonr, isGameLostr, isGameDrawr]);
  useEffect(() => {
    if (isGameOverr || isGameWonr || isGameLostr || isGameDrawr) {
      setIsGameDrawr(false);
    }
  }, [isGameOverr, isGameWonr, isGameLostr, isGameDrawr]);

  const getDeckSet = () => {
    dispatch(getDeckAsync());
  }

  const reshuffleDeckSet = () => {
    dispatch(reshuffleDeckRemaining());
  }

  const setPlayerNamesSet = () => {
    dispatch(setPlayerNames(['Player 1', 'Player 2']));
    console.log(playerNames)
  }

  const startGameSet = () => {
    dispatch(startGame());
    console.log(playerNames)
  }

  const GetACard = () => {
    dispatch(DrawACard());
    console.log("here")
  }

  return (
    <Container maxW='container.sm'>
      <Heading>
        Game Room
      </Heading>
      <Box bg="blue.300" padding={3}>
        <ButtonGroup justifyContent='center' size='sm'>
          <Button
            onClick={getDeckSet}
            isDisabled={deckId || isLoading || isGameStarted || isGameOverr || isGameWonr || isGameLostr || isGameDrawr}
          >
            {!isLoading ?
              'Get Deck'
              :
              'Loading ...  '
            }
          </Button>

          <Button
            onClick={reshuffleDeckSet}
            isDisabled={deckId == null || isError || isReshuffling || isReshufflingError}
          >
            {!isReshuffling ?
              'Reshuffle Deck'
              :
              'Loading ...  '
            }
          </Button>

          <Button
            onClick={startGameSet}
            isDisabled={!deckId || isLoading || isGameStarted || isGameOverr || isGameWonr || isGameLostr || isGameDrawr}
          >
            {!isReshuffling ?
              'Start Game'
              :
              'Loading ...  '
            }
          </Button>

          <Button
            onClick={dispatch(StopGame())}
            isDisabled={!deckId || isLoading || !isGameStarted || isGameOverr || isGameWonr || isGameLostr || isGameDrawr}
          >
            {!isReshuffling ?
              'Stop Game'
              :
              'Loading ...  '
            }
          </Button>

          <Button
            onClick={setPlayerNamesSet}
            isDisabled={!deckId || isLoading || !isGameStarted || isGameOverr || isGameWonr || isGameLostr || isGameDrawr}
          >
            {!isReshuffling ?
              'Enter Players'
              :
              'Loading ...  '
            }
          </Button>
        </ButtonGroup>
      </Box>
      <div>
        <div>deckId: {deckId}</div>
        <div>isGameActive: {isGameActive}</div>
        <div>isError: {isError}</div>
        <div>errorMessage: {errorMessage}</div>
        <div>playerNames: {playerNames}</div>
      </div>
      <Button
      onClick={GetACard}
      >
        Draw Card
      </Button>
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        <GridItem w='100%' bg='blue.500' p="5px" >
          <Heading>{playerNames[0]}</Heading>
        </GridItem>
        <GridItem w='100%' bg='blue.500' p="5px" >
          <Heading>{playerNames[1]}</Heading>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default GameRoom;
