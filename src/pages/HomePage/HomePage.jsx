import React from 'react'
import "./HomePage.css"


//Components 
import ClotheListContainer from '../../components/LastClothesListContainer/ClotheListContainer'
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
const HomePage = () => {
  return (
    <div className='HomePage'>
        <div className='firstSection'>
              <div className='box2'>
                <h1>Compra Gamer</h1>
                <p>Encuentra tu setup perfecto en Compra gamer, nuestra amplia gama de productos gaming. No importa si eres un jugador casual o un profesional, tenemos todo lo que necesitas para personalizar tu experiencia: desde teclados y ratones de precisión hasta tarjetas gráficas de última generación y los juegos más emocionantes del momento. ¡Arma tu estación de batalla ideal!</p> 
              </div>
        </div>
        <div className='secondSection'>
          <ClotheListContainer />
        </div>
    </div>
  )
}

export default HomePage;