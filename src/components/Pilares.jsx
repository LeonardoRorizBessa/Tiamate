const Pilares = ({ 
  titulo, 
  imagem, 
  texto,
}) => {
  return ( 
    <>
      <div className="flex flex-col justify-center items-start">
        <div className="flex justify-center items-center gap-[16px] mb-[20px]">
          <img 
            src={imagem} 
            alt={`Imagem de ${titulo}`} 
          />
          <h1 className="text-marron-escuro text-2xl font-[700] leading-[100%]">{titulo}</h1>
        </div>
        <p className="max-w-[285px] text-marron-preto text-base font-[400] leading-[120%]">{texto}</p>
      </div>
    </>
   );
}
 
export default Pilares;