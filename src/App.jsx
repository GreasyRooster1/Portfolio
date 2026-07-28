// Portfolio homepage — option 7a "Full 2a layout in 3c ice blue on cool slate".
// Imported from the Claude Design doc "Portfolio Homepage".

import Nav from './components/Nav'
import Hero from './components/Hero'
import FeaturedHero from './FeaturedHero'
import SelectedWork from './SelectedWork'
import ProjectIndex from './ProjectIndex'
import About from './components/About'
import Footer from './components/Footer'
import styles from './App.module.css'

export default function App() {
    return (
        <div className={styles.page}>
            <Nav />
            <Hero/>
            <FeaturedHero />
            <SelectedWork />
            <ProjectIndex />
            <About />
            <Footer />
        </div>
    )
}
