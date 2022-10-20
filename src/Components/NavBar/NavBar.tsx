import { Outlet } from 'react-router-dom';
import emoji from '../../Images/emoji.png';
import s from './NavBar.module.css';
import name from '../../Images/Juan Martin Silva.png';
import { useState } from 'react';
import 'animate.css';

// const LINKEDIN = 'https://www.linkedin.com/in/juanmartinsilva';
// const WHATSAPP = 'https://walink.co/2c0354';
// const GITHUB = 'https://github.com/juanmarsilva';

const NavBar = () => {

    const [ open, setOpen ] = useState<boolean>(false); 

    return (
        <div className={`${s.navBar} animate__animated animate__fadeInDown`} >
            <a className={s.iconNav} href='#home' >
                <img src={emoji} alt='emoji' className={s.emoji} ></img>

                <span className={s.name}><img src={name} alt="name" className={s.nameImg} /></span>
            </a>
        
            <div className={open ? `${s.menu} ${s.active}` : s.menu}>
                <a href='#skills'>SKILLS</a>
                <a href='#projects'>PROJECTS</a>
                <a href='#contact'>CONTACT</a>
            </div>
            
            <button className={open ? `${s.hamburger} ${s.open}` : s.hamburger} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <Outlet />
        </div> 
    ) 
}

export default NavBar;