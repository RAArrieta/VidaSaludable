import { useForm } from "react-hook-form";

const FormNewSeguimiento = () => {

  const {register, handleSubmit} = useForm ();

  const enviar = (data)=>{
    console.log(data)
  }

  return (
    <form className="formNewSeguimiento" onSubmit={handleSubmit (enviar)}>


      <input type="text" placeholder="Ingrese su peso..." {...register("Peso")} required />
      <input type="text" placeholder="Medida de pecho..." {...register("Pecho")} required />
      <input type="text" placeholder="Medida de cintura..." {...register("Cintura")} required />
      <input type="text" placeholder="Medida de cadera..." {...register("Cadera")} required />

      <button type="submit">Ingresar</button>

    </form>

  )
}

export default FormNewSeguimiento
