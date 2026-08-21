import styles from './Hero.module.css'
import {Box} from "@radix-ui/themes";
import {DesktopView, MobileView} from "@components/View.jsx";

const SECONDARY_ACTIONS = ['github', 'email']

export default function Hero() {
  return (
    <>
    <DesktopView>
      <header className={styles.hero}>
        <Main/>
        <Box>
          <Stats/>
          <About/>
          <Actions/>
          {/*<div className={styles.availability}>available · [City] · replies within a day</div>*/}
        </Box>
      </header>
    </DesktopView>

    <MobileView>
      <Box mt="8" mx="8px">
        <Main/>
        <About/>
        <Actions/>
      </Box>
    </MobileView>
    </>
  )
}

function Main(){
  return (
      <Box>
        <div className={styles.eyebrow}>
          <DesktopView>full stack developer · web · systems programming · graphics</DesktopView>
          <MobileView>full stack · web · systems · graphics</MobileView>
        </div>
        <h1 className={styles.title}>
          Interfaces and the <span className={styles.accent}>machinery</span> underneath them.
        </h1>
      </Box>
  )
}

function Stats(){
  return (
      <div className={styles.stats}>
        <div>
          <div className={`${styles.statValue} ${styles.statValueAccent}`}>
            11 Years
          </div>
          <div className={styles.statLabel}>Programming Experience</div>
        </div>
        <div>
          <div className={`${styles.statValue}`}>
            Hundreds
          </div>
          <div className={styles.statLabel}>Of Projects</div>
        </div>
      </div>
  )
}

function About(){
  return (
      <p className={styles.lede}>
        Eleven years taking blank repositories to full projects. I've always loved experimenting and testing the limits of what I can create, developing hundreds of apps, games and experiments over the years.
      </p>
  )
}

function Actions(){
  return (
      <div className={styles.actions}>
        {/*<a href="#7a" className={`${styles.btn} ${styles.btnPrimary}`}>*/}
        {/*  résumé.pdf*/}
        {/*</a>*/}
        <a href="https://github.com/GreasyRooster1/" className={`${styles.btn} ${styles.btnPrimary}`}>
          GitHub
        </a>
        <a href="mailto:dillonjwilson1@gmail.com" className={`${styles.btn}  ${styles.btnGhost}`}>
          Email
        </a>
      </div>
  )
}