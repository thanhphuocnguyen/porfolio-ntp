import { Heading, List, ListIcon, ListItem, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { SiCsharp, SiCss3, SiMicrosoftsqlserver } from 'react-icons/si';
import SectionY from '../custom-dom/section';
import SectionX from '../custom-dom/sectionx';
import { Meta } from '../work';

const BeginningDetail = () => {
    return (
        <SectionY delay={0.1}>
            <Heading
                background={useColorModeValue("#F2EBE9", "gray.500")}
                display={"inline-block"}
                px={2} py={1}
                rounded={'md'} as={"h3"}
                fontSize={20}
                mb={4}
                shadow="md"
            >
                My first beginning
            </Heading>
            <List ml={4} my={4} fontSize={17} spacing={3}>
                <ListItem>
                    <SectionX delay={0.1}>
                        <ListIcon
                            as={FaHtml5}
                            color={"orange.500"}
                            size={50} />
                        <Meta>HyperText Markup Language : </Meta>
                        understand crystal clear. Currently using.
                    </SectionX>
                </ListItem>
                <ListItem>
                    <SectionX delay={0.3}>
                        <ListIcon
                            as={SiCss3}
                            color={"blue.700"}
                            size={50} />
                        <Meta>Cascading Style Sheets : </Meta>
                        firmly grasp basic and advanced css language. Currently using
                    </SectionX>
                </ListItem>
                <ListItem>
                    <SectionX delay={0.5}>
                        <ListIcon
                            as={SiCsharp}
                            color={"#816797"}
                            size={50} />
                        <Meta>C sharp : </Meta>
                        is my first programming language. I have learned C# to build website purpose.
                    </SectionX>
                </ListItem>
                <ListItem>
                    <SectionX delay={0.7}>
                    <ListIcon as={SiMicrosoftsqlserver} color="red" size={"2em"} />
                    <Meta>Sql server</Meta>
                    <span>is my choice to approach structured query language and this one to store data for backend</span>
                    </SectionX>
                </ListItem>
                <ListItem>
                    <SectionX delay={0.9}>
                        <Meta>MVC pattern</Meta>
                        <span>is a popular pattern to use to build web with C#</span>
                    </SectionX>
                </ListItem>
                <ListItem>
                    <SectionX delay={1.1}>
                        <Meta>Entity framework</Meta>
                        <span> is the framework I use to easy approach develop a website structure</span>
                    </SectionX>
                </ListItem>
            </List>
        </SectionY>
    );
};

export default BeginningDetail;