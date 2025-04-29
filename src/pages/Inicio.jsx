import Banner from "../components/Banner"
import BemVindo from "../components/BemVindo"
import bannerInicio from "../assets/banners/bannerInicio.png"
import bannerAutentico from "../assets/banners/bannerAutentico.png"

const Inicio = () => {
  return ( 
    <>
      <div className="flex flex-col justify-center items-center">
        <Banner 
          titulo="Um café quentinho" 
          subTitulo="aqui na Tiamate muda o dia."
          bg={bannerInicio}
        />
        <BemVindo />
        <Banner 
          titulo="Café Autêntico"
          subTitulo="Chegou nosso café! Direto da fazenda."
          bg={bannerAutentico}
          tamanhoTexto="450"
          textoAutentico={true}
          social={false}
        />
      </div>
    </>
   );
}
 
export default Inicio;