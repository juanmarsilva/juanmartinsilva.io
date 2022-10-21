import s from './Landing.module.css';
import 'animate.css';

const Landing = () => {

    return (
        // <div className={`${s.container} animate__animated animate__fadeIn`}>
        //     <div className={s.content_holder}>
        //         <div className={s.content} >
        //             <span><p> Hello </p></span>
        //             <span className={s.word_slider}>
        //                 <p>World!</p>
        //             </span>
        //         </div>
        //     </div>
        // </div>
        
        <div className={s.container}>
            <div className={s.box}>

                <div className={s.title}>
                    <span className={s.block}></span>
                    <h1>Juan Martín Silva<span></span></h1>
                </div>

                <div className={s.role}>
                    <div className={s.block}></div>
                    <p>Full Stack Developer</p>
                </div>

            </div>
        </div>
    )
}

export default Landing;