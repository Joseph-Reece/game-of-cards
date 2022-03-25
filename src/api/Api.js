import axios from 'axios'
// congif axios
axios.defaults.baseURL = 'https://deckofcardsapi.com/api/deck/'
// headers: {"Access-Control-Allow-Origin": "*"}

// Hot Tip: Add jokers_enabled=true as a GET or POST parameter to your request to include two Jokers in the deck.
// https://deckofcardsapi.com/api/deck/new/shuffle/?jokers_enabled=true
export const getDeck = () => axios.get(`new/shuffle/?deck_count=1`)

// Reshuffle the cards in a deck.
// https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/
export const reshuffleDeck = (deckId) => axios.get(`${deckId}/shuffle/`)

// Reshuffle only remaining cards in the deck (i.e., cards not yet dealt).
// https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/?remaining=true
export const reshuffleRemainingDeck = (deckId) => axios.get(`${deckId}/shuffle/?remaining=true`)

export const drawCard = (deckId) => axios.get(`${deckId}/draw/?count=1`)

export const addToPile = (pile, card) => {
    const newPile = [...pile, card]
    return newPile
}

export const returnToDeck = (deckId, card) => axios.post(`${deckId}/shuffle/`, { cards: [card] })

export const getPile = (pile) => pile

export const returnToDeckPile = (deckId, pile) => axios.post(`${deckId}/shuffle/`, { cards: pile })

export const drawFromPile = (pile) => {
    const newPile = pile.slice(1)
    return newPile
}

export const drawSpecificCard = (pile, card) => {
    const newPile = pile.filter(c => c.code !== card.code)
    return newPile
}

export const reshufflePile = (deckId, pile) => axios.post(`${deckId}/shuffle/`, { cards: pile })

export const getCardImage = (card) => card.cards[0].image
export const getCardValue = (card) => card.cards[0].value
export const getCardSuit = (card) => card.cards[0].suit
export const getCardCode = (card) => card.cards[0].code
export const getCardImageUrl = (card) => `https://deckofcardsapi.com/static/img/${card.cards[0].code}.png`
export const getCardImageUrlBack = (card) => `https://deckofcardsapi.com/static/img/BACK.png`