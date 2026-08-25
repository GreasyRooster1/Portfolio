import React from 'react';
import Markdown from "react-markdown";

function WriteUp(props) {
    return (
        <div className="page">
            <Markdown>
                {props.md}
            </Markdown>
        </div>
    );
}

export default WriteUp;