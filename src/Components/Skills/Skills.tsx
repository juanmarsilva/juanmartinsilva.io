import s from './Skills.module.css';
import css from '../../Images/Iconos/css.png';
import express from '../../Images/Iconos/express.png';
import git from '../../Images/Iconos/git.png';
import github from '../../Images/Iconos/github.png';
import html from '../../Images/Iconos/html.png';
import js from '../../Images/Iconos/js.png';
import node from '../../Images/Iconos/node.png';
import psql from '../../Images/Iconos/psql.png';
import react from '../../Images/Iconos/react.png';
import redux from '../../Images/Iconos/redux.png';
import seq from '../../Images/Iconos/seq.png';
import ts from '../../Images/Iconos/ts.png';
import 'animate.css';

const Skills = () => {
    return (
        <div className={s.container} id='skills' >
            <div className={s.card} >
                <h1 className={s.title} data-aos="fade-down">Un poco sobre mi..</h1>
                <div className={s.skills}>
                    <div className={s.texts} data-aos="fade-right" >
                        <p>
                            Hola👋, mi nombre es Juan Martin. Desarrollador Web Full Stack. Apasionado por el desarrollo web y de aplicaciones moviles, creando interfaces visuales agradables y totalmente funcionales para el usuario.
                        </p>
                        <br />
                        <br />
                        <br />
                        <p>
                            Me apasiona aprender, creo que cada dia te da la oportunidad de aprender algo nuevo y esta es una de las razones por las que amo esta profesion.
                        </p>
                        <br />
                        <br />
                        <br />
                        <p>
                            Me considero una persona muy comprometida, con iniciativa y muy curiosa. Me gusta trabajar en equipo, creo mucho en el aprendizaje colaborativo. Me gusta resolver problemas de todo tipo, y lo que mas me gusta de esta profesión es que cada día es un nuevo desafío, cada día surge un nuevo "obstáculo" por así decirlo, que nos forma y nos hace crecer día a día como mejores personas, y también como mejores desarrolladores.
                        </p>
                    </div>
                    <div className={s.iconsSkills} data-aos="fade-left">
                        <div>
                            <img src={html} alt="html" />
                            <span>HTML</span>
                        </div>
                        <div>
                            <img src={css} alt="css" />
                            <span>CSS</span>
                        </div>
                        <div>
                            <img src={js} alt="js" />
                            <span>JavaScript</span>
                        </div>
                        <div>
                            <img src={ts} alt="ts" />
                            <span>TypeScript</span>
                        </div>
                        <div>
                            <img src={react} alt="react" />
                            <span>React</span>
                        </div>
                        <div>
                            <img src={redux} alt="redux" />
                            <span>Redux</span>
                        </div>
                        <div>
                            <img src={node} alt="node" />
                            <span>Node.js</span>
                        </div>
                        <div>
                            <img src={express} alt="exp" />
                            <span>Express.js</span>
                        </div>
                        <div>
                            <img src={psql} alt="psql" />
                            <span>PostgreSQL</span>
                        </div>
                        <div>
                            <img src={seq} alt="seq" />
                            <span>Sequelize</span>
                        </div>
                        <div>
                            <img src={github} alt="gh" />
                            <span>Github</span>
                        </div>
                        <div>
                            <img src={git} alt="git" />
                            <span>Git</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
