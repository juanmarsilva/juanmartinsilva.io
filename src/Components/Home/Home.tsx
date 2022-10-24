import { useEffect, useState } from 'react';
import s from './Home.module.css';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
// import Spotify from '../Spotify/Spotify';
import 'animate.css';
import Landing from '../Landing/Landing';
import AOS from 'aos';


const Home = () => {

    // const [ landing, setLanding ] = useState<boolean>(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLanding(false);
    //     }, 5000)
    // }, [])

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])

    // if(landing) return <Landing />

    return (
        <>
            <NavBar />
            <div className={s.container} id='home'>
                {/* <Spotify /> */}
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </>
    )
}

export default Home;
