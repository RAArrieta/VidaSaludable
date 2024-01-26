const OpcionsSelect = ({semanaAlimen, semanaActual, setSemanaActual, newSemanaOn, setNewSemanaOn}) => {

    const index = setSemanaActual ? semanaAlimen.findIndex((el) => el.id === semanaActual.id) : -1;

    const backSemAlimentos =()=>{
        if (semanaAlimen.length > 0 && index > 0) {
            setSemanaActual(semanaAlimen[index - 1]);
        }
    }
    const upSemAlimentos =()=>{
        if (semanaAlimen.length > 0 && index < semanaAlimen.length - 1) {
            setSemanaActual(semanaAlimen[index + 1]);
        }
    }

  return (
    <div className='dataAlimentacion'>
      <button className="btnOpcAlimento" onClick={backSemAlimentos}>Back</button>
      <button className="btnOpcAlimento" onClick={upSemAlimentos}>Up</button>
      <button className="btnOpcAlimento btnOpc" onClick={()=>setNewSemanaOn(!newSemanaOn)}>Nueva Semana</button>
    </div>
  )
}

export default OpcionsSelect
