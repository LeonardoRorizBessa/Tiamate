import logoFacebook from "../assets/midiaSociais/facebookGG.png"
import logoInstagram from "../assets/midiaSociais/instagramGG.png"
import logoYoutube from "../assets/midiaSociais/youtubeGG.png"
import logoLinkedin from "../assets/midiaSociais/linkedinGG.png"

const Banner = ({ 
  temTitulo = false,
  titulo, 
  subTitulo,
  bg,
  textoWidth,
  textoDireita = false,
  textoAutentico = false,
  social = true,
}) => {
  return ( 
    <>
      <div className="relative flex justify-center items-center w-full h-[500px]">
        <img 
          className="absolute w-full h-full object-cover"
          src={bg}
          alt="Imagem do banner" 
        />
        <div
          className={`absolute top-1/2 -translate-y-1/2 font-[700] text-[55px] leading-[100%] ${textoWidth} ${textoDireita ? "right-[635px] translate-x-full" : "left-[135px]"}`}
        >
          {temTitulo && (
            <h1 className={`${textoAutentico ? 'text-marron-claro' : 'text-amarelo'}`}>{titulo}<br/></h1>
          )}
          <p className={`text-branco ${textoAutentico ? 'font-[400] text-[50px]' : 'font-[700] text-[55px]'}`}>{subTitulo}</p>
          {social && (
            <ul className="flex justify-start items-center gap-[30px] mt-[30px]">
              <li>
                <img 
                  className="cursor-pointer"
                  src={logoFacebook} 
                  alt="Logo Facebook" 
                />
              </li>
              <li>
                <img 
                  className="cursor-pointer"
                  src={logoInstagram} 
                  alt="Logo Instagram" 
                />
              </li>
              <li>
                <img 
                  className="cursor-pointer"
                  src={logoYoutube} 
                  alt="Logo Youtube" 
                />
              </li>
              <li>
                <img 
                  className="cursor-pointer"
                  src={logoLinkedin} 
                  alt="Logo Linkedin" 
                />
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
   );
}

export default Banner;