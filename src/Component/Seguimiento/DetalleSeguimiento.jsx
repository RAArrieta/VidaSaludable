const DetalleSeguimiento = ({ seguimientoActual }) => {

    const obtenerFecha = (timestamp) => {
        const fecha = timestamp.toDate();
        const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
        return fecha.toLocaleDateString('es-ES', opcionesFecha);
    };

    return (
        <div>
            {seguimientoActual && (
                <div className="container_tabla">
                    <div className="tabla">{`Fecha: ${obtenerFecha(seguimientoActual.Fecha)}`}</div>
                    <div className="tabla">{`Peso: ${seguimientoActual.Peso}`}</div>
                    <div className="tabla">{`Pecho: ${seguimientoActual.Pecho}`}</div>
                    <div className="tabla">{`Cintura: ${seguimientoActual.Cintura}`}</div>
                    <div className="tabla">{`Cadera: ${seguimientoActual.Cadera}`}</div>
                </div>
            )}
        </div>
    )
}

export default DetalleSeguimiento