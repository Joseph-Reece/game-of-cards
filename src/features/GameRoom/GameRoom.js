import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Text,
  Heading
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
  }

  const startGameSet = () => {
    dispatch(startGame());
  }

  return (
    <>
      <Container>
        <Heading>
          Game Room
        </Heading>
        <Box  bg="blue.300" padding={3}>
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
              isDisabled={!deckId ||  isLoading || isGameStarted || isGameOverr || isGameWonr || isGameLostr || isGameDrawr}
            >
              {!isReshuffling ?               
                'Start Game'
              :
                'Loading ...  '
              }
            </Button>

            <Button
              onClick={dispatch(StopGame())}
              isDisabled={!deckId ||  isLoading || !isGameStarted || isGameOverr || isGameWonr || isGameLostr || isGameDrawr}
            >
              {!isReshuffling ?               
                'Stop Game'
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
          <div>input: {input}</div>
          <div>isLoading: {isLoading}</div>
          <div>isReshuffling: {isReshuffling}</div>
          <div>isReshufflingError: {isReshufflingError}</div>
          <div>reshuffleErrorMessage: {reshuffleErrorMessage}</div>
          <div>reshuffleDeckId: {reshuffleDeckId}</div>
          <div>reshuffleDeck: {reshuffleDeck}</div>
          <div>isGameOver: {isGameOver}</div>
          <div>gameOverMessage: {gameOverMessage}</div>
          <div>isGameWon: {isGameWon}</div>
          <div>gameWonMessage: {gameWonMessage}</div>
          <div>isGameLost: {isGameLost}</div>
          <div>gameLostMessage: {gameLostMessage}</div>
          <div>isGameDraw: {isGameDraw}</div>
          <div>gameDrawMessage: {gameDrawMessage}</div>
        </div>
      </Container>
      <div>
        <div>isGameStarted: {isGameStarted}</div>
        <div>isGameOverr: {isGameOverr}</div>
        <div>isGameWonr: {isGameWonr}</div>
        <div>isGameLostr: {isGameLostr}</div>
        <div>isGameDrawr: {isGameDrawr}</div>
      </div>
    </>
  );
};

export default GameRoom;
