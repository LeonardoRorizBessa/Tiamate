import botaoPlay from "../assets/videosImgs/botaoPlay.png"

const Videos = ({ 
  bgVideo, 
  videoHeight,
}) => {
  return ( 
    <>
      <div className={`relative flex justify-center items-center w-full ${videoHeight}`}>
        <img 
          className="absolute w-full h-full object-cover"
          src={bgVideo} 
          alt="Background video" 
        />
        <div className="absolute flex flex-col justify-center items-center gap-[20px]">
          <img 
            className="cursor-pointer"
            src={botaoPlay} 
            alt="Botão de play" 
          />
          <p className="cursor-pointer text-lg text-branco font-[400] leading-[100%]">Assistir Vídeo</p>
        </div>
      </div>
    </>
   );
}
 
export default Videos;