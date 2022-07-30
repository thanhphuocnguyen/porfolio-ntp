import { ChevronRightIcon } from "@chakra-ui/icons"
import { Badge, Box, Heading, Image, Link } from "@chakra-ui/react"
import NextLink from "next/link"

export const Title = ({ children }) => {
    return (
        <Box>
            <NextLink href="/works">
                <Link fontSize={18} fontWeight={600}>Works</Link>
            </NextLink>
            <span>
                &nbsp;
                <ChevronRightIcon w={25} h={25} mb={1} />
                &nbsp;
            </span>
            <Heading display={'inline-block'} as="h3" fontSize={20} mb={4}>
                {children}
            </Heading>
        </Box>

    )
}

export const WorkImage = ({ src, alt, key }) => (
    <Image key={key} borderRadius={"lg"} w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children, color="green" }) => (
    <Badge colorScheme={color} my="auto" variant='solid' mr={2}>
        {children}
    </Badge>
)
