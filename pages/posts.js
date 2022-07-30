import { Container, GridItem, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/article';
import SectionY from '../components/custom-dom/section';

const Posts = () => {
    return (
        <Layout title={"Posts"}>
            <Container maxW={"container.md"}>
                <Heading as={"h3"} fontSize={20} mb={4}>Populars Post</Heading>
                <SectionY delay={0.1}>
                    <SimpleGrid columns={[1, 1, 2]} gap={6}>
                        <GridItem title="My first workflow"></GridItem>
                    </SimpleGrid>
                </SectionY>
            </Container>
        </Layout>
    );
};

export default Posts;