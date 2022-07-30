import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Section from "../components/custom-dom/section"
import { WorkGridItem } from "../components/grid-item"
import thumbSalaryCalculator from "../public/images/projects/salary/prj-1.png";
import thumbCompanyProduct from "../public/images/projects/seeker/prj-4.png";
import thumbCompanyProduct2 from "../public/images/projects/recruiter/prj-2.png";
import thumbStepresume from "../public/images/projects/resume/prj-8.png";
import thumbBookstore from "../public/images/projects/bookshop/prj-1.png";
import thumbSocialNetwork from "../public/images/projects/social-network/prj-3.png";
import thumbTicketing from "../public/images/projects/ticket-sale/prj-10.png";
import thumbCarReport from "../public/images/projects/car-report/prj-1.png";
import Layout from '../components/article';

const Works = () => {
    return (
        <Layout>
            <Container maxWidth={"fit-content"}>
                <Heading as={"h3"} fontSize={25} mb={4}>Works</Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.1}>

                        <WorkGridItem id={"company-project-2"} title="Recruiter website" thumbnail={thumbCompanyProduct2} >
                            And web page for helping recruiter seek for candidate.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id={"company-project-1"} title="Seeker website" thumbnail={thumbCompanyProduct} >
                            A website for employee find jobs and apply some cv.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.5}>
                        <WorkGridItem id={"step-resume"} title="Step resume" thumbnail={thumbStepresume} >
                            A form page website for candidate create a template cv profile.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.7}>
                        <WorkGridItem id={"salary-calculator"} title="Salary calculator" thumbnail={thumbSalaryCalculator} >
                            A form page salary calculate for employee. use RestAPI to calculate input and show result salary types,
                            show more infomation need to know. Use ReactJs, NextJs, Tailwinds, React-Hook-Form,...
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Heading my={4} as="h3" fontSize={25}>Personal works</Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.1}>
                        <WorkGridItem id={"book-store"} title="Book store" thumbnail={thumbBookstore} >
                            A fullstack NodeJs website to sale and buy books. use MVC pattern.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id={"social-network"} title="Social network" thumbnail={thumbSocialNetwork} >
                            A fullstack NodeJs website about networks, social networks, people can post, like, comment, and message.
                            Using RestAPI with expressjs and nextjs and some ui libs
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.5}>
                        <WorkGridItem id={"ticketing"} title="Tickets ecomerce website" thumbnail={thumbTicketing} >
                            A microservice website for user to sale/buy tickets. with many services (orders, payments, expires srv, auth...).
                            Using expressjs, NextJs, NATS mail brokers, bull - redis for queue...
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.7}>
                        <WorkGridItem id={"restapi-nestjs"} title="Rest API Nestjs" thumbnail={thumbCarReport} >
                            A RestAPI for cars sale status reports.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Works;