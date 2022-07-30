import {
    Box,
    Container,
    Heading,
    List,
    ListIcon,
    ListItem,
    Text,
    useColorModeValue,
    usePrefersReducedMotion
} from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/article';
import SectionY from '../components/custom-dom/section';
import { Meta } from '../components/work';
import {
    SiCsharp,
    SiMicrosoftsqlserver,
    SiJavascript,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiSass,
    SiAntdesign,
    SiNextdotjs,
    SiExpress,
    SiNestjs,
    SiDeno
} from "react-icons/si"
import { FaNode, FaReact, FaVuejs, FaHtml5, FaWpforms } from "react-icons/fa";
import MantineIcon from '../components/icons/mantine';
import HeadlessIcon from '../components/icons/headless';
import SectionX from '../components/custom-dom/sectionx';
import { heartBeat, spin, swing, swingRevert } from '../libs/animations';

const SkillDetails = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const animationSpin = prefersReducedMotion
        ? undefined
        : `${spin} infinite  5s linear`
    const animationBeat = prefersReducedMotion
        ? undefined
        : `${heartBeat} infinite 7s linear`

    const animationShake = prefersReducedMotion ? undefined
        : `${swing} infinite ease-in-out 1s`
    const animationShakeRevert = prefersReducedMotion ? undefined
        : `${swingRevert} infinite ease-in-out 1s`
    return (
        <Layout title={"Skill Details"}>
            <Container maxW={"container.md"}>
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
                            <ListIcon as={SiMicrosoftsqlserver} color="red" size={"2em"} />
                            <Meta>Sql server</Meta>
                            <span>is my choice to approach structured query language and this one to store data for backend</span>
                            <SectionX delay={0.7}>
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
                <SectionY delay={0.3}>
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
                </SectionY>
                <SectionY delay={0.5}>
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
                            <SectionX delay={0.1}>
                                <ListIcon animation={animationSpin} as={FaReact} color="blue.500" /><Meta color='blue'>ReactJs : </Meta>
                                My most expert skill is ReactJs, i almost use it for projects at work or personal projects.
                                Deep understand life cycles (in React class-based) and hooks (in React function)
                            </SectionX>
                        </ListItem>
                        <ListItem>
                            <SectionX delay={0.3}>
                                <ListIcon as={SiNextdotjs} animation={animationSpin} />
                                <Meta color='green'>NextJs : </Meta>
                                Have more than 1 year experience work with SSR(Server side rendering) React framework. Solid knowlege about this framework.
                            </SectionX>
                        </ListItem>
                        <ListItem>
                            <SectionX delay={0.5}>
                                <ListIcon animation={animationBeat} as={FaVuejs} size={50} color="green.500" /><Meta color='green'>VueJs : </Meta>
                                <span>Having more three months work with framework VueJs in enterprise projects. </span>
                            </SectionX>
                        </ListItem>
                        <ListItem>
                            <SectionX delay={0.7}>
                                <ListIcon animation={animationShake} as={SiTailwindcss} color="blue.300" />,&nbsp;
                                <ListIcon animation={animationShakeRevert} as={SiBootstrap} color="purple.500" />,&nbsp;
                                <ListIcon animation={animationShake} as={SiSass} color="pink.600" />,&nbsp;
                                <Meta>Tailwinds, Bootstrap, Scss, Sass : </Meta>
                                <span>In my working time, I have been get acquainted with these plugins, postcss, libs help me style DOM Elements easily</span>
                            </SectionX>
                        </ListItem>
                        <ListItem>
                            <SectionX delay={0.9}>
                                <ListIcon animation={animationShakeRevert} as={SiAntdesign} color="red.700" />
                                <ListIcon animation={animationShake} as={MantineIcon} color="blue.300" />
                                <ListIcon animation={animationShakeRevert} as={HeadlessIcon} color="blue.300" />
                                <Meta>Ant-Design, Mantine UI, Headless-UI : </Meta>
                                <span>familiar with these UI libraries. Faster when build UX/UI with built-in components and enhance user experiences</span>
                            </SectionX>
                        </ListItem>
                        <ListItem>
                            <SectionX delay={1.1}>
                                <ListIcon animation={animationShakeRevert} as={FaWpforms} color="pink.700" /><Meta>React hook form : </Meta>familiar with form control library
                            </SectionX>
                        </ListItem>

                    </List>
                </SectionY>
                <SectionY delay={0.7}>
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
                            <SiNestjs size={100} color="red" style={{ marginRight: 25, }} />
                            <SiExpress color='#0096FF' size={100} style={{ margin: "auto", }} />
                            <SiDeno style={{ marginLeft: 25, }} size={100} />
                        </Box>
                        <Text fontStyle={"italic"} >After being proficient in frontend job I&lsquo;ve deep dived in backend with Nodejs likes
                            <Text as={"span"} fontWeight={600}> NestJs, ExpressJs, DenoJs</Text>
                            &nbsp;and keep going practise Sql and non-sql like&nbsp;
                            <Text as={"span"} fontWeight={600}>MySql, Mongodb</Text>.
                        </Text>
                    </Box>
                </SectionY>
                <SectionY delay={0.9}>
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
                        Working with back-end
                    </Heading>
                    <List ml={4} my={4} fontSize={17} spacing={3}>
                        <ListItem>
                            <SectionX delay={0.1}>
                                <ListIcon animation={animationSpin} as={FaReact} color="blue.500" /><Meta color='blue'>ReactJs : </Meta>
                                My most expert skill is ReactJs, i almost use it for projects at work or personal projects.
                                Deep understand life cycles (in React class-based) and hooks (in React function)
                            </SectionX>
                        </ListItem>
                        <ListItem>
                            <SectionX delay={0.3}>
                                <ListIcon as={SiNextdotjs} animation={animationSpin} />
                                <Meta color='green'>NextJs : </Meta>
                                Have more than 1 year experience work with SSR(Server side rendering) React framework. Solid knowlege about this framework.
                            </SectionX>
                        </ListItem>
                        <ListItem>
                            <SectionX delay={0.5}>
                                <ListIcon animation={animationBeat} as={FaVuejs} size={50} color="green.500" /><Meta color='green'>VueJs : </Meta>
                                <span>Having more three months work with framework VueJs in enterprise projects. </span>
                            </SectionX>
                        </ListItem>
                        <ListItem>
                            <SectionX delay={0.7}>
                                <ListIcon animation={animationShake} as={SiTailwindcss} color="blue.300" />,&nbsp;
                                <ListIcon animation={animationShakeRevert} as={SiBootstrap} color="purple.500" />,&nbsp;
                                <ListIcon animation={animationShake} as={SiSass} color="pink.600" />,&nbsp;
                                <Meta>Tailwinds, Bootstrap, Scss, Sass : </Meta>
                                <span>In my working time, I have been get acquainted with these plugins, postcss, libs help me style DOM Elements easily</span>
                            </SectionX>
                        </ListItem>
                        <ListItem>
                            <SectionX delay={0.9}>
                                <ListIcon animation={animationShakeRevert} as={SiAntdesign} color="red.700" />
                                <ListIcon animation={animationShake} as={MantineIcon} color="blue.300" />
                                <ListIcon animation={animationShakeRevert} as={HeadlessIcon} color="blue.300" />
                                <Meta>Ant-Design, Mantine UI, Headless-UI : </Meta>
                                <span>familiar with these UI libraries. Faster when build UX/UI with built-in components and enhance user experiences</span>
                            </SectionX>
                        </ListItem>
                        <ListItem>
                            <SectionX delay={1.1}>
                                <ListIcon animation={animationShakeRevert} as={FaWpforms} color="pink.700" /><Meta>React hook form : </Meta>familiar with form control library
                            </SectionX>
                        </ListItem>

                    </List>
                </SectionY>
            </Container>
        </Layout >
    );
};

export default SkillDetails;