import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../Component/DataContext/DataContext'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import data from '../../Component/Firebase/Config';
import Modificar from './Modificar';

const Almuerzos = ({ semanaActual, newSemanaOn, setNewSemanaOn }) => {

    const { alimentos, setSemanaAlimen } = useContext(DataContext)
    const [comidaSemanal, setComidaSemanal] = useState([]);
    const [modificarOn, setModificarOn] = useState(false)
    const [guarnicionOn, setGuarnicionOn] = useState(false)

    const idcomidaSemanal = (Number(semanaActual.id) + 1).toString().padStart(3, '0');

    useEffect(() => {
        const updateComidaSemanal = () => {

            const updateStateIfNotEmpty = (key, data) => {
                if (data) {
                    const keys = Object.keys(data);
                    const randomKey = keys[Math.floor(Math.random() * keys.length)];
                    setComidaSemanal((prevState) => ({ ...prevState, [key]: data[randomKey] }));
                }
            };

            updateStateIfNotEmpty('Lunes', alimentos[7]);
            updateStateIfNotEmpty('Martes', alimentos[6]);
            updateStateIfNotEmpty('Miercoles', alimentos[0]);
            updateStateIfNotEmpty('Jueves', alimentos[5]);
            updateStateIfNotEmpty('Viernes', alimentos[3]);
            updateStateIfNotEmpty('Sabado', alimentos[6]);
        };

        updateComidaSemanal();
    }, [alimentos]);

    useEffect(()=>{
        if (guarnicionOn && modificarOn) {
            setModificarOn(false);
            setGuarnicionOn(false);
        }
    },[guarnicionOn, modificarOn])

    const aceptarSemana = async () => {
        try {
            const semanaAlimenRef = collection(data, 'SemanaAlimen');
            const docRef = doc(semanaAlimenRef, idcomidaSemanal.toString());
            await setDoc(docRef, comidaSemanal);

            getDocs(semanaAlimenRef).then((resp) => {
                const semanaAlimenData = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setSemanaAlimen(semanaAlimenData)
            });

            setNewSemanaOn(!newSemanaOn)
            console.log('Documento añadido con ID personalizado: ', idcomidaSemanal);
        } catch (error) {
            console.error('Error al añadir documento: ', error);
        }
    };

    return (
        <div className="cuadroSemanaAlimen">
            <div className="tablaAlimen">{`Lunes: ${comidaSemanal.Lunes}`}</div>
            <div className="tablaAlimen">{`Martes: ${comidaSemanal.Martes}`}</div>
            <div className="tablaAlimen">{`Miercoles: ${comidaSemanal.Miercoles}`}</div>
            <div className="tablaAlimen">{`Jueves: ${comidaSemanal.Jueves}`}</div>
            <div className="tablaAlimen">{`Viernes: ${comidaSemanal.Viernes}`}</div>
            <div className="tablaAlimen">{`Sabado: ${comidaSemanal.Sabado}`}</div>
            <button className="btnOpcAlimento" onClick={()=>setGuarnicionOn(!guarnicionOn)}>Guarnición</button>
            <button className="btnOpcAlimento" onClick={()=>{setModificarOn(!modificarOn)}}>Modificar</button>
            <button className="btnOpcAlimento" onClick={aceptarSemana}>Aceptar</button>
            {modificarOn && <Modificar modificarOn={modificarOn} comidaSemanal={comidaSemanal} setComidaSemanal={setComidaSemanal} />}
            {guarnicionOn && <Modificar guarnicionOn={guarnicionOn} comidaSemanal={comidaSemanal} setComidaSemanal={setComidaSemanal} />}
        </div>
    )
}

export default Almuerzos


