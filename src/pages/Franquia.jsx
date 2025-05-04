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
      <main className="flex flex-col justify-center items-center">
        <section className="relative flex justify-center items-center w-full h-[500px]">
          <Banner 
            subTitulo="Abra sua Franquia Tiamate Coffee."
            bg={bannerFranquia}
            textoWidth={"max-w-[550px]"}
            textoDireita={true}
          />
        </section>
        <>
          <Videos 
            bgVideo={bgVideo}
            videoHeight={"h-[500px]"}
          />
        </>
        <section className="flex justify-between items-center w-full bg-cinza px-[135px] py-[150px]">
          <EscolhaModelos />
        </section>
        <section className="relative flex justify-center items-center w-full h-[500px]">
          <BannerInfos 
            imagem={bannerInfos01} 
            texto="Quer lucrar com sua própria Tiamate? Seja um franqueado!"
          />
        </section>
        <section className="relative flex justify-center items-center w-full h-[500px]">
          <BannerInfos 
            imagem={bannerInfos02} 
            texto="Se você procura um negócio de sucesso, venha para Tiamte Coffee!"
          />
        </section>
      </main>
    </>
   );
}
 
export default Franquia;