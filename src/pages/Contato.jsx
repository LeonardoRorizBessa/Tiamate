import Banner from "../components/Banner"
import bannerContato from "../assets/banners/bannerContato.png"

const Contato = () => {
  return ( 
    <>
      <div className="flex flex-col justify-center items-center">
        <Banner 
          subTitulo="Depois do café eu me expresso."
          bg={bannerContato}
          textoWidth={"max-w-[450px]"}
        />
      </div>
    </>
   );
}
 
export default Contato;