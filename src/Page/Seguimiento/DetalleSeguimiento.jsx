const DetalleSeguimiento = ({ seguimientoActual }) => {

    const obtenerFecha = (timestamp) => {
        const fecha = timestamp.toDate();
        const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
        return fecha.toLocaleDateString('es-ES', opcionesFecha);
    };

    return (
        <div>
            {seguimientoActual && (
                <div className="cuadroSeguimientoActual">
                    <div className="tablaSeguimiento">{`Fecha: ${obtenerFecha(seguimientoActual.Fecha)}`}</div>
                    <div className="tablaSeguimiento">{`Peso: ${seguimientoActual.Peso}`}</div>
                    <div className="tablaSeguimiento">{`Pecho: ${seguimientoActual.Pecho}`}</div>
                    <div className="tablaSeguimiento">{`Cintura: ${seguimientoActual.Cintura}`}</div>
                    <div className="tablaSeguimiento">{`Cadera: ${seguimientoActual.Cadera}`}</div>
                </div>
            )}
        </div>
    )
}

export default DetalleSeguimiento