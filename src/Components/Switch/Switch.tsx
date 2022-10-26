import s from './Switch.module.css';
import arg from '../../Images/Lenguages/arg.png';
import eeuu from '../../Images/Lenguages/eeuu.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


const Switch = () => {

    const leng = localStorage.getItem('lenguage') || 'es';

    const [ lenguage, setLenguage ] = useState<string>(leng);
    const [ ,i18n ] = useTranslation('global');
    
    const handleClick = (e: any, leng:string) => {
        e.preventDefault();
        localStorage.setItem("lenguage", leng);
        setLenguage(leng);
        i18n.changeLanguage(leng);
    }
    
    return (
        <div className={s.container}>
            <button className={s.btn} onClick={(e) => handleClick(e, 'es')} >
                <img src={arg} alt='arg' className={s.icon} ></img>
            </button>
            <button className={s.btn} onClick={(e) => handleClick(e, 'en')} >
                <img src={eeuu} alt='eeuu' className={s.icon} ></img>
            </button>
            <div className={lenguage === 'es' ? `${s.indicator} ${s.arg}` : `${s.indicator} ${s.eeuu}`}></div>
        </div>
    )
}

export default Switch;