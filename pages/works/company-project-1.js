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
                        <span>Tailwind, HeadlessUi, React-hook-form, css, npm libraries</span>
                    </ListItem>
                </List>
                <WorkImage alt={"image 6"} src="/images/projects/company-product6.png" />
                <WorkImage alt={"image 1"} src="/images/projects/company-product.png" />
                <WorkImage alt={"image 2"} src="/images/projects/company-product2.png" />
                <WorkImage alt={"image 3"} src="/images/projects/company-product3.png" />
                {/* <WorkImage alt={"image 4"} src="/images/projects/company-product4.png" />
                <WorkImage alt={"image 5"} src="/images/projects/company-product5.png" /> */}
            </Container>
        </Layout>
    );
};

export default CompanyProject1;