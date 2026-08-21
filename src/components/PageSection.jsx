import React from 'react';
import {Box} from "@radix-ui/themes";

function PageSection(props) {
    return (
        <Box mt={{initial:"120px",sm:"60px"}} mx={{initial:"8px",sm:"48px",lg:"64px"}} style={{position:"relative"}} {...props}>
            {props.children}
        </Box>
    );
}

export default PageSection;