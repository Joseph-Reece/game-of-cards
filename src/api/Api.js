import axios from 'axios'
// congif axios
axios.defaults.baseURL = 'https://deckofcardsapi.com/api/deck/'
// headers: {"Access-Control-Allow-Origin": "*"}

export const getDeck = () => axios.get(`new/shuffle/?deck_count=1`)

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