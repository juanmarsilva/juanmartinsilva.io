import React from 'react';
import { isBrowser } from 'react-device-detect';
import { MdMoreVert } from 'react-icons/md';
import {Outlet, useLocation } from 'react-router-dom';
import { WavyLink } from "react-wavy-transitions";
import s from './NavBar.module.css';


const NavBar = () => {

    const location = useLocation();

    if(isBrowser) return (
        <div className={s.navBar}>
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