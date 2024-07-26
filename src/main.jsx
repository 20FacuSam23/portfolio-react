import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Component/1Header/Header.jsx'
import Hero from './Component/2Hero/Hero.jsx'
import Diseño from './Component/3Diseño/Diseño.jsx'
import Edu_Exp from './Component/4Edu_Exp/Edu_Exp.jsx'
import Mis_Habilidades from './Component/5Mis_Habilidades/Mis_Habilidades.jsx'
import Ejemplos from './Component/6Ejemplos/Ejemplos.jsx'
import Formulario from './Component/7Formulario/Formulario.jsx'
import Footer from './Component/8Footer/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header/>
    <Hero/>
    <Diseño/>
    <Edu_Exp/>
    <Mis_Habilidades/>
    <Ejemplos/>
    <Formulario/>
    <Footer/>
  </React.StrictMode>,
)
