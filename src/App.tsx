import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WavyContainer } from "react-wavy-transitions";
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import NavBar from './Components/NavBar/NavBar';
import s from './App.module.css';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';


const App = () => {

  return (
    <BrowserRouter>
      <WavyContainer />
      <div className={s.app}>
        <NavBar />
        <Routes>
          <Route path='/' index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='*' element={<>No match</>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;

