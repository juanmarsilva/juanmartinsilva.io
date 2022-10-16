import s from './Home.module.css';
import imagen from '../../Images/Foto.jpg';

const Home = () => {
    return (
        <div className={s.container}>
            <div className={s.principalPage}>
                <img src={imagen} alt='imagen' className={s.img} />
                <h1>{`< Juan Martin Silva />`}</h1>
            </div>
            <div className={s.principalPage}>
                <img src={imagen} alt='imagen' className={s.img} />
                <h1>{`< Juan Martin Silva />`}</h1>
            </div>
        </div>
    )
}

export default Home;
