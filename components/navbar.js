import React from 'react';
import NextLink from "next/link"
import { Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from '@chakra-ui/react';
import Logo from './logo';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleBtn from './theme-toggle-btn';

const LinkItem = ({ href, path, children }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha')
    return (
        <NextLink href={href} passHref>
            <Link marginY={"auto"} fontWeight={600} p={2} bg={active ? 'glassTeal' : undefined} color={active ? "#202023" : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const NavBar = (props) => {
    const { path } = props
    return (
        <Box
            position={'fixed'}
            as="nav" w="100%"
            bg={useColorModeValue("#ffffff40", "#20202380")}
            style={{ backdropFilter: 'blur(10px' }}
            zIndex={1}
            {...props}
        >
            <Container display={"flex"} p={2} maxW="container.md" flexWrap={"wrap"} justifyContent="space-between">
                <Flex align={"center"} mr={5}>
                    <Heading as={"h1"} size="lg" letterSpacing={'tight'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: "row" }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: "full", md: 'auto' }}
                    flexGrow={1}
                    mt={{ base: 4, md: 1 }}
                >
                    <LinkItem href={"/works"} path={path}>Works</LinkItem>
                    <LinkItem href={"/detail-skill"} path={path}>Skill detail</LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleBtn />
                    <Box ml={2} transition="ease" transitionDuration="" display={{ base: "inline-block", md: 'none' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label='Options'
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href="/detail-skill" passHref>
                                    <MenuItem as={Link}>Skill detail</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default NavBar;