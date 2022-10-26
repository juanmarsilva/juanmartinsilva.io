import s from './About.module.css';
import image from '../../Images/Foto.jpg';
import { FaLinkedinIn, FaWhatsapp, FaGithub, FaInstagram} from 'react-icons/fa';
import cv_es from '../../CV/CV - Juan Martin Silva.pdf';
import cv_en from '../../CV/CV - Juan Martin Silva - en.pdf';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import Switch from '../Switch/Switch';
import 'animate.css';

const WHATSAPP = 'https://walink.co/1be6e5';
const INSTAGRAM = 'https://www.instagram.com/juanmarsilva/';
const GITHUB = 'https://github.com/juanmarsilva';
const LINKEDIN = 'https://www.linkedin.com/in/juanmartinsilva/';

const About = () => {

    const [ t, i18n ] = useTranslation("global");


    return (
        <div className={`${s.container} animate__animated animate__fadeIn animate__delay-1s`} id='about' >
            <Switch />
            <h1 className={s.name} >JUAN MARTIN</h1>
            <h1 className={s.lastName} >SILVA</h1>
            <h1 className={s.dev} >FULL STACK DEVELOPER</h1>
            <div className={s.imgContainer}>
                <img src={image} alt="img"  className={s.img} />
                <button>
                    <a href={i18n.language === 'en' ? cv_en : cv_es} target='_blank' rel="noopener noreferrer" download='CV-Juan Martin Silva'>
                        <AiOutlineCloudDownload color='white' size='3rem' />
                        {t<string>("About.CV")}
                    </a>
                </button>
                <a className={s.mouse_scroll} href="#home"> 
                    <span className={s.mouse} >
                        <span className={s.mouse_movement}> 
                        </span>
                    </span>
                <span className={`${s.mouse_message} fadeIn`}>scroll</span> 
            </a>
            </div>
            <div className={s.social} >
                <a href={LINKEDIN} target='_blank' rel='noopener noreferrer'><FaLinkedinIn className={s.icon} /></a>
                <a href={WHATSAPP} target='_blank' rel='noopener noreferrer'><FaWhatsapp className={s.icon} /></a>
                <a href={GITHUB} target='_blank' rel='noopener noreferrer'><FaGithub className={s.icon} /></a>
                <a href={INSTAGRAM} target='_blank' rel='noopener noreferrer'><FaInstagram className={s.icon} /></a>
            </div>
        </div>
    )
}

export default About;