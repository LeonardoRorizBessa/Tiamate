import Banner from "../components/Banner"
import Videos from "../components/Videos"
import BannerInfos from "../components/BannerInfos"
import bgVideo from "../assets/videosImgs/bgVideoFranquia.png"
import bannerFranquia from "../assets/banners/bannerFranquia.png"
import bannerInfos01 from "../assets/bannersInfos/bannerInfos01.png"
import bannerInfos02 from "../assets/bannersInfos/bannerInfos02.png"
import EscolhaModelos from "../components/escolhaModelos"

const Franquia = () => {
  return ( 
    <>
      <div className="flex flex-col justify-center items-center">
        <Banner 
          subTitulo="Abra sua Franquia Tiamate Coffee."
          bg={bannerFranquia}
          textoWidth={"max-w-[550px]"}
          textoDireita={true}
        />
        <Videos 
          bgVideo={bgVideo}
          videoHeight={"h-[500px]"}
        />
        <EscolhaModelos />
        <BannerInfos 
          imagem={bannerInfos01} 
          texto="Quer lucrar com sua própria Tiamate? Seja um franqueado!"
        />
        <BannerInfos 
          imagem={bannerInfos02} 
          texto="Se você procura um negócio de sucesso, venha para Tiamte Coffee!"
        />
      </div>
    </>
   );
}
 
export default Franquia;