import checkIcon from "../assets/modelosTiamateImgs/checkIcon.png"

const ModelosTiamate = ({ 
  titulo,
  espaco, 
  faturamento,
  royaltyes,
  marketing,
  equilibrio,
  retorno,
  lucroMedio,
  investimentoTotal,
  imagemG,
  imagemP1,
  imagemP2,
  imagemP3,
  imagemP4,
  imagemP5,
}) => {
  return ( 
    <>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col">
            <p className="font-[400] text-lg text-marron-preto leading-[100%]">Cafeteria</p>
            <h1 className="font-[700] text-[50px] text-marron-escuro leading-[100%]">{titulo}</h1>
          </div>
          <ul className=" flex flex-col justify-center items-start gap-[25px]">
            <li className="flex justify-center items-center gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <div className="flex justify-center items-center text-lg text-marron-preto leading-[100%] gap-1">
                <p className="font-[700]">Espaço:</p>
                <p className="font-[400]">{espaco}</p>
              </div>
            </li>
            <li className="flex justify-center items-center gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <div className="flex justify-center items-center text-lg text-marron-preto leading-[100%] gap-1">
                <p className="font-[700]">Faturamento Médio:</p>
                <p className="font-[400]">{faturamento}</p>
              </div>
            </li>
            <li className="flex justify-center items-center gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <div className="flex justify-center items-center text-lg text-marron-preto leading-[100%] gap-1">
                <p className="font-[700]">Royaltyes:</p>
                <p className="font-[400]">{royaltyes}</p>
              </div>
            </li>
            <li className="flex justify-center items-center gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <div className="flex justify-center items-center text-lg text-marron-preto leading-[100%] gap-1">
                <p className="font-[700]">Taxa de Marketing:</p>
                <p className="font-[400]">{marketing}</p>
              </div>
            </li>
            <li className="flex justify-center items-center gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <div className="flex justify-center items-center text-lg text-marron-preto leading-[100%] gap-1">
                <p className="font-[700]">Ponto de Equilíbrio:</p>
                <p className="font-[400]">{equilibrio}</p>
              </div>
            </li>
            <li className="flex justify-center items-center gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <div className="flex justify-center items-center text-lg text-marron-preto leading-[100%] gap-1">
                <p className="font-[700]">Prazo de Retorno:</p>
                <p className="font-[400]">{retorno}</p>
              </div>
            </li>
            <li className="flex justify-center items-center gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <div className="flex justify-center items-center text-lg text-marron-preto leading-[100%] gap-1">
                <p className="font-[700]">Lucro Médio:</p>
                <p className="font-[400]">{lucroMedio}</p>
              </div>
            </li>
            <li className="flex justify-center items-center gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <div className="flex justify-center items-center text-lg text-marron-preto leading-[100%] gap-1">
                <p className="font-[700]">Investimento total estimado:</p>
                <p className="font-[400]">{investimentoTotal}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center gap-[15px]">
          <img src={imagemG} alt="Imagem Tiamate Coffee" />
          <div className="flex flex-col justify-center items-center gap-[15px]">
            <img src={imagemP1} alt="Imagem Tiamate Coffee" />
            <img src={imagemP2} alt="Imagem Tiamate Coffee" />
            <img src={imagemP3} alt="Imagem Tiamate Coffee" />
            <img src={imagemP4} alt="Imagem Tiamate Coffee" />
            <img src={imagemP5} alt="Imagem Tiamate Coffee" />
          </div>
        </div>
      </div>
    </>
   );
}
 
export default ModelosTiamate;