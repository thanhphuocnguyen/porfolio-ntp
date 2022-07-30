import {
    Box,
    Container,
    Heading,
    keyframes,
    List,
    ListIcon,
    ListItem,
    Text,
    useColorModeValue,
    usePrefersReducedMotion
} from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/article';
import Section from '../components/custom-dom/section';
import { Meta } from '../components/work';
import {
    SiCsharp,
    SiMicrosoftsqlserver,
    SiJavascript,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiSass,
    SiAntdesign
} from "react-icons/si"
import { FaNode, FaReact, FaVuejs, FaHtml5 } from "react-icons/fa"
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const heartBeat = keyframes`
 0% {
    transform: scale(0.8);
  }
  5% {
    transform: scale(1.2);
  }
  10% {
    transform: scale(0.8);
  }
  15% {
    transform: scale(1);
  }
  20%{
    transform: scale(1.2);
  }
  30%{
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.2);
  }
  60%{
    transform: scale(1.6);
  }
  70%{
    transform: scale(1.2);
  }
  100% {
    transform: scale(0.8);
  }
`
const SkillDetails = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const animationSpin = prefersReducedMotion
        ? undefined
        : `${spin} infinite 5s linear`
    const animationBeat = prefersReducedMotion
        ? undefined
        : `${heartBeat} infinite 7s linear`
    return (
        <Layout title={"Skill Details"}>
            <Container maxW={"container.md"}>
                <Section delay={0.1}>
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
                            <ListIcon
                                as={FaHtml5}
                                color={"orange.500"}
                                size={50} />
                            <Meta>HyperText Markup Language : </Meta>
                            understand crystal clear. Currently using.
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={SiCss3}
                                color={"blue.700"}
                                size={50} />
                            <Meta>Cascading Style Sheets : </Meta>
                            firmly grasp basic and advanced css language. Currently using
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={SiCsharp}
                                color={"#816797"}
                                size={50} />
                            <Meta>C sharp : </Meta>
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
                            <ListIcon as={SiMicrosoftsqlserver} color="red" size={"2em"} />
                            <Meta>Sql server</Meta>
                            <span>is my choice to approach structured query language and this one to store data for backend</span>
                        </ListItem>
                    </List>
                </Section>
                <Section delay={0.2}>
                    <Box
                        display={"flex"}
                        flexDir="column"
                        shadow={"dark-lg"}
                        p={4}
                        bg={useColorModeValue("#F0EBE3", "#3D3C42")}
                        rounded={"lg"}
                        justifyContent={"center"}
                        alignContent="center"
                    >
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
                        mb={4}
                        shadow="md"
                    >
                        Working with front-end
                    </Heading>
                    <List ml={4} my={4} fontSize={17} spacing={3}>
                        <ListItem>
                            <ListIcon animation={animationSpin} as={FaReact} color="blue.500" /><Meta color='blue'>ReactJs : </Meta>
                            My most expert skill is ReactJs, i almost use it for projects at work or personal projects.
                            Deep understand life cycles (in React class-based) and hooks (in React function)
                        </ListItem>
                        <ListItem>
                            <ListIcon animation={animationBeat} as={FaVuejs} size={50} color="green.500" /><Meta color='green'>VueJs : </Meta>
                            <span>Having more three months work with framework VueJs in enterprise projects. </span>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={SiTailwindcss} color="blue.300" />,&nbsp;
                            <ListIcon as={SiBootstrap} color="purple.500" />,&nbsp;
                            <ListIcon as={SiSass} color="pink.600" />,&nbsp;
                            <Meta>Convinience styles helper : </Meta>
                            <span>In my working time, I have been get acquainted with these plugins, postcss, libs help me style DOM Elements easily</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Sql server</Meta>
                            <span>is my choice to approach structured query language and this one to store data for backend</span>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout >
    );
};

export default SkillDetails;