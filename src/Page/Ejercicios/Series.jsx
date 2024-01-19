import { useContext } from "react"
import { DataContext } from "../../Component/DataContext/DataContext"

const Series = ({ id, estadoContador }) => {

    const { serieCorrer, serieAbd, serieFlex, serieSent } = useContext(DataContext)

    const serieC = serieCorrer.find((el) => el.id === estadoContador.toString());
    const serieA = serieAbd.find((el) => el.id === estadoContador.toString().padStart(2, '0'));
    const serieF = serieFlex.find((el) => el.id === estadoContador.toString().padStart(2, '0'));
    const serieS = serieSent.find((el) => el.id === estadoContador.toString());

    return (
        <div className="despliegueSerie">
            {
                (id === "Correr") && (
                    <>
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
                    </>
                )
            }
            {
                (id === "Flexiones y Glute Bridge") && (
                    <>
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
                    </>
                )
            }
        </div>
    )
}

export default Series
