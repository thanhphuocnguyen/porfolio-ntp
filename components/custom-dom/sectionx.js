import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const SectionX = ({ children, delay = 0 }) => {
    return (
        <StyledDiv
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay }}
            mb={6}
        >
            {children}
        </StyledDiv>
    )
}

export default SectionX;