import React from 'react';
import { isBrowser } from 'react-device-detect';
import {Outlet, useLocation } from 'react-router-dom';
import { WavyLink } from "react-wavy-transitions";
import { MdMoreVert } from 'react-icons/md';
import { FaLinkedinIn, FaWhatsapp, FaGithub } from 'react-icons/fa';
import emoji from '../../Images/emoji.png';
import s from './NavBar.module.css';

const LINKEDIN = 'https://www.linkedin.com/in/juanmartinsilva';
const WHATSAPP = 'https://walink.co/2c0354';
const GITHUB = 'https://github.com/juanmarsilva';


const NavBar = () => {

    const location = useLocation();

    if(isBrowser) return (
        <div className={s.navBar}>
            <img src={emoji} alt='emoji'></img>
            <div className={location.pathname === '/' ? `${s.container} ${s.active}` : s.container}>
                <WavyLink 
                    to='/' 
                    color="#14213d" 
                    direction='down'
                >
                    Home
                </WavyLink>
            </div>
            <MdMoreVert size='3rem' color='white' />
            <div className={location.pathname === '/projects' ? `${s.container} ${s.active}` : s.container}>
                <WavyLink direction='up' to="/projects" color="#14213d">Projects</WavyLink> 
            </div>
            <MdMoreVert size='3rem' color='white' />
            <div className={location.pathname === '/skills' ? `${s.container} ${s.active}` : s.container}>
                <WavyLink direction='up' to="/skills" color="#14213d">Skills</WavyLink>
            </div>
            <MdMoreVert size='3rem' color='white' />
            <div className={location.pathname === '/about' ? `${s.container} ${s.active}` : s.container}>
                <WavyLink direction='up' to="/about" color="#14213d">About</WavyLink>
            </div>
            <MdMoreVert size='3rem' color='white' />
            <div className={location.pathname === '/contact' ? `${s.container} ${s.active}` : s.container}>
                <WavyLink direction='up' to="/contact" color="#14213d">Contact</WavyLink>
            </div>

            <div className={s.icons} >
                <a 
                    href={ LINKEDIN } 
                    target="_blank" 
                    rel='noreferrer' 
                >
                    <FaLinkedinIn 
                        // color='white' 
                        size='3rem'
                        className={s.icon}
                    />
                </a>
                <a 
                    href={ WHATSAPP } 
                    target="_blank" 
                    rel='noreferrer' 
                >
                    <FaWhatsapp 
                        // color='white' 
                        size='3rem' 
                        className={s.icon}
                    />
                </a>
                <a 
                    href={ GITHUB } 
                    target="_blank" 
                    rel='noreferrer' 
                >
                    <FaGithub 
                        // color='white' 
                        size='3rem' 
                        className={s.icon}
                    />
                </a>
            </div>
            <Outlet />
        </div> 
    ) 
    else {
        return (
            <div className={s.navBarMobiles}>
                <div className={location.pathname === '/' ? `${s.container} ${s.active}` : s.container}>
                    <WavyLink to='/' color="#14213d" direction='down'>Home</WavyLink>
                </div>
                <MdMoreVert size='3rem' color='white'/>
                <div className={location.pathname === '/projects' ? `${s.container} ${s.active}` : s.container}>
                    <WavyLink direction='up' to="/projects" color="#14213d">Projects</WavyLink> 
                </div>
                <MdMoreVert size='3rem' color='white' />
                <div className={location.pathname === '/contact' ? `${s.container} ${s.active}` : s.container}>
                    <WavyLink direction='up' to="/contact" color="#14213d">Contact</WavyLink>
                </div>
                <Outlet />
            </div>     
        )
    }
    
}

export default NavBar;