import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import Layout from '../../components/article';
import Paragraph from '../../components/custom-dom/paragraph';
import { Meta, Title, WorkImage } from '../../components/work';

const SocialNetwork = () => {
    return (
        <Layout title="Salary calculator">
            <Container minW={"container.md"}>
                <Title>Social network website <Badge>2022</Badge></Title>
                <Paragraph>
                    A public website help people to post a status, images on the thier dashboard and connect to chat to other people.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="#">
                            Not deployed yet
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows, MacOs, Linux, ios, Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJs, ReactJs, NextJs, ExpressJs, SocketIo, Mongodb.</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Libraries</Meta>
                        <span>Stripe, Jwt, Bscript(hash password), PDFKit, Node-mailer, sendgrid, expressjs libs (validator), 
                        multer, Mongoose, Sequelized,...</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Styles</Meta>
                        <span>Mantine UI, Tailwind, css...</span>
                    </ListItem>
                </List>
                {Array(9).fill('/images/projects').map((e, idx) => (
                    <WorkImage key={idx} alt={`image ${idx + 1}`} src={`${e}/social-network/prj-${idx + 1}.png`} />
                ))}
            </Container>
        </Layout>
    );
};

export default SocialNetwork;