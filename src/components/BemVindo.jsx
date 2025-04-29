import bemVindoImg from '../assets/bemVindoImg.png'

const BemVindo = () => {
  return ( 
    <>
      <div className="flex justify-center items-center gap-[40px] bg-cinza">
        <img 
          className="w-1/2"
          src={bemVindoImg} 
          alt="Bem Vindo imagem" 
        />
        <div className="flex flex-col justify-center items-start w-1/2 pr-[135px] py-[135px]">
          <h5 className="font-[400] text-lg text-marron-preto mb-[10px] leading-[100%]">Para os amantes de café</h5>
          <h1 className="font-[700] text-[50px] text-marron-escuro mb-[30px] leading-[100%]">Bem-vindo a Tiamate Coffee</h1>
          <p className="font-[400] text-base text-marron-preto leading-[120%]">A Tiamate Coffee traduz de maneira clara e objetiva o verdadeiro sabor do café e o seu espírito inovador. Visamos fazer parte da vida das pessoas e diferentes culturas, isso é o que nos motiva a oferecer o café mais gostoso. Por isso, selecionamos as melhores plantações, os grãos, os blends e as pessoas que vão colocar a mão na massa para fazer esse delicioso café.<br/><br/> Pensamos em fazer os seus momentos mais felizes, seja no café da manhã ou em uma reunião. Individualmente ou entre amigos. À Tiamate Coffee investe em um conceito atual que transmite as pessoas uma sensação de bem estar. Enquanto nosso café aproxima as pessoas, nossos serviços de Wifi gratuito as mantém conectadas. Descubra como navegar na internet enquanto você saboreia um Tiamate.</p>
        </div>
      </div>
    </>
   );
}
 
export default BemVindo;