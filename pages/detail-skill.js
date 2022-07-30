import { Box, Container, Heading, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/article';
import Section from '../components/custom-dom/section';
import { Meta } from '../components/work';
import { SiCsharp, SiMicrosoftsqlserver, SiJavascript } from "react-icons/si"
import { FaNode } from "react-icons/fa"

const SkillDetails = () => {
    return (
        <Layout title={"Skill Details"}>
            <Container maxW={"container.md"}>
                <Section delay={0.1}>
                    <Heading background={useColorModeValue("#F2EBE9", "gray.500")} display={"inline-block"} px={2} py={1} rounded={'md'} as={"h3"} fontSize={20} mb={4}>My first beginning</Heading>
                    <List ml={4} my={4} fontSize={17} spacing={3}>
                        <ListItem>
                            <Box display={"flex"} p={1}><SiCsharp size={"25px"} color="#816797" style={{ background: "white", borderRadius: "100%", marginRight: 5 }} /><Meta>C sharp : </Meta></Box>
                            is my first programming language. I have learned C# to build website purpose.
                        </ListItem>
                        <ListItem>
                            <Meta>Entity framework</Meta>
                            <span> is the framework I use to easy approach develop a website structure</span>
                        </ListItem>
                        <ListItem>
                            <Meta>MVC pattern</Meta>
                            <span>is a popular pattern to use to build web with C#</span>
                        </ListItem>
                        <ListItem>
                            <Box display={"flex"}>
                                <SiMicrosoftsqlserver color='red' size={25} style={{ marginRight: 5 }} /><Meta>Sql server</Meta>
                            </Box>

                            <span>is my choice to approach structured query language and this one to store data for backend</span>
                        </ListItem>
                    </List>
                </Section>
                <Section delay={0.2}>
                    <Box display={"flex"} flexDir="column" justifyContent={"center"} alignContent="center">
                        <Box display={"flex"} mx="auto">
                            <SiJavascript color='yellow' size={80} style={{ margin: "auto", }} />
                            <FaNode size={100} color="green" style={{ marginLeft: 25, }} />
                        </Box>
                        <Text fontStyle={"italic"} >Later on, i find out my passion with <Text as={"span"} fontWeight={600}>Javascript(js)</Text> and keep going my careeer path with it for now.
                            I&apos;ve been starting with <Text as={"span"} fontWeight={600}>Frontend</Text> postion and keeping deep dive in <Text as={"span"} fontWeight={600}>Backend</Text> on Nodejs (a JavaScript runtime) later on.</Text>
                    </Box>
                </Section>
                <Section delay={0.3}>
                    <Heading
                        background={useColorModeValue("#F2EBE9", "gray.500")}
                        display={"inline-block"}
                        px={2}
                        py={1}
                        rounded={'md'}
                        as={"h3"}
                        fontSize={20}
                        mb={4}>
                        Working with frontend
                    </Heading>
                    <List ml={4} my={4} fontSize={17} spacing={3}>
                        <ListItem display={"flex"}>
                            <Meta><SiCsharp />C#</Meta>
                            is my first programming language. I have learned C# to build website purpose.
                        </ListItem>
                        <ListItem>
                            <Meta>Entity framework</Meta>
                            <span>is the framework I use to easy approach develop a website structure</span>
                        </ListItem>
                        <ListItem>
                            <Meta>MVC pattern</Meta>
                            <span>is a popular pattern to use to build web with C#</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Sql server</Meta>
                            <span>is my choice to approach structured query language and this one to store data for backend</span>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    );
};

export default SkillDetails;