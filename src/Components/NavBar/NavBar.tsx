import { Outlet } from 'react-router-dom';
import emoji from '../../Images/emoji.png';
import s from './NavBar.module.css';
import { useState } from 'react';
import 'animate.css';
import { useTranslation } from 'react-i18next';

const NavBar = () => {

    const [ open, setOpen ] = useState<boolean>(false);
    const [t] = useTranslation('global'); 

    return (
        <div className={`${s.navBar} animate__animated animate__fadeInDown`} >
            <a className={s.iconNav} href='#home' >
                <img src={emoji} alt='emoji' className={s.emoji} ></img>
            </a>
        
            <div className={open ? `${s.menu} ${s.active}` : s.menu}>
                {
                    open
                    ? <>
                        <a href='#skills'>SKILLS</a>
                        <a href='#projects'>{t<string>("NavBar.Projects")}</a>
                        <a href='#contact'>{t<string>("NavBar.Contact")}</a>
                    </>
                    : <></>
                }
                
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