import React, { useEffect, useState } from 'react'
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
import axios from 'axios';

const Gameroom = () => {
    const [deckId, setDeckId] = useState('3fg706ilqfvk');
    const [isGameActive, setIsGameActive] = useState(false);

    const [input, setInput] = useState('')
    const [playerNames, setPlayerNames] = useState(['Player 1', 'Player 2'])

    const handleInputChange = (e) => setInput(e.target.value)


    const isError = input === '' || playerNames.length < 2 || !isGameActive;

    // AbortController represents a controller object that allows you to abort one or more Web requests as and when desired. 
    // It is a global object that is available in the browser and Node.js.
    // It is used to abort fetch requests.
    // The other option is using axios cancelToken() method.
    useEffect(() => {

        // let abortController;
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        (async () => {

            // abortController = new AbortController();
            // let signal = abortController.signal;

            const { data } = await getDeck(
                // { signal: signal } to use with abortcontroller                
                {cancelToken: source.token}
            ).catch(err => {
                if (axios.isCancel(err)) {
                    console.log('successfully aborted');
                  } else {
                    // handle error
                    console.log(err)
                  }
            })
            console.log(data)
            setDeckId(data.deck_id)
            setIsGameActive(true);
        })()

        return () =>  source.cancel();
    }, [])

    const activateRoom = async () => {

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