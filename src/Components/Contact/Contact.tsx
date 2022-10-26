import s from './Contact.module.css';
import { useRef, useState } from 'react';
import qr from '../../Images/qr-code.png';
import 'animate.css';
import { MdOutlineEmail } from 'react-icons/md';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { BiMessageEdit, BiUser } from 'react-icons/bi';
import { TbSend } from 'react-icons/tb';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

interface input {
    name: string,
    email: string,
    phone: string,
    message: string,
}

const SERVICE_ID = 'service_contact';
const TEMPLATE_ID = 'template_contact';
const PUBLIC_KEY = 'cbH31wOrf_dEqnPIh';

const Contact = () => {

    const form = useRef<any>();
    const [ t ] = useTranslation("global");

    const [ input, setInput ] = useState<input>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const sendEmail = () => {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                swal({
                    title: t<string>("Contact.swal.success.title"),
                    text: t<string>("Contact.swal.success.text"),
                    icon: "success",
                })
            }, (error) => {
                swal({
                    title: t<string>("Contact.swal.error.title"),
                    text: t<string>("Contact.swal.error.text"),
                    icon: "error",
                })
            })
    };

    const handleChange = (e: any) => {
        e.preventDefault();
        setInput({
            ...input, 
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = (e: any) => {
        e.preventDefault();
        sendEmail();
        setInput({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    }

    return (
        <div className={s.container} id='contact'>
            <h1 className={s.title} data-aos="fade-down" >{t<string>("Contact.title")}</h1>
            <form ref={form} >
                <div className={s.inputs} data-aos="fade-right"  >
                    <div className={s.containerInput} >
                        <BiUser className={s.icon} />
                        <input 
                            required 
                            type="text" 
                            onChange={e => handleChange(e)} 
                            name='name' 
                            placeholder={t<string>("Contact.inputs.name")} 
                            value={input.name}
                        />
                    </div>
                    <div className={s.containerInput} >
                        <MdOutlineEmail className={s.icon} />
                        <input 
                            required 
                            type="text" 
                            placeholder={t<string>("Contact.inputs.email")}
                            onChange={e => handleChange(e)} 
                            name='email' 
                            value={input.email} 
                        />
                    </div>
                    <div className={s.containerInput} >
                        <IoPhonePortraitOutline className={s.icon} />
                        <input 
                            required 
                            type="number" 
                            placeholder={t<string>("Contact.inputs.phone")}
                            onChange={e => handleChange(e)} 
                            name='phone' 
                            value={input.phone}
                        />
                    </div>
                    <div className={s.containerInput} >
                        <BiMessageEdit className={s.icon} />
                        <textarea
                            placeholder={t<string>("Contact.inputs.message")}
                            onChange={(e) => handleChange(e)}  
                            name='message' 
                            value={input.message}
                            className={s.textarea}
                        />
                    </div>
                    <button className={s.sendBtn} onClick={(e) => handleClick(e)} >
                        <TbSend className={s.icon} />
                        {t<string>("Contact.inputs.btn")}
                    </button>
                </div>
                
                <div className={s.containerQR} data-aos="fade-left">
                    <span>{t<string>("Contact.inputs.qr")}</span>
                    <img src={qr} alt="qr" className={s.qr} />
                </div>

                <div></div>
            </form>
        </div>
    );
};

export default Contact;
