import Banner from "../components/Banner"
import Videos from "../components/Videos"
import EscolhaModelos from "../components/EscolhaModelos"
import ModelosTiamate from "../components/ModelosTiamate"
import BannerInfos from "../components/BannerInfos"
import Depoimento from "../components/Depoimento"
import bannerFranquia from "../assets/banners/bannerFranquia.png"
import bgVideo from "../assets/videosImgs/bgVideoFranquia.png"
import tiamateG from "../assets/modelosTiamateImgs/tiamate/logoTiamate.png"
import tiamateP1 from "../assets/modelosTiamateImgs/tiamate/tiamateP1.png"
import tiamateP2 from "../assets/modelosTiamateImgs/tiamate/tiamateP2.png"
import tiamateP3 from "../assets/modelosTiamateImgs/tiamate/tiamateP3.png"
import tiamateP4 from "../assets/modelosTiamateImgs/tiamate/tiamateP4.png"
import tiamateP5 from "../assets/modelosTiamateImgs/tiamate/tiamateP5.png"
import toGoG from "../assets/modelosTiamateImgs/toGo/logoToGo.png"
import toGoP1 from "../assets/modelosTiamateImgs/toGo/toGoP1.png"
import toGoP2 from "../assets/modelosTiamateImgs/toGo/toGoP2.png"
import toGoP3 from "../assets/modelosTiamateImgs/toGo/toGoP3.png"
import toGoP4 from "../assets/modelosTiamateImgs/toGo/toGoP4.png"
import toGoP5 from "../assets/modelosTiamateImgs/toGo/toGoP5.png"
import bannerInfos01 from "../assets/bannersInfos/bannerInfos01.png"
import bannerInfos02 from "../assets/bannersInfos/bannerInfos02.png"


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
        <section className="flex flex-col justify-center items-center w-full p-[135px] gap-[200px]">
          <ModelosTiamate 
            titulo={"Tiamate Coffee"}
            espaco={"30 a 45m²"}
            faturamento={"R$ 40 MIL"}
            royaltyes={"5% do faturamento"}
            marketing={"2% do faturamento"}
            equilibrio={"2 a 3 meses"}
            retorno={"18 a 24 meses"}
            lucroMedio={"25%"}
            investimentoTotal={"R$ 130 MIL"}
            imagemG={tiamateG}
            imagemP1={tiamateP1}
            imagemP2={tiamateP2}
            imagemP3={tiamateP3}
            imagemP4={tiamateP4}
            imagemP5={tiamateP5}
          />
          <ModelosTiamate 
            titulo={"Tiamate To Go"}
            espaco={"8 a 12m²"}
            faturamento={"R$ 25 MIL"}
            royaltyes={"5% do faturamento"}
            marketing={"2% do faturamento"}
            equilibrio={"2 a 3 meses"}
            retorno={"18 a 24 meses"}
            lucroMedio={"25%"}
            investimentoTotal={"R$ 100 MIL"}
            imagemG={toGoG}
            imagemP1={toGoP1}
            imagemP2={toGoP2}
            imagemP3={toGoP3}
            imagemP4={toGoP4}
            imagemP5={toGoP5}
          />
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
        <section className="flex flex-col justify-center items-center text-center w-full py-[150px]">
          <Depoimento />
        </section>
      </main>
    </>
   );
}
 
export default Franquia;