import FormFranqueado from "../components/FormFranqueado";

const Inicio = () => {
  return ( 
    <>
      <div className="flex justify-center items-center h-screen bg-black">
        <h1 className="font-bold text-4xl text-white">Pagina Inicio</h1>
        <div className="bg-white p-12">
          <FormFranqueado />
        </div>
      </div>
    </>
   );
}
 
export default Inicio;