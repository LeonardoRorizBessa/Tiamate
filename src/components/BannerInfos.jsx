const BannerInfos = ({ imagem, texto }) => {
  return ( 
    <>
      <img 
        className="absolute w-full h-full object-cover"
        src={imagem} 
        alt="Imagem do banner" 
      />
      <div className="absolute flex flex-col justify-center items-center max-w-[910px] gap-[35px]">
        <h1 className="text-white font-[700] text-[50px] leading-[100%] text-center">{texto}</h1>
        <button className="flex justify-center items-center bg-marron-claro text-marron-preto w-[570px] h-[60px] rounded-[5px] hover:bg-vinho hover:text-white transition duration-300 ease-in-out cursor-pointer">
          <p className="font-[400] text-base leading-[120%]">Mais Informações</p>
        </button>
      </div>
    </>
   );
}
 
export default BannerInfos;