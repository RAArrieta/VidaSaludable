import { useContext } from "react"
import { DataContext } from "../DataContext/DataContext"

const Series = ({ id, estadoContador }) => {

    const { serieCorrer, serieAbd, serieFlex, serieSent } = useContext(DataContext)

    const serieC = serieCorrer.find((el) => el.id === estadoContador.toString().padStart(2, '0'));
    const serieA = serieAbd.find((el) => el.id === estadoContador.toString().padStart(2, '0'));
    const serieF = serieFlex.find((el) => el.id === estadoContador.toString().padStart(2, '0'));
    const serieS = serieSent.find((el) => el.id === estadoContador.toString().padStart(2, '0'));

    return (
        <div className="despliegueSerie">
            {
                (id === "Correr") && (
                    <>
                        {(estadoContador <= 10) && <div className="rondas">5 rondas</div>}
                        {(estadoContador > 10 && estadoContador <= 21) && <div className="rondas">4 rondas</div>}
                        {(estadoContador > 21 && estadoContador <= 31) && <div className="rondas">3 rondas</div>}
                        {(estadoContador > 31 && estadoContador <= 36) && <div className="rondas">2 rondas</div>}
                        {(estadoContador > 36) && <div className="rondas">1 rondas</div>}
                        <div className="tabla">
                            {`Carrera: ${serieC.Carrera}`}
                        </div>
                        <div className="tabla">
                            {`Marcha: ${serieC.Marcha}`}
                        </div>
                    </>
                )
            }
            {
                (id === "Abdominales") && (
                    <>
                        <div className="tabla">
                            {`Serie 1: ${serieA.S1}`}
                        </div>
                        <div className="tabla">
                            {`Serie 2: ${serieA.S2}`}
                        </div>
                        <div className="tabla">
                            {`Serie 3: ${serieA.S3}`}
                        </div>
                        <div className="tabla">
                            {`Serie 4: ${serieA.S4}`}
                        </div>
                        <div className="tabla">
                            {`Serie 5: ${serieA.S5}`}
                        </div>
                        {(estadoContador > 6) && <div className="tabla">{`Serie 6: ${serieA.S6}`}</div>}
                    </>
                )

            }
            {
                (id === "Flexiones y Glute Bridge") && (
                    <>
                        {(estadoContador > 0 && estadoContador < 40) &&
                            <div>
                                <div className="tabla">
                                    {`Serie 1: ${serieF.S1}`}
                                </div>
                                <div className="tabla">
                                    {`Serie 2: ${serieF.S2}`}
                                </div>
                                <div className="tabla">
                                    {`Serie 3: ${serieF.S3}`}
                                </div>
                                <div className="tabla">
                                    {`Serie 4: ${serieF.S4}`}
                                </div>
                                <div className="tabla">
                                    {`Serie 5: ${serieF.S5}`}
                                </div>
                            </div>
                        }
                        {(estadoContador > 19 && estadoContador < 40) && (
                            <div>
                                <div className="tabla">{`Serie 6: ${serieF.S6}`}</div>
                                <div className="tabla">{`Serie 7: ${serieF.S7}`}</div>
                                <div className="tabla">{`Serie 8: ${serieF.S8}`}</div>
                            </div>
                        )}
                        {(estadoContador > 31 && estadoContador < 40) && (<div className="tabla">{`Serie 9: ${serieF.S9}`}</div>)}
                        {(estadoContador === 40) &&
                            <div>
                                <div className="tabla">
                                    {`Lunes: ${serieF.Lunes}`}
                                </div>
                                <div className="tabla">
                                    {`Miercoles: ${serieF.Miercoles}`}
                                </div>
                                <div className="tabla">
                                    {`Viernes: ${serieF.Viernes}`}
                                </div>
                            </div>
                        }
                    </>
                )
            }
            {
                (id === "Sentadillas y Estocadas") && (
                    <>
                        <div className="tabla">
                            {`Serie 1: ${serieS.S1}`}
                        </div>
                        <div className="tabla">
                            {`Serie 2: ${serieS.S2}`}
                        </div>
                        <div className="tabla">
                            {`Serie 3: ${serieS.S3}`}
                        </div>
                        <div className="tabla">
                            {`Serie 4: ${serieS.S4}`}
                        </div>
                        <div className="tabla">
                            {`Serie 5: ${serieS.S5}`}
                        </div>
                        {(estadoContador > 60) && (
                            <div>
                                <div className="tabla">{`Serie 6: ${serieS.S6}`}</div>
                                <div className="tabla">{`Serie 7: ${serieS.S7}`}</div>
                            </div>
                        )}
                    </>
                )
            }
        </div>
    )
}

export default Series
