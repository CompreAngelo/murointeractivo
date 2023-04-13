import './App.css';
import React from 'react';
import Registrarse from './componentes/registrarse';


function PantallaRegistrarse() {
  return (
    <div>
      <div className='text-center'>
                <br></br>
            <h1>Registrate!</h1>
            </div>

      <Registrarse/>
    </div>
  );
}

export default PantallaRegistrarse;
