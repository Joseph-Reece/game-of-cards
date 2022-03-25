import React, { useState } from 'react'
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Editable,
    EditableInput,
    EditablePreview,
    useEditableControls, ButtonGroup, IconButton, Flex, Grid, GridItem
} from '@chakra-ui/react';
import { EditIcon, CheckIcon, CloseIcon, } from '@chakra-ui/icons'
import { getDeck, reshuffleDeck } from '../api/Api';

const Gameroom = () => {
    const [deckId, setDeckId] = useState('3fg706ilqfvk');
    const [isGameActive, setIsGameActive] = useState(true);

    const [input, setInput] = useState('')
    const [playerNames, setPlayerNames] = useState(['Player 1', 'Player 2'])

    const handleInputChange = (e) => setInput(e.target.value)


    const isError = input === '' || playerNames.length < 2;

    const activateRoom = async () => {
        await getDeck().then(res => {
            setIsGameActive(true)
            setDeckId(res.data.deck_id)
        }).catch(err => console.log(err))
    }

    const reshuffle = () => {
        console.log("Reshuffling deck")
        reshuffleDeck(deckId).then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))
    }

    // Editable controls Component
    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <ButtonGroup justifyContent='center' size='sm'>
                <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
                <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='center'>
                <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
            </Flex>
        )
    }

    return (
        <Container maxW='container.xl'>
            <Container maxW='container.sm'>
                <FormControl isInvalid={isError}>
                    <FormLabel htmlFor='RoomName'>RoomName</FormLabel>
                    <Input
                        id='RoomName'
                        type='text'
                        value={input}
                        onChange={handleInputChange}
                    />
                    {!isError ? (
                        <FormHelperText>
                            Enter The Name of your room
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Game Room name is required.</FormErrorMessage>
                    )}

                    <ButtonGroup justifyContent='center' size='sm'>
                        <Button
                            onClick={activateRoom}
                            isDisabled={isError}
                        >
                            Create Room
                        </Button>
                    </ButtonGroup>

                    <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                        {playerNames.map((player, index) => {
                            return (
                                <GridItem key={index} >
                                    <Editable
                                        textAlign='center'
                                        defaultValue={player}
                                        fontSize='2xl'
                                        isPreviewFocusable={false}
                                    >
                                        <EditablePreview />
                                        {/* Here is the custom input */}
                                        <Input as={EditableInput} />
                                        <EditableControls />
                                    </Editable>
                                </GridItem>
                            )
                        })}
                    </Grid>


                </FormControl>
            </Container>

            <Box marginTop={3}>
                {isGameActive ? (
                    <Button
                        id='reshuffle'
                        onClick={reshuffle}
                        aria-label={'Open Menu'}>
                        Reshuffle Deck
                    </Button>
                ) : (
                    <Button
                        id='start'
                        onClick={activateRoom}
                        aria-label={'Open Menu'}>
                        Get Deck
                    </Button>
                )}
                <p>Game room  = deckId {deckId}</p>
            </Box>
        </Container>
    )
}

export default Gameroom