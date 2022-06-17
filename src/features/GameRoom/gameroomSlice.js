import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getDeck, reshuffleDeck, reshuffleRemainingDeck, drawCard, returnAllCards, addCardsToPile } from '../../api/Api';

const initialState = {
    deckId: '',
    isGameActive: false,
    isError: false,
    errorMessage: '',
    playerNames: ['Player 1', 'Player 2'], //default two to play
    input: '',
    isLoading: false,
    isReshuffling: false,
    isReshufflingError: false,
    reshuffleErrorMessage: '',
    reshuffleDeckId: '',
    reshuffleDeck: [],
    isGameOver: false,
    gameOverMessage: '',
    isGameWon: false,
    gameWonMessage: '',
    isGameLost: false,
    gameLostMessage: '',
    isGameDraw: false,
    gameDrawMessage: '',
    isGameDrawError: false,
    gameDrawErrorMessage: '',
    isGameDrawCancelled: false,
    gameDrawCancelledMessage: '',
    isGameDrawCancelledError: false,
    gameDrawCancelledErrorMessage: '',
    isGameDrawCancelledSuccess: false,
    gameDrawCancelledSuccessMessage: '',
    isGameDrawCancelledSuccessError: false,
    gameDrawCancelledSuccessErrorMessage: '',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getDeckAsync = createAsyncThunk(
    'gameroom/getDeckAsync',
    async () => {
        const { data } = await getDeck();
        console.log(data)
        return data;
    });


export const gameroomSlice = createSlice({
    name: 'gameroom',
    initialState,
    reducers: {
        setDeckId: (state, action) => {
            state.deckId = action.payload;
            console.log(state.deckId)
        },
        setIsGameActive: (state, action) => {
            state.isGameActive = action.payload;
        },
        setIsError: (state, action) => {
            state.isError = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
        setPlayerNames: (state, action) => {
            state.playerNames = action.payload;
        },
        setInput: (state, action) => {
            state.input = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setIsReshuffling: (state, action) => {
            state.isReshuffling = action.payload;
        },
        setIsReshufflingError: (state, action) => {
            state.isReshufflingError = action.payload;
        },
        setReshuffleErrorMessage: (state, action) => {
            state.reshuffleErrorMessage = action.payload;
        },
        setReshuffleDeckId: (state, action) => {
            state.reshuffleDeckId = action.payload;
        },
        setReshuffleDeck: (state, action) => {
            state.reshuffleDeck = action.payload;
        },
        setIsGameOver: (state, action) => {
            state.isGameOver = action.payload;
        },
        setGameOverMessage: (state, action) => {
            state.gameOverMessage = action.payload;
        },
        setIsGameWon: (state, action) => {
            state.isGameWon = action.payload;
        },
        setGameWonMessage: (state, action) => {
            state.gameWonMessage = action.payload;
        },
        setIsGameLost: (state, action) => {
            state.isGameLost = action.payload;
        },
        setGameLostMessage: (state, action) => {
            state.gameLostMessage = action.payload;
        },
        setIsGameDraw: (state, action) => {
            state.isGameDraw = action.payload;
        },
        setGameDrawMessage: (state, action) => {
            state.gameDrawMessage = action.payload;
        },
        setIsGameDrawError: (state, action) => {
            state.isGameDrawError = action.payload;
        },
        setGameDrawErrorMessage: (state, action) => {
            state.gameDrawErrorMessage = action.payload;
        },
        setIsGameDrawCancelled: (state, action) => {
            state.isGameDrawCancelled = action.payload;
        },
        setGameDrawCancelledMessage: (state, action) => {
            state.gameDrawCancelledMessage = action.payload;
        },
        setIsGameDrawCancelledError: (state, action) => {
            state.isGameDrawCancelledError = action.payload;
        },
        setGameDrawCancelledErrorMessage: (state, action) => {
            state.gameDrawCancelledErrorMessage = action.payload;
        },
        setIsGameDrawCancelledSuccess: (state, action) => {
            state.isGameDrawCancelledSuccess = action.payload;
        },
        setGameDrawCancelledSuccessMessage: (state, action) => {
            state.gameDrawCancelledSuccessMessage = action.payload;
        },
        setIsGameDrawCancelledSuccessError: (state, action) => {
            state.isGameDrawCancelledSuccessError = action.payload;
        },
        setGameDrawCancelledSuccessErrorMessage: (state, action) => {
            state.gameDrawCancelledSuccessErrorMessage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDeckAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getDeckAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.deckId = action.payload.deck_id;
            })
            .addCase(getDeckAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload.message;
            });

    }
});

export const {
    setDeckId,
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
    setIsGameDrawError,
    setGameDrawErrorMessage,
    setIsGameDrawCancelled,
    setGameDrawCancelledMessage,
    setIsGameDrawCancelledError,
    setGameDrawCancelledErrorMessage,
    setIsGameDrawCancelledSuccess,
    setGameDrawCancelledSuccessMessage,
    setIsGameDrawCancelledSuccessError,
    setGameDrawCancelledSuccessErrorMessage
} = gameroomSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDeckId = (state) => state.gameroom.deckId;
export const selectIsGameActive = (state) => state.gameroom.isGameActive;
export const selectIsError = (state) => state.gameroom.isError;
export const selectErrorMessage = (state) => state.gameroom.errorMessage;
export const selectPlayerNames = (state) => state.gameroom.playerNames;
export const selectInput = (state) => state.gameroom.input;
export const selectIsLoading = (state) => state.gameroom.isLoading;
export const selectIsReshuffling = (state) => state.gameroom.isReshuffling;
export const selectIsReshufflingError = (state) => state.gameroom.isReshufflingError;
export const selectReshuffleErrorMessage = (state) => state.gameroom.reshuffleErrorMessage;
export const selectReshuffleDeckId = (state) => state.gameroom.reshuffleDeckId;
export const selectReshuffleDeck = (state) => state.gameroom.reshuffleDeck;
export const selectIsGameOver = (state) => state.gameroom.isGameOver;
export const selectGameOverMessage = (state) => state.gameroom.gameOverMessage;
export const selectIsGameWon = (state) => state.gameroom.isGameWon;
export const selectGameWonMessage = (state) => state.gameroom.gameWonMessage;
export const selectIsGameLost = (state) => state.gameroom.isGameLost;
export const selectGameLostMessage = (state) => state.gameroom.gameLostMessage;
export const selectIsGameDraw = (state) => state.gameroom.isGameDraw;
export const selectGameDrawMessage = (state) => state.gameroom.gameDrawMessage;
export const selectIsGameDrawError = (state) => state.gameroom.isGameDrawError;
export const selectGameDrawErrorMessage = (state) => state.gameroom.gameDrawErrorMessage;
export const selectIsGameDrawCancelled = (state) => state.gameroom.isGameDrawCancelled;
export const selectGameDrawCancelledMessage = (state) => state.gameroom.gameDrawCancelledMessage;
export const selectIsGameDrawCancelledError = (state) => state.gameroom.isGameDrawCancelledError;
export const selectGameDrawCancelledErrorMessage = (state) => state.gameroom.gameDrawCancelledErrorMessage;
export const selectIsGameDrawCancelledSuccess = (state) => state.gameroom.isGameDrawCancelledSuccess;
export const selectGameDrawCancelledSuccessMessage = (state) => state.gameroom.gameDrawCancelledSuccessMessage;
export const selectIsGameDrawCancelledSuccessError = (state) => state.gameroom.isGameDrawCancelledSuccessError;
export const selectGameDrawCancelledSuccessErrorMessage = (state) => state.gameroom.gameDrawCancelledSuccessErrorMessage;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const startGame = () => (dispatch, getState) => {
    if (getState().gameroom.isGameActive) {
        return;
    }
    dispatch(setIsGameActive(true));
    console.log(getState().gameroom.isGameActive)

    const deckId = getState().gameroom.deckId;

    reshuffleDeck(deckId)
}

export const StopGame = () => (dispatch, getState) => {
    if (!getState().gameroom.isGameActive) {
        return;
    }
    dispatch(setIsGameActive(false));
}

export const DrawACard = () => (dispatch, getState) => {

    const deckId = getState().gameroom.deckId;

    const getCard = async () => {
        await drawCard(deckId).then(res => {
            // dispatch(setInput(response.card));
            // dispatch(setPlayerNames(name));
            console.log(res.data);
            
        });
    }

    getCard();   

}

export const reshuffleDeckRemaining = () => (dispatch, getState) => {
    if (getState().gameroom.isReshuffling) {
        return;
    }
    dispatch(setIsReshuffling(true));
    dispatch(setIsReshufflingError(false));
    dispatch(setReshuffleErrorMessage(''));
    dispatch(setReshuffleDeckId(''));
    dispatch(setReshuffleDeck(''));

    async function fetchData() {

        await reshuffleRemainingDeck(getState().gameroom.deckId).then(response => {
            if (response.status === 200) {
                dispatch(setIsReshuffling(false));
                dispatch(setReshuffleDeckId(response.data.deck_id));
                dispatch(setReshuffleDeck(response.data.deck));
                console.log("SD")
            } else {
                dispatch(setIsReshuffling(false));
                dispatch(setIsReshufflingError(true));
                dispatch(setReshuffleErrorMessage(response.data.message));
            }
        }).catch(error => {
            dispatch(setIsReshuffling(false));
            dispatch(setIsReshufflingError(true));
            dispatch(setReshuffleErrorMessage(error.message));
        });
    }

    fetchData();
}



export default gameroomSlice.reducer;

