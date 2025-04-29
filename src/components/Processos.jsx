const Processos = ({ 
  titulo, 
  texto, 
  imagem,
  isPar,
}) => {
  return ( 
    <>
      <div className={`flex ${isPar ? "flex-row-reverse bg-cinza" : "flex-row bg-branco"} justify-between items-center w-full px-[135px] py-[125px] gap-[130px]`}>
        <div className="flex flex-col justify-center items-start max-w-[470px] gap-[20px]">
          <h1 className="text-[50px] font-[700] text-marron-escuro">{titulo}</h1>
          <p className="text-base font-[400] text-marron-preto">
            {texto.split('\n').map((linha, index) => (
              <span key={index}>
                {linha}
                <br />
              </span>
            ))}
          </p>
        </div>
        <img
          src={imagem} 
          alt={`Imagem processo ${titulo}`} 
        />
      </div>
    </>
   );
}
 
export default Processos;