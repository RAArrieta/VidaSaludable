const OpcionsSelect = ({
  semanaAlimen,
  semanaActual,
  setSemanaActual,
  newSemanaOn,
  setNewSemanaOn,
}) => {
  // creo el index con el id de la tabla que se esta mostrando en pantalla
  const index = semanaActual
    ? semanaAlimen.findIndex((el) => el.id === semanaActual.id)
    : -1;

  // puedo renderizar el anterior o el siguiente
  const backSemAlimentos = () => {
    if (semanaAlimen.length > 0 && index > 0) {
      setSemanaActual(semanaAlimen[index - 1]);
    }
  };
  const upSemAlimentos = () => {
    if (semanaAlimen.length > 0 && index < semanaAlimen.length - 1) {
      setSemanaActual(semanaAlimen[index + 1]);
    }
  };

  return (
    <div className="container_opciones">
      <button className="btn_container_opciones" onClick={backSemAlimentos}>
        Back
      </button>
      <button className="btn_container_opciones" onClick={upSemAlimentos}>
        Up
      </button>
      <button
        className="btn_container_opciones btnOpc"
        onClick={() => setNewSemanaOn(!newSemanaOn)}
      >
        Nueva Semana
      </button>
    </div>
  );
};

export default OpcionsSelect;
