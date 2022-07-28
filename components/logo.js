import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import Link from "next/link"
import Image from 'next/image';

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
&:hover img{
    transform: rotate(30deg)
}
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
    return (
        <div>
            <Link href="/">
                <a>
                    <LogoBox>
                        <Image src={footPrintImg} width={20} height={20} alt="logo_hehe" />
                        <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily="M PLUS Rounded 1c" fontWeight={"bold"} ml={3}>
                            Thanh Phuoc Nguyen
                        </Text>
                    </LogoBox>
                </a>
            </Link>
        </div>
    );
};

export default Logo;