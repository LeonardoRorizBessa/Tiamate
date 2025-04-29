import logoFacebook from "../assets/midias-sociais/facebook-g.png"
import logoInstagram from "../assets/midias-sociais/instagram-g.png"
import logoYoutube from "../assets/midias-sociais/youtube-g.png"
import logoLinkedin from "../assets/midias-sociais/linkedin-g.png"

const Banner = ({ 
  titulo, 
  subTitulo,
  bg, 
  posicaoTexto,
  tamanhoTexto,
  textoAutentico = false,
  social = true,
}) => {
  // Tamanho do texto
  let tamanhoTextoClasse = ""

  switch (tamanhoTexto) {
    case "450":
      tamanhoTextoClasse = "max-w-[450px]"
      break;
    default:
      tamanhoTextoClasse = "max-w-[550px]"
      break;
  }

  // Posição do texto
  let posicaoTextoClasse = ""

  switch (posicaoTexto) {
    case "direita":
      posicaoTextoClasse = "right-[635px] translate-x-full"
      break;
    default:
      posicaoTextoClasse = "left-[135px]"
      break;
  }

  return ( 
    <>
      <div 
        className="flex items-center relative w-full h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 font-[700] text-[55px] leading-[100%] ${posicaoTextoClasse} ${tamanhoTextoClasse}`}
        >
          <h1 className={`${textoAutentico ? 'text-marron-claro' : 'text-amarelo'}`}>
            {titulo}<br/>
            <span className={`text-branco ${textoAutentico ? 'font-[400] text-[50px]' : 'font-[700] text-[55px]'}`}>{subTitulo}</span>
          </h1>
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