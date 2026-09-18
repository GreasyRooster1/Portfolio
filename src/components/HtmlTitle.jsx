import React, {useEffect} from 'react';


function HtmlTitle(props) {
    const [title, setTitle] = React.useState(props.title);
    const [animationStep, setAnimationStep] = React.useState(0);

    useEffect(() => {
        if(props.noAnimate) return;
        let timeout = setTimeout(() => {
            setAnimationStep(1);
        },10_000)
        return () => clearTimeout(timeout)
    })

    useEffect(() => {
        if(props.noAnimate) return;
        setTitle(props.title.substring(animationStep)+props.title.substring(0,animationStep-1));
        if(animationStep === 0){
            return;
        }
        let timeout = setTimeout(() => {
            if(animationStep === props.title.length){
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