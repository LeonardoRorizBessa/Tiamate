import Banner from "../components/Banner"
import BemVindo from "../components/BemVindo"
import Pilares from "../components/Pilares"
import Videos from "../components/Videos"
import AmbienteInsta from "../components/AmbienteInsta"
import bannerInicio from "../assets/banners/bannerInicio.png"
import bannerAutentico from "../assets/banners/bannerAutentico.png"
import missaoImg from "../assets/pilares/missao.png"
import visaoImg from "../assets/pilares/visao.png"
import valoresImg from "../assets/pilares/valores.png"
import bgVideo from "../assets/videosImgs/bgVideoInicio.png"

const Inicio = () => {
  return ( 
    <>
      <main className="flex flex-col justify-center items-center">
        <section className="relative flex justify-center items-center w-full h-[500px]">
          <Banner 
            temTitulo={true}
            titulo="Um café quentinho" 
            subTitulo="aqui na Tiamate muda o dia."
            bg={bannerInicio}
            textoWidth={"max-w-[550px]"}
          />
        </section>
        <section className="flex justify-center items-center gap-[40px] bg-cinza">
          <BemVindo />
        </section>
        <section className="flex flex-row justify-between bg-white w-full px-[135px] py-[150px]">
          <Pilares
            titulo="Missão"
            imagem={missaoImg}
            texto="Fornecer soluções, produtos e serviços de maneira clara e objetiva construindo relacionamentos duradouros com a comunidade, parceiros, colaboradores e sócios, através da criação de valores."
          />
          <Pilares
            titulo="Visão"
            imagem={visaoImg}
            texto="Ser referência em inovação e estimular exponencialmente a nossa gestão de maneira diversificada, próspera e justa. Com devoção e disciplina em todas as nossas operações de negócio."
          />
          <Pilares
            titulo="Valores"
            imagem={valoresImg}
            texto="Amor ao Trabalho - Organização - Disciplina - Inovação - Busca Contínua Pela Qualidade - Foco no Cliente"
          />
        </section>
        <section className="flex flex-col justify-center items-start w-full px-[135px] pb-[135px] gap-[80px] bg-white">
          <h1 className="max-w-[770px] text-[50px] font-[700] text-marron-escuro leading-[100%]">Coisas boas acontecem àqueles que gostam de café</h1>
          <Videos 
            bgVideo={bgVideo}
            videoHeight={"h-[600px]"}
          />
        </section>
        <section className="relative flex justify-center items-center w-full h-[500px]">
          <Banner 
            temTitulo={true}
            titulo="Café Autêntico"
            subTitulo="Chegou nosso café! Direto da fazenda."
            bg={bannerAutentico}
            textoWidth={"max-w-[450px]"}
            textoAutentico={true}
            social={false}
          />
        </section>
        <section className="flex flex-col justify-center items-center w-full px-[135px] py-[150px] gap-[60px]">
          <AmbienteInsta />
        </section>
      </main>
    </>
   );
}
 
export default Inicio;