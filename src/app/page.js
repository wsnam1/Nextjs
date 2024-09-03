"use client";

import { useState } from 'react';
import {
    ChakraProvider,
    Box,
    Flex,
    Heading,
    Text,
    Button,
    VStack,
    HStack,
    Image,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import DynamicBackground from './DynamicBackground';

export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <ChakraProvider>
            <DynamicBackground />
                <Box minHeight="100vh">
                    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="6" bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(10px)">
                        <Flex align="center" mr={5}>
                            <Heading as="h1" size="lg" letterSpacing={'tighter'} color="white">
                                ButterBoard
                            </Heading>
                        </Flex>

                        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                            <Button variant="ghost" color="white" _hover={{ bg: 'whiteAlpha.200' }}>Calendar</Button>
                            <Button variant="ghost" color="white" _hover={{ bg: 'whiteAlpha.200' }}>JamBoard</Button>
                            <Button variant="ghost" color="white" _hover={{ bg: 'whiteAlpha.200' }}>Meetings</Button>
                            <Button bg="white" color="black" _hover={{ bg: 'gray.200' }}>Sign up</Button>
                        </HStack>

                        <Box display={{ base: 'block', md: 'none' }}>
                            <Button onClick={onOpen} bg="transparent" _hover={{ bg: 'whiteAlpha.200' }}>
                                <HamburgerIcon color="white" />
                            </Button>
                        </Box>
                    </Flex>

                    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Menu</DrawerHeader>
                            <DrawerBody>
                                <VStack spacing={4}>
                                    <Button w="full" variant="ghost">Calendar</Button>
                                    <Button w="full" variant="ghost">JamBoard</Button>
                                    <Button w="full" variant="ghost">Meetings</Button>
                                    <Button w="full" colorScheme="blue">Sign up</Button>
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>

                    <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" flex={2} px={20} py={20}>
                        <VStack spacing={6} align={{ base: 'center', md: 'flex-start' }} maxW="xlg" mr={{ base: 0, md: 10 }} mb={{ base: 10, md: 0 }}>
                            <Heading as="h2" size="3xl" color="white" textAlign={{ base: 'center', md: 'left' }}>
                                All productivity tools
                            </Heading>
                            <Heading as="h3" size="2xl" color="white" textAlign={{ base: 'center', md: 'left' }}>
                                All in one place
                            </Heading>
                            <Text color="white" fontSize="xl" textAlign={{ base: 'center', md: 'left' }}>
                                Elevate your efficiency with our comprehensive productivity suite.
                            </Text>
                            <Button size="lg" bg="black" color="white" _hover={{ bg: 'gray.800' }}>
                                Start now
                            </Button>
                        </VStack>
                        <Box bg="white" borderRadius="lg" boxShadow="xl" p={6}>
                            <Image src="/calendar.png" alt="Calendar" maxW="400px" />
                        </Box>
                    </Flex>
                </Box>

        </ChakraProvider>
    );
}