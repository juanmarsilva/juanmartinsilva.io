import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import s from './App.module.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className={s.app}>
        <Routes>
          <Route path='/' index element={<Home />}></Route>
          <Route path='*' element={<>No match</>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;

