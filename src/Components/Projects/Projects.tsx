import s from './Projects.module.css';
import pokeapp from '../../Images/Projects/pokeapp.jpg';
import { HiLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const pokeapp_link = 'https://poke-app-sooty.vercel.app/';
const pokeapp_github = 'https://github.com/juanmarsilva/pokeApp';
const letsgo_link = 'https://pf-let.vercel.app/';
const letsgo_github = 'https://github.com/LetTeam22/lets-GO';

const pokeapp_video = 'https://res.cloudinary.com/letsgo12/video/upload/v1666823712/pokeapp_tl45vw.mp4';
const letsgo_video = 'https://res.cloudinary.com/letsgo12/video/upload/v1666805313/y2mate.com_-_lets_GO_1080p_n3ctwn.mp4';

const Projects = () => {

    const [t] = useTranslation("global");

    return (
        <div className={s.container} id='projects'>
            <h1 className={s.title} data-aos="fade-down">{t<string>("Projects.title")}</h1>
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
                        <video src={pokeapp_video} className={s.pokeapp} autoPlay muted controls></video>
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
                        <video src={letsgo_video} className={s.letsgo} autoPlay muted controls></video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
