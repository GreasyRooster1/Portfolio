import React, {useEffect} from 'react';


const titleData = "Dillon Wilson - Portfolio - "

function HtmlTitle(props) {
    const [title, setTitle] = React.useState(titleData);
    const [animationStep, setAnimationStep] = React.useState(0);

    useEffect(() => {
        let timeout = setTimeout(() => {
            setAnimationStep(1);
        },10_000)
        return () => clearTimeout(timeout)
    })

    useEffect(() => {
        setTitle(titleData.substring(animationStep)+titleData.substring(0,animationStep-1));
        if(animationStep === 0){
            return;
        }
        let timeout = setTimeout(() => {
            if(animationStep === titleData.length){
                setAnimationStep(0);
                clearInterval(timeout);
                return;
            }
            setAnimationStep(prev => prev+1);
        },300)
        return () => clearTimeout(timeout)
    },[animationStep])

    return (
        <title>
            {title}
        </title>
    );
}

export default HtmlTitle;