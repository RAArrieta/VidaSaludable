import React, { useState, useEffect } from 'react';
import Pitido from "./Pitido.mp3"

const Cronometro = () => {
  const [segundos, setSegundos] = useState(90); 
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let intervalo;

    if (activo) {
      intervalo = setInterval(() => {
        if (segundos > 0) {
          setSegundos(segundos - 1);
        } else {
          setActivo(false);
          clearInterval(intervalo);
        }

        if (segundos === 21) {
          sonarPitido();
        }
        if (segundos === 11) {
          sonarPitido();
        }
        if (segundos === 10) {
          sonarPitido();
        }
        if (segundos === 3) {
          sonarPitido();
        }
        if (segundos === 2) {
          sonarPitido();
        }
        if (segundos === 1) {
          sonarPitido();
        }
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [segundos, activo]);

  const handleIniciarCronometro = () => {
    setSegundos(90);
    setActivo(true);
  };

  const sonarPitido = () => {
    const audio = new Audio(Pitido); 
    audio.play();
  };

  return (
    <div className='container_cronometro'>
      <h1 className='cronometro'>{`${Math.floor(segundos / 60)}:${segundos % 60 < 10 ? '0' : ''}${segundos % 60}`}</h1>
      <button className='btn_container_opciones btnOpc' onClick={handleIniciarCronometro}>Descanso</button>
    </div>
  );
};

export default Cronometro;

