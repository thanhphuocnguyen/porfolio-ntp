import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from 'react';
import Layout from '../../components/article'
import { Meta, Title, WorkImage } from '../../components/work'
import Paragraph from '../../components/custom-dom/paragraph'
const SalaryCalculatorDescription = () => {
    return (
        <Layout title="Salary calculator">
            <Container minW={"container.md"}>
                <Title>Salary calculator <Badge>2022</Badge></Title>
                <Paragraph>
                    A web page help user calculate income in VietNam. using ReactJs, NextJs, and Tailwind UI, using PHP Phantom Platform backend.
                    With many sections, animate, guideline users and some suggestion for user to find new jobs.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://vieclam24h.vn/tinh-luong-gross-sang-net.html">https://vieclam24h.vn/tinh-luong-gross-sang-net.html <ExternalLinkIcon mx={2} /></Link>
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
                {Array(5).fill('/images/projects').map((e, idx) => (
                    <WorkImage key={idx} alt={`image ${idx + 1}`} src={`${e}/salary/prj-${idx + 1}.png`} />
                ))}
            </Container>
        </Layout>
    );
};

export default SalaryCalculatorDescription;