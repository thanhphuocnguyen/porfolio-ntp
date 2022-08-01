import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    usePrefersReducedMotion
} from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/article';
import { heartBeat, spin, swing, swingRevert } from '../libs/animations';
import FrontEndDetail from '../components/sections/front-end';
import BackendDetail from '../components/sections/back-end';
import BeginningDetail from '../components/sections/begining';
import { FaReact, FaStar } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';

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
                <Tabs isLazy={true} lazyBehavior="unmount">
                    <TabList>
                        <Tab fontWeight={600}><Box mr={3} animation={animationSpin}><FaStar size={30} color="#EAE509" /></Box>At Beginning</Tab>
                        <Tab fontWeight={600}><Box mr={3} animation={animationSpin}><FaReact size={30} color="#0096FF" /></Box> Frontend evolution</Tab>
                        <Tab fontWeight={600}><Box mr={3} animation={animationSpin}><SiNestjs size={30} color="red" /></Box> Rise of backend</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <BeginningDetail />
                        </TabPanel>
                        <TabPanel>
                            <FrontEndDetail
                                animationShakeRevert={animationShakeRevert}
                                animationBeat={animationBeat}
                                animationShake={animationShake}
                                animationSpin={animationSpin}
                            />
                        </TabPanel>
                        <TabPanel>
                            <BackendDetail
                                animationShakeRevert={animationShakeRevert}
                                animationBeat={animationBeat}
                                animationShake={animationShake}
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </Layout >
    );
};

export default SkillDetails;