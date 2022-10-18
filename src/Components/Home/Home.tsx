import s from './Home.module.css';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
// import Spotify from '../Spotify/Spotify';


const Home = () => {
    return (
        <>
            <NavBar />
            <div className={s.container} id='home'>
                {/* <Spotify /> */}
                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </>
    )
}

export default Home;
