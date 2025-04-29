import Banner from "../components/Banner"
import bannerFranquia from "../assets/banners/banner-franquia.png"

const Franquia = () => {
  return ( 
    <>
      <div className="flex flex-col justify-center items-center">
        <Banner 
          subTitulo="Abra sua Franquia Tiamate Coffee."
          bg={bannerFranquia}
          posicaoTexto="direita"
        />
      </div>
    </>
   );
}
 
export default Franquia;