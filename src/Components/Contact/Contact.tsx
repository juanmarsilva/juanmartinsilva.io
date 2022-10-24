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

    console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);

    const [ input, setInput ] = useState<input>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const sendEmail = () => {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(form.current);
                swal({
                    title: "Mensaje enviado correctamente!",
                    text: "Muchas gracias por contactarte conmigo, pronto contestare tu mensaje",
                    icon: "success",
                })
            }, (error) => {
                swal({
                    title: "Algo salio mal",
                    text: "Algo salio mal, por favor contactame a traves de alguna de mis redes sociales. Muchas gracias!",
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
            <h1 className={s.title} data-aos="fade-down" >Contacto</h1>
            <form ref={form} >
                <div className={s.inputs} data-aos="fade-right"  >
                    <div className={s.containerInput} >
                        <BiUser className={s.icon} />
                        <input 
                            required 
                            type="text" 
                            onChange={e => handleChange(e)} 
                            name='name' 
                            placeholder='Ingrese su nombre..' 
                            value={input.name}
                        />
                    </div>
                    <div className={s.containerInput} >
                        <MdOutlineEmail className={s.icon} />
                        <input 
                            required 
                            type="text" 
                            placeholder='Ingrese su correo..' 
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
                            placeholder='Ingrese su numero de telefono..' 
                            onChange={e => handleChange(e)} 
                            name='phone' 
                            value={input.phone}
                        />
                    </div>
                    <div className={s.containerInput} >
                        <BiMessageEdit className={s.icon} />
                        <textarea
                            placeholder='Ingrese su mensaje..' 
                            onChange={(e) => handleChange(e)}  
                            name='message' 
                            value={input.message}
                            className={s.textarea}
                        />
                    </div>
                    <button className={s.sendBtn} onClick={(e) => handleClick(e)} >
                        <TbSend className={s.icon} />
                        ENVIAR
                    </button>
                </div>
                
                <img data-aos="fade-left" src={qr} alt="qr" className={s.qr} />
                
            </form>
        </div>
    );
};

export default Contact;
