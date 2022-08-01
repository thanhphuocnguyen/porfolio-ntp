import { Box, Heading, List, ListIcon, ListItem, Text, useColorModeValue } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { FaNode, FaReact, FaVuejs, FaWpforms } from 'react-icons/fa';
import { SiAntdesign, SiBootstrap, SiJavascript, SiNextdotjs, SiSass, SiTailwindcss, SiTypescript } from 'react-icons/si';
import SectionY from '../custom-dom/section';
import SectionX from '../custom-dom/sectionx';
import HeadlessIcon from '../icons/headless';
import MantineIcon from '../icons/mantine';
import { Meta } from '../work';

const FrontEndDetail = ({ animationSpin, animationBeat, animationShake, animationShakeRevert }) => {
    return (
        <>
            <SectionY delay={0.1}>
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
                        <SiJavascript color={'yellow'} size={80} />
                        <SiTypescript color='#0096FF' size={80} style={{ margin: "0px 20px" }} />
                        <FaNode size={100} color="green" />
                    </Box>
                    <Box fontStyle={"italic"} >Later on, i find out my passion with
                        <Text as={"span"} fontWeight={600}>
                            Javascript(js), TypeScript(ts)
                        </Text>
                        and keep going my careeer path with it for now.
                        I&apos;ve been starting with
                        <Text as={"span"} fontWeight={600}>
                            Frontend
                        </Text>
                        postion and keeping deep dive in
                        <Text
                            as={"span"}
                            fontWeight={600}>Backend
                        </Text>
                        on Nodejs (a JavaScript runtime) later on.
                    </Box>
                </Box>
            </SectionY>
            <SectionY delay={0.3}>
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
                            <ListIcon animation={animationSpin} as={FaReact} color="blue.500" />
                            <Meta color='blue'>ReactJs : </Meta>
                            My most expert skill is ReactJs, i almost use it for projects at work or personal projects.
                            Deep understand life cycles (in React class-based) and hooks (in React function)
                        </SectionX>
                    </ListItem>
                    <ListItem>
                        <SectionX delay={0.3}>
                            <ListIcon as={SiNextdotjs} animation={animationSpin} />
                            <Meta color='green'>NextJs : </Meta>
                            Have more than 1 year experience work with SSR(Server side rendering) React framework.
                            Solid knowlege about this framework.
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
                            <span>In my working time, I have been get acquainted with these plugins, postcss,
                                libs help me style DOM Elements easily</span>
                        </SectionX>
                    </ListItem>
                    <ListItem>
                        <SectionX delay={0.9}>
                            <ListIcon animation={animationShakeRevert} as={SiAntdesign} color="red.700" />
                            <ListIcon animation={animationShake} as={MantineIcon} color="blue.300" />
                            <ListIcon animation={animationShakeRevert} as={HeadlessIcon} color="blue.300" />
                            <Meta>Ant-Design, Mantine UI, Headless-UI : </Meta>
                            <span>
                                familiar with these UI libraries. Faster when build UX/UI with built-in
                                components and enhance user experiences
                            </span>
                        </SectionX>
                    </ListItem>
                    <ListItem>
                        <SectionX delay={1.1}>
                            <ListIcon animation={animationShakeRevert} as={FaWpforms} color="pink.700" />
                            <Meta>React hook form : </Meta>
                            familiar with form control library
                        </SectionX>
                    </ListItem>

                </List>
            </SectionY>
        </>
    );
};

export default FrontEndDetail;