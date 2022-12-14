import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import Layout from '../../components/article';
import Paragraph from '../../components/custom-dom/paragraph';
import { Meta, Title, WorkImage } from '../../components/work';

const CompanyProject1 = () => {
    return (
        <Layout title="Salary calculator">
            <Container minW={"container.md"}>
                <Title>Build UI new version main website of SieuViet Company <Badge>2021</Badge></Title>
                <Paragraph>
                    One of biggest recruiter website help user find new jobs in VietNam. using ReactJs, NextJs, and Tailwind UI, using PHP Phantom Platform backend.
                    With many sections, animate, guideline users and some suggestion for user to find new jobs.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://vieclam24h.vn">
                            https://vieclam24h.vn
                            <ExternalLinkIcon mx={2} />
                        </Link>
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
                        <span>Tailwind, HeadlessUi, React-hook-form, css, npm libraries...</span>
                    </ListItem>
                </List>
                {Array(5).fill(null).map((e, idx) => (
                    <WorkImage key={idx} alt={`image ${idx + 1}`} src={`/images/projects/seeker/prj-${idx + 1}.png`} />
                ))}
            </Container>
        </Layout>
    );
};

export default CompanyProject1;