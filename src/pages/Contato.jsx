import Banner from "../components/Banner"
import bannerContato from "../assets/banners/banner-contato.png"

const Contato = () => {
  return ( 
    <>
      <div className="flex flex-col justify-center items-center">
        <Banner 
          subTitulo="Depois do café eu me expresso."
          bg={bannerContato}
          tamanhoTexto="450"
        />
      </div>
    </>
   );
}
 
export default Contato;