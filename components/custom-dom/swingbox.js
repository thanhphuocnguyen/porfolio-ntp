import { chakra } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import React from 'react';

const StyledDiv = chakra(motion.div, {
    /**
     * Allow motion props and the children prop to be forwarded.
     * All other chakra props not matching the motion props will still be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const SwingBox = ({ children }) => {
    return (
        <StyledDiv
            animate={{
                rotate: [-10, 10],
            }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
            }}>
            {children}
        </StyledDiv>
    );
};

export default SwingBox;