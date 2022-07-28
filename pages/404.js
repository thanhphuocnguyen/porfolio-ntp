import { Box, Button, Center, Container, Divider, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Not Found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />
            <Center>
                <Box my={6}>
                    <NextLink href={"/"}>
                        <Button colorScheme={"teal"}>Return to home</Button>
                    </NextLink>
                </Box>
            </Center>
        </Container>
    );
};

export default NotFound;