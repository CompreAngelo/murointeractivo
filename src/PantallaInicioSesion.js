import './App.css';
import React from 'react';
import IniciarSesion from './componentes/iniciosesion';


function PantallaInicioSesion() {
  return (
    <div>
     <div className='text-center'>
                <br></br>
            <h1>Inicia Sesion!</h1>
            </div>
      <IniciarSesion/>
    </div>
  );
}

export default PantallaInicioSesion;
