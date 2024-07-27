import React from 'react';
import './Mis_Habilidades.css'



  const Mis_Habilidades = ({img, nombre, por}) => {

  return (
    
      <div className='habilidad'>
     <img src={img} alt=""/>
     <h6>{nombre}</h6>
     <p>{por}</p>
      </div>
    
  )
}

export default Mis_Habilidades