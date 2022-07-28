import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import Layout from '../../components/article';
import Paragraph from '../../components/custom-dom/paragraph';
import { Meta, Title } from '../../components/work';

const CompanyProject3 = () => {
    return (
        <Layout title="Salary calculator">
            <Container minW={"container.md"}>
                <Title>
                    Build UI new service package for employer easy to find candidates.
                    <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    Employers have bought this package can see suitable candidates suggested by main websites. They can accept or refuse or insurance the suggested candidate. 
                    Help them manage, control, visualize candidate they have contacted or accepted and the service they have bought
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https:/ntd.vieclam24h.vn/nha-tuyen-dung/ho_tro_tim_kiem_ung_vien.html">
                            https://vieclam24h.vn/nha-tuyen-dung/ho_tro_tim_kiem_ung_vien.html
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
                        <span>Tailwind, HeadlessUi, React-hook-form, css</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default CompanyProject3;