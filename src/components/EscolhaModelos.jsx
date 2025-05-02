import capaTia from "../assets/capaTiamate/capaTiamate.png"
import capaTiaToGo from "../assets/capaTiamate/capaTiamateToGo.png"

const EscolhaModelos = () => {
  return ( 
    <>
      <div className="flex justify-between items-center w-full bg-cinza px-[135px] py-[150px]">
        <img 
          src={capaTia}
          alt="Capa Tiamate" 
        />
        <div className="flex flex-col justify-center items-center gap-[30px]">
          <p className="text-center font-[400] text-lg leading-[100%] text-marron-preto max-w-[255px]">A Tiamate oferece 2 modelos de franquia personalizados.</p>
          <h1 className="text-center font-[700] text-[50px] leading-[100%] text-marron-escuro max-w-[450px]">Escolha a Tiamate ideal para você</h1>
        </div>
        <img 
          src={capaTiaToGo}
          alt="Capa Tiamate To Go" 
        />
      </div>
    </>
   );
}
 
export default EscolhaModelos;