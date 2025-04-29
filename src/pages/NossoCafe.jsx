import Banner from "../components/Banner"
import Processos from "../components/Processos"
import bannerNossoCafe from "../assets/banners/banner-nosso-cafe.png"
import imgColheita from "../assets/processos/colheita.png"
import imgTorragem from "../assets/processos/torragem.png"
import imgMoagem from "../assets/processos/moagem.png"
import imgClassificacao from "../assets/processos/classificacao.png"

const NossoCafe = () => {
  const DADOS = [
    {
      id: 1,
      titulo: "Colheita",
      texto: "A colheita acontece quando a maioria dos frutos já estão maduros. Tudo começa com uma seleção criteriosa das sementes de café. Elas são escolhidas, plantadas e mantidas em viveiros especiais, que darão origem às mudas.\n\n As plantinhas passam por diversas etapas de crescimento e quando alcançam de quatro a seis pares de folhas em seus galhos, são levadas para os solos que abrigarão o cafezal.",
      imagem: imgColheita,
    },
    {
      id: 2,
      titulo: "Torragem",
      texto: "Este procedimento é todo controlado por operadores à distância. Quando o café alcança a temperatura de 140°C, acontecem interações entre as proteínas, gorduras e açúcares presentes nele.\n\n Cada café possui uma curva de torra, então, a temperatura e o tempo podem variar. Secos, os grãos descansam por três horas e perdem gás carbônico. Em seguida, estão prontos para serem pesados e armazenados.",
      imagem: imgTorragem,
    },
    {
      id: 3,
      titulo: "Moagem",
      texto: "Ela é feita através da combinação de diversos tipos de café. Esta “mistura” varia de acordo com o perfil do consumidor, podendo ser um produto gourmet, que leva toques mais suaves; do tipo forte, que é mais amargo e menos ácido; ou até mesmo aromático, que conta com sabores adicionais.\n\n A mistura é preparada mecanicamente. Então, ela é encaminhada para um rolo mecânico, que quebrará os grãos, até chegar à granulometria ideal do produto. Depois da moagem, o café deve descansar por três horas para liberar mais gás carbônico.",
      imagem: imgMoagem,
    },
    {
      id: 4,
      titulo: "Classificação",
      texto: "Para que os grãos sejam armazenados, eles passam por “testes”, que os classificarão de acordo com a qualidade. Depois de moídos, os grãos são colocados em um aparelho que irá enviar raios infravermelhos ao pó de café.\n\n De acordo com a luminescência refletida, o produto é classificado em números, que apontam uma variedade mais fraca ou mais forte.",
      imagem: imgClassificacao,
    },
  ]

  return ( 
    <>
      <div className="flex flex-col justify-center items-center">
        <Banner 
          subTitulo="Mais que sabor, sentimentos!"
          bg={bannerNossoCafe}
        />
        {DADOS.map((processo) => (
          <Processos
            key={processo.id}
            titulo={processo.titulo}
            texto={processo.texto}
            imagem={processo.imagem}
            isPar={processo.id % 2 === 0}
          />
        ))}
      </div>
    </>
   );
}
 
export default NossoCafe;