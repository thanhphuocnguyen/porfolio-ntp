import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import Layout from '../../components/article';
import Paragraph from '../../components/custom-dom/paragraph';
import { Meta, Title } from '../../components/work';

const RestAPINestJS = () => {
    return (
        <Layout title="Book shop">
            <Container minW={"container.md"}>
                <Title>Building a RestAPI using NestJs 
                    <Badge mx={4} mb={2} p={1} rounded="md" background={"green.500"}>2022</Badge>
                </Title>
                <Paragraph>
                    A modern Rest APIs with nestjs and typescript.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Backend</Meta>
                        <Link href="#">
                            Not deployed yet
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows, MacOs, Linux, ios, Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NestJs</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Libraries</Meta>
                        <span>Schemas, Validator Schema, </span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default RestAPINestJS;