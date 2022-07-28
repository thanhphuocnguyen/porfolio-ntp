import { Box, Center, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import Image from "next/image"
import NextLink from "next/link"
import { Global } from '@emotion/react';

export const GridItem = ({ children, href, title, thumbnail }) => {
    return (
        <Center>
            <Box w={"100%"}>
                <LinkBox cursor={"pointer"}>
                    <Image src={thumbnail} alt={title}
                        className='grid-item-thumbnail'
                        placeholder='blur'
                        loading='lazy'
                    />
                    <LinkOverlay href={href} target='_blank'>
                        <Text mt={2}>{title}</Text>
                    </LinkOverlay>
                    <Text fontSize={14}>{children}</Text>
                </LinkBox>
            </Box>
        </Center>
    );
};

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Center>
        <Box w="100%" mb={4} >
            <NextLink href={`/works/${id}`}>
                <LinkBox cursor={"pointer"}>
                    <Image
                        src={thumbnail}
                        alt={title}
                        className="grid-item-thumbnail"
                        placeholder='blur'
                    />
                    <LinkOverlay href={`/works/${id}`}>
                        <Text mt={2} fontSize={20}>{title}</Text>
                    </LinkOverlay>
                    <Text fontSize={14}>{children}</Text>
                </LinkBox>
            </NextLink>
        </Box>
    </Center>
);

export const GridItemStyle = () => <Global styles={`.grid-item-thumbnail { border-radius: 12px; }`} />
