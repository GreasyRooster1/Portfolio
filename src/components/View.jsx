import {useIsMobile} from "@/hooks/isMobile.js";

export function MobileView(props){
    let mobile = useIsMobile()
    return (mobile && props.children)
}

export function DesktopView(props){
    let mobile = useIsMobile()
    return (!mobile && props.children)
}