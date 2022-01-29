import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    HStack,
} from '@chakra-ui/react';
import { Link as ReactLink }  from 'react-router-dom';
import { RiMoonFill, RiSunLine, RiMenu2Fill, RiCloseFill } from 'react-icons/ri';

// links with references to pages
const Links = [
    { id:1, name: 'Home', target: '/' }, 
    { id:2, name: 'About', target: 'about' }, 
    { id:3, name: 'Projects', target: '#Projects' }, 
    { id:4, name: 'Team', target: '#Team' }, 
];

const NavsLink = ({ link }) => (    
    <Link as ={ReactLink}
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}        
        _focus={{ color: 'brown.700' }}
        to={link.target}>
        {link.name}
    </Link>
);

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

                    <Button
                        onClick={isOpen ? onClose : onOpen}
                        display={{ md: 'none' }}
                        aria-label={'Open Menu'}>
                        {isOpen ? <RiCloseFill /> : <RiMenu2Fill />}
                    </Button>

                    <HStack spacing={8} alignItems={'center'}>
                        <Box>Logo</Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                                {Links.map(link => (
                                    // 
                                    <NavsLink key={link.id} link={link} />
                                ))}                                
                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavsLink key={link}>{link}</NavsLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}