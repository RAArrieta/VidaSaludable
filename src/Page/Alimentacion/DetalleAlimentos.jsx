const DetalleAlimentos = ({ semanaActual }) => {

    return (
        <div>
            {semanaActual && (
                <div className="cuadroSemanaAlimen">
                    <div className="tablaAlimen">{`Lunes: ${semanaActual.Lunes}`}</div>
                    <div className="tablaAlimen">{`Martes: ${semanaActual.Martes}`}</div>
                    <div className="tablaAlimen">{`Miercoles: ${semanaActual.Miercoles}`}</div>
                    <div className="tablaAlimen">{`Jueves: ${semanaActual.Jueves}`}</div>
                    <div className="tablaAlimen">{`Viernes: ${semanaActual.Viernes}`}</div>
                    <div className="tablaAlimen">{`Sabado: ${semanaActual.Sabado}`}</div>
                </div>
            )}
        </div>
    )
}

export default DetalleAlimentos
