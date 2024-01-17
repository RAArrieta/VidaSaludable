import { useContext } from "react"
import { DataContext } from "../../Component/DataContext/DataContext"

const Series = ({ id, estado }) => {

    const { serieCorrer, serieAbd, serieFlex, serieSent } = useContext(DataContext)

    const serieC = serieCorrer.find((el) => el.id === estado.toString());
    const serieA = serieAbd.find((el) => el.id === estado.toString());
    const serieF = serieFlex.find((el) => el.id === estado.toString());
    const serieS = serieSent.find((el) => el.id === estado.toString());

    return (
        <div>
            {
                (id === "Correr") && (
                    <>
                        <div>
                            {`Carrera: ${serieC.Carrera}`}
                        </div>
                        <div>
                            {`Marcha: ${serieC.Marcha}`}
                        </div>
                    </>
                )
            }
            {
                (id === "Abdominales") && (
                    <>
                        <div>
                            {`Serie 1: ${serieA.S1}`}
                        </div>
                        <div>
                            {`Serie 2: ${serieA.S2}`}
                        </div>
                        <div>
                            {`Serie 3: ${serieA.S3}`}
                        </div>
                        <div>
                            {`Serie 4: ${serieA.S4}`}
                        </div>
                        <div>
                            {`Serie 5: ${serieA.S5}`}
                        </div>
                    </>
                )
            }
            {
                (id === "Flexiones y Glute Bridge") && (
                    <>
                        <div>
                            {`Serie 1: ${serieF.S1}`}
                        </div>
                        <div>
                            {`Serie 2: ${serieF.S2}`}
                        </div>
                        <div>
                            {`Serie 3: ${serieF.S3}`}
                        </div>
                        <div>
                            {`Serie 4: ${serieF.S4}`}
                        </div>
                        <div>
                            {`Serie 5: ${serieF.S5}`}
                        </div>
                    </>
                )
            }
             {
                (id === "Sentadillas y Estocadas") && (
                    <>
                        <div>
                            {`Serie 1: ${serieS.S1}`}
                        </div>
                        <div>
                            {`Serie 2: ${serieS.S2}`}
                        </div>
                        <div>
                            {`Serie 3: ${serieS.S3}`}
                        </div>
                        <div>
                            {`Serie 4: ${serieS.S4}`}
                        </div>
                        <div>
                            {`Serie 5: ${serieS.S5}`}
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Series
