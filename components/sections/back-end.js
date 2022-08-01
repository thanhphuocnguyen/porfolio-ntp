import { Box, Heading, List, ListIcon, ListItem, Text, useColorModeValue } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { SiDeno, SiExpress, SiGraphql, SiMongodb, SiMysql, SiNestjs, SiRedis, SiSocketdotio, SiSqlite } from 'react-icons/si';
import SectionY from '../custom-dom/section';
import SectionX from '../custom-dom/sectionx';
import { Meta } from '../work';

const BackendDetail = ({ animationShake, animationShakeRevert, animationBeat }) => {
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
                        <SiNestjs size={100} color="red" style={{ marginRight: 25, }} />
                        <SiExpress color='#0096FF' size={100} style={{ margin: "auto", }} />
                        <SiDeno style={{ marginLeft: 25, }} size={100} />
                    </Box>
                    <Box fontStyle={"italic"} >
                        After being proficient in frontend job I&lsquo;ve deep
                        dived in backend with Nodejs likes
                        <Text as={"span"} fontWeight={600}> NestJs, ExpressJs, DenoJs</Text>
                        &nbsp;and keep going practise Sql and non-sql like&nbsp;
                        <Text as={"span"} fontWeight={600}>MySql, Mongodb</Text>.
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
                    Working with back-end
                </Heading>
                <List ml={4} my={4} fontSize={17} spacing={3}>
                    <ListItem>
                        <SectionX delay={0.1}>
                            <ListIcon animation={animationBeat} as={SiNestjs} color="red.500" />
                            <Meta color='red'>
                                NestJs :
                            </Meta>
                            Have knowlege of Nestjs&apos;s architecture. grasping core fundatmental concept in Nest
                            Using platform-express to build a backend Rest Apis.
                        </SectionX>
                    </ListItem>
                    <ListItem>
                        <SectionX delay={0.3}>
                            <ListIcon as={SiExpress} animation={animationBeat} />
                            <Meta color='blue'>ExpressJs : </Meta>
                            Solid knowlege about this framework with router, middleware, validate route, controllers,
                            query database...
                        </SectionX>
                    </ListItem>
                    <ListItem>
                        <SectionX delay={0.5}>
                            <ListIcon animation={animationBeat} as={SiDeno} size={50} color="gray.500" />
                            <Meta color='gray'>Denojs : </Meta>
                            <span>A interesting framework, similar with express. Easy to use. you can import a package
                                directly by a online link or write direct TypeScript out of the box.</span>
                        </SectionX>
                    </ListItem>
                    <ListItem>
                        <SectionX delay={0.7}>
                            <ListIcon animation={animationShake} as={SiSocketdotio} color="blue.300" />,&nbsp;
                            <ListIcon animation={animationShakeRevert} as={SiGraphql} color="pink.500" />&nbsp;
                            <Meta>SocketIO, Graphql : </Meta>
                            <span>My own project chat box inside MERN app social network and do some test with Graphql</span>
                        </SectionX>
                    </ListItem>
                    <ListItem>
                        <SectionX delay={0.9}>
                            <ListIcon animation={animationShakeRevert} as={SiMysql} color="orange.700" />
                            <ListIcon animation={animationShake} as={SiMongodb} color="green.300" />
                            <ListIcon animation={animationShakeRevert} as={SiSqlite} color="blue.700" />

                            <Meta>Mysql, Mongodb, Sqlite : </Meta>
                            <span>familiar with these databases. Self researching and practising with some personal projects
                                on Nodejs framework backend through mongoose, sequelized,...</span>
                        </SectionX>
                    </ListItem>
                    <ListItem>
                        <SectionX delay={1.1}>
                            <ListIcon animation={animationShake} as={SiRedis} color="red.500" />
                            <Meta>Redis : </Meta>Use redis in cache queue jobs.
                        </SectionX>
                    </ListItem>
                </List>
            </SectionY>
        </>
    );
};

export default BackendDetail;