import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import Layout from '../../components/article';
import Paragraph from '../../components/custom-dom/paragraph';
import { Meta, Title, WorkImage } from '../../components/work';

const TicketSale = () => {
    return (
        <Layout title="Salary calculator">
            <Container minW={"container.md"}>
                <Title>Social network website <Badge>2022</Badge></Title>
                <Paragraph>
                    A MERN app using microservices manage with Docker, K8S and Skaffold. Functions are splitted out with many services.
                    Writing with Typescript.
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
                        <span>NodeJs, ReactJs, NextJs, ExpressJs, Docker, Mongodb, K8S, NATS message broker, Redis - Bull queue.</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Libraries</Meta>
                        <span>Stripe, Jwt, Bscript(hash password), npm libs self published, expressjs libs (validator),
                            Mongoose,...</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Styles</Meta>
                        <span>Bootstraps, css...</span>
                    </ListItem>
                </List>
                {Array(10).fill('/images/projects').map((e, idx) => (
                    <WorkImage key={idx} alt={`image ${idx + 1}`} src={`${e}/ticket-sale/prj-${idx + 1}.png`} />
                ))}
            </Container>
        </Layout>
    );
};

export default TicketSale;