import { useState } from 'react'

import logo from '/logo.png'
import './App.css'
import Header from './Component/1Header/Header'
import Mis_Habilidades from './Component/5Mis_Habilidades/Mis_Habilidades'

function App() {
const user ={
    name:"Facu",
    lastname:"Samela",
    img:"logo.png"
  }

 let habilidades = [
{"img":"angular.png",
  "nombre":"Angular",
  "por":18
},
{"img":"css3.png",
  "nombre":"CSS3",
  "por":15
},
{"img":"cSharp.png",
  "nombre":"cSharp",
  "por":20
},
{"img":"estreno-profecional.png",
  "nombre":"Adobe Premiere",
  "por":20
},
{"img":"github.png",
  "nombre":"HitHub",
  "por":15
},
{"img":"html-5.png",
  "nombre":"html-5",
  "por":15
},
{"img":"css3.png",
  "nombre":"CSS3",
  "por":15
},
{"img":"css3.png",
  "nombre":"CSS3",
  "por":15
},
{"img":"css3.png",
  "nombre":"CSS3",
  "por":15
},{"img":"css3.png",
  "nombre":"CSS3",
  "por":15
},
{"img":"css3.png",
  "nombre":"CSS3",
  "por":15
}

  ]
  return (   
    
      <div className='container_habilidades'>  
         <Header user={user}/>     
         {habilidades.map(habilidad=><Mis_Habilidades img={habilidad.img} nombre={habilidad.nombre} por={habilidad.por}/>)}
      </div>   
  )
}

export default App
