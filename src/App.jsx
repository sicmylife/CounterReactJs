
import './App.css';
import freecodecamplogo from './images/freecodecamp-logo.png'
import Boton from './componentes/Boton'
import Contador from './componentes/contador'

import { useState } from 'react'


function App() {

  const [numClics,setnumClics] = useState(0)

  

 const manejarClic = () => {
    setnumClics(numClics + 1);
 }

 const reiniciarContador = () => {
  setnumClics(0);
 }


  return (
    <div className="App">
    <div className='freecodecamp-logo-contenedor'>
      <img 
      className='freecodecamp-logo'
      src={freecodecamplogo}
       alt="logo de freecodecamp" />
    </div>

          <div className="contenedor-principal">
              <Contador numClics={numClics} />
            <Boton
             texto='Clic'
             esBotonDeClic={true}
             manejarClic={manejarClic} />
               <Boton
             texto='Reiniciar'
             esBotonDeClic={false}
             manejarClic={reiniciarContador} />
          </div>
      
    </div>
  );
}

export default App;
