import React from 'react';
import QCProject from "@/pages/qcodeProjects/QCProject.jsx";
import {Flex, Grid, Text} from "@radix-ui/themes";

function QCodeProjects(props) {
    return (
        <div className="page">

            <Flex direction="column" justify="center" alignItems="center" my="6">
                <Text align="center" size="9" weight="bold">Featured Student Projects</Text>
                <Text align="center" size="3" my={"2"}>Collectively, the students have made thousands of projects. Below are some of my personal favorites</Text>
            </Flex>
            <Grid columns="3" rows="3" gap={"4"} my="8" >
                <QCProject id={8759542459024953}/>
                <QCProject id={3859492027280451}/>
                <QCProject id={2716883471660260}/>
                <QCProject id={1665528773351069}/>
                <QCProject id={422378628263191}/>
                <QCProject id={344818653046913}/>
                <QCProject id={6466099712027261}/>
                <QCProject id={422378628263191}/>
                <QCProject id={422378628263191}/>
            </Grid>
        </div>
    );
}

export default QCodeProjects;