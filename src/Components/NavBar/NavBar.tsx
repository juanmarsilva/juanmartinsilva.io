import { Outlet } from 'react-router-dom';
import emoji from '../../Images/emoji.png';
import s from './NavBar.module.css';
import { useState } from 'react';
import 'animate.css';

const NavBar = () => {

    const [ open, setOpen ] = useState<boolean>(false); 

    return (
        <div className={`${s.navBar} animate__animated animate__fadeInDown`} >
            <a className={s.iconNav} href='#home' >
                <img src={emoji} alt='emoji' className={s.emoji} ></img>
            </a>
        
            <div className={open ? `${s.menu} ${s.active}` : s.menu}>
                <a href='#skills'>SKILLS</a>
                <a href='#projects'>PROYECTOS</a>
                <a href='#contact'>CONTACTO</a>
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