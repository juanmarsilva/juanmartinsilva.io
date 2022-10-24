import s from './Projects.module.css';
import pokeapp from '../../Images/Projects/pokeapp.jpg';
import letsgo from '../../Images/Projects/letsgo.jpg';
import { HiLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const pokeapp_link = 'https://poke-app-sooty.vercel.app/';
const pokeapp_github = 'https://github.com/juanmarsilva/pokeApp';
const letsgo_link = 'https://pf-let.vercel.app/';
const letsgo_github = 'https://github.com/LetTeam22/lets-GO';


const Projects = () => {
    return (
        <div className={s.container} id='projects'>
            <h1 className={s.title} data-aos="fade-down">Mis Proyectos</h1>
            <div className={s.containerCards}>
                <div className={s.card} data-aos="fade-right">
                    <div className={s.info}>
                        <h1 className={s.projectName}>PokeApp</h1>
                        <div className={s.icons}>
                            <a href={pokeapp_link} target='_blank' rel='noreferrer'>
                                <HiLink className={s.icon} />
                            </a>
                            <a href={pokeapp_github} target='_blank' rel='noreferrer'>
                                <FaGithub className={s.icon} />
                            </a>
                        </div>
                        <img src={pokeapp} alt="pokeapp" className={s.imgProject} />
                    </div>
                </div>
                <div className={s.card} data-aos="fade-left">
                    <div className={s.info}>
                        <h1 className={s.projectName}>Let´s GO</h1>
                        <div className={s.icons}>
                            <a href={letsgo_link} target='_blank' rel='noreferrer'>
                                <HiLink className={s.icon} />
                            </a>
                            <a href={letsgo_github} target='_blank' rel='noreferrer'>
                                <FaGithub className={s.icon} />
                            </a>
                        </div>
                        <img src={letsgo} alt="letsgo" className={s.imgProject} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
