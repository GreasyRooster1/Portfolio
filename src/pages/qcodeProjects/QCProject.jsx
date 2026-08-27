import React from 'react';

function QcProject(props) {
    return (
        <iframe src={`https://codestaging.esporterz.com/sharedFrame.html?shareboardid=${props.id}`}>

        </iframe>
    );
}

export default QcProject;