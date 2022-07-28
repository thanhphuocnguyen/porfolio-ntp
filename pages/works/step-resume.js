import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import Layout from '../../components/article';
import Paragraph from '../../components/custom-dom/paragraph';
import { Meta, Title, WorkImage } from '../../components/work';

const StepResume = () => {
    return (
        <Layout title="Salary calculator">
            <Container minW={"container.md"}>
                <Title>Salary calculator <Badge>2022</Badge></Title>
                <Paragraph>
                    Multi web page help users to create their own resume on main site to easy to find job. Using ReactJs, NextJs, and Tailwind UI, using PHP Phantom Platform backend.
                    With many sections, animate, guideline users and some suggestion for user to find new jobs.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://vieclam24h.vn/nguoi-tim-viec/ho-so-tung-buoc/thong-tin-chung.html">
                            https://vieclam24h.vn/nguoi-tim-viec/ho-so-tung-buoc/thong-tin-chung.html
                            <ExternalLinkIcon mx={2} /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows, MacOs, Linux, ios, Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJs, ReactJs, NextJs</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Styles</Meta>
                        <span>Tailwind, HeadlessUi, React-hook-form, css</span>
                    </ListItem>
                </List>
                <WorkImage alt={"image 1"} src="/images/projects/step-resume-project1.png" />
                <WorkImage alt={"image 2"} src="/images/projects/step-resume-project2.png" />
                <WorkImage alt={"image 3"} src="/images/projects/step-resume-project3.png" />
                <WorkImage alt={"image 4"} src="/images/projects/step-resume-project4.png" />
                <WorkImage alt={"image 5"} src="/images/projects/step-resume-project5.png" />
                <WorkImage alt={"image 6"} src="/images/projects/step-resume-project6.png" />
                <WorkImage alt={"image 7"} src="/images/projects/step-resume-project7.png" />
                <WorkImage alt={"image 8"} src="/images/projects/step-resume-project8.png" />
                <WorkImage alt={"image 9"} src="/images/projects/step-resume-project9.png" />
            </Container>
        </Layout>
    );
};

export default StepResume;