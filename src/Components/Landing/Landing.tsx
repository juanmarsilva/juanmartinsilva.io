import s from './Landing.module.css';
import 'animate.css';

const Landing = () => {

    return (
        <div className={`${s.container} animate__animated animate__fadeIn`}>
            <div className={s.content_holder}>
                <div className={s.content} >
                    <span><p> Hello </p></span>
                    <span className={s.word_slider}>
                        <p>World!</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Landing;