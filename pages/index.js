import { Box, Button, Center, Container, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import Paragraph from '../components/custom-dom/paragraph'
import Section from '../components/custom-dom/section'
// import Head from 'next/head'
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/custom-dom/bio';
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container maxW={"container.md"}>
      <Box borderRadius={"lg"} p={3} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} fontFamily="M PLUS Rounded 1c" fontWeight={600} alignContent="center">
        Hello, I&apos;m a fullstack Nodejs developer based on HCM city, VietNam.
      </Box>
      <Box display={{ md: 'flex' }} >
        <Box flexGrow={1} marginY="auto">
          <Heading fontFamily="M PLUS Rounded 1c" fontWeight={600} fontSize={30} justifyContent="center">Nguyen Thanh Phuoc</Heading>
          <p>Web/App Developer (Javascript, Dart,...)</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} display="flex" justifyContent="center">
          <Image
            borderColor={"whiteAlpha.800"}
            borderStyle={"solid"}
            maxWidth="100px"
            borderWidth={2}
            borderRadius="full"
            display={"inline-block"}
            src="/images/random-handsome-boy.jpg"
            alt='just handsome boy'
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as={"h3"} variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Phuoc Nguyen is Nodejs developer work in HCM city, VietNam with the passion with
          technology about building softwares he wants.
          He has more than one year work with many Nodejs framework from Front-end to Back-end
          in software development. Working in a big company about helping employer or seeker connect to each other.
          He is a professional developer with many major skills like, work management, teamwork, workflows and solving problems when
          work in here. When time break, he love hanging-out, reading book, and photographing beautiful scences. Now he is researching in Devops
          <NextLink href={"/works/devops"}>
            <Link> See what he have been research.</Link>
          </NextLink>
        </Paragraph>
        <Center>
          <Box my={4}>
            <NextLink href={"/works"}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Center>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant={'section-title'}>
          Biography
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Thua Thien Hue, VietNam.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Gradutated in Electronic & Telecomunication major in Hue University of Sciences..
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed self-teach information technology basic and army reserve course for 4 months.
        </BioSection>
        <BioSection>
          <BioYear>May 04 2021</BioYear>
          Worked at Sieu Viet human resource joint stock company.
        </BioSection>
        <BioSection>
          <BioYear>Aug 01 2021 to present</BioYear>
          Working at Vidiva joint stock company.
        </BioSection>
      </Section>
      <Section delay={0.5}>
        <Heading as="h3" color={"red.500"} variant={"section-title"}>Interests &#10084;</Heading>
        <Paragraph>
          Music (Joji, Weeknd, Coldplay...), scenery picture, rowing on perfume river (my home town), work out,
          <Link href={"https://www.instagram.com/_ntp.897_/"} target="_blank"> Photography, </Link>
          Algorithms on
          <Link href='https://www.hackerrank.com/' target="_blank"> hackerrank</Link>,
          <Link href='https://www.codingame.com/' target="_blank"> Coding game</Link> and learn new technology for work.
        </Paragraph>
      </Section>
    </Container>
  )
}
