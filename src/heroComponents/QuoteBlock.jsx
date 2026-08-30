import {Flex} from "@radix-ui/themes";
import CarouselPrimitive from "@components/CarouselPrimitive.jsx";
import HeroQuote from "@/pages/index/HeroQuote.jsx";
import styles from "@/pages/index/FeaturedHero.module.css";
import karmaImg from '@assets/karma2.png'
import esporterzImg from '@assets/esporterz3.png'

export function QuoteBlock(props) {
    return (
        <Flex className={styles.box} justify={"center"} align={"center"} direction={"column"} style={{fontSize:"14pt",overflow:"clip",position:"relative",zIndex:"1"}} {...props}>
            <CarouselPrimitive autoTime={5000}>
                <HeroQuote author={(<>
                    Sally Newson, Founder, <a href={"https://karma-club.org/"}>Karma Club & The Kove</a>
                </>)} src={karmaImg}>
                    Dillon was one of the most impressive student instructors I've ever seen. His ability to explain complex coding concepts with patience, clarity, and enthusiasm kept every student fully engaged from start to finish. Quite honestly, he taught with more skill and confidence than many professional educators. He has a remarkable gift for teaching and inspiring young people, and we were incredibly fortunate to have him lead our Coding Camp.
                </HeroQuote>
                <HeroQuote author={(<>
                    Nadia Berkowitz, Founder & Owner, <a href={"https://esporterz.com"}>Esporterz</a>
                </>)} src={esporterzImg} imgClass={styles.esporterz}>
                    Dillon was one of the most impressive student instructors I've ever seen. His ability to explain complex coding concepts with patience, clarity, and enthusiasm kept every student fully engaged from start to finish. Quite honestly, he taught with more skill and confidence than many professional educators. He has a remarkable gift for teaching and inspiring young people, and we were incredibly fortunate to have him lead our Coding Camp.
                </HeroQuote>
            </CarouselPrimitive>
        </Flex>
    )
}