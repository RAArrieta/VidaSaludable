const DetalleAlimentos = ({ semanaActual }) => {
  return (
    <div>
      {semanaActual && (
        <div className="container_tabla">
          <div className="tabla">{`Lunes: ${semanaActual.Lunes}`}</div>
          <div className="tabla">{`Martes: ${semanaActual.Martes}`}</div>
          <div className="tabla">{`Miercoles: ${semanaActual.Miercoles}`}</div>
          <div className="tabla">{`Jueves: ${semanaActual.Jueves}`}</div>
          <div className="tabla">{`Viernes: ${semanaActual.Viernes}`}</div>
          <div className="tabla">{`Sabado: ${semanaActual.Sabado}`}</div>
        </div>
      )}
    </div>
  );
};

export default DetalleAlimentos;
