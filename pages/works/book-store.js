import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import Layout from '../../components/article';
import Paragraph from '../../components/custom-dom/paragraph';
import { Meta, Title, WorkImage } from '../../components/work';

const BookStore = () => {
    return (
        <Layout title="Book shop">
            <Container minW={"container.md"}>
                <Title>Build a MVC NodeJs Project online bookshop
                    <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    User with admin role can sell books through create/update description of books. User can see book in many pages,
                    order books,
                    and charge for the order through stripe. At last they can print invoices in orders history.
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
                        <span>NodeJs, Ejs, ExpressJs, Mongo, MySql</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Libraries</Meta>
                        <span>Stripe, Jwt, Bscript(hash password), PDFKit, Node-mailer, sendgrid,
                            expressjs libs (validator), multer, Mongoose, Sequelized,...</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Styles</Meta>
                        <span>css, html of ejs</span>
                    </ListItem>
                </List>
                {Array(9).fill(null).map((e, idx) => (
                    <WorkImage key={idx} alt={`image ${idx + 1}`} src={`/images/projects/bookshop/prj-${idx + 1}.png`} />
                ))}
            </Container>
        </Layout>
    );
};

export default BookStore;