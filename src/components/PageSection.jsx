import React from 'react';
import {Box} from "@radix-ui/themes";

function PageSection(props) {
    return (
        <Box mt="60px" mx="64px" style={{position:"relative"}} {...props}>
            {props.children}
        </Box>
    );
}

export default PageSection;