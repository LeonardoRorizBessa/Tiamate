import { NavLink } from "react-router"
import logoTiamate from "../assets/logos/logo-tiamate.png"
import logoGracom from "../assets/logos/logo-gracom.png"
import logoFacebook from "../assets/midias-sociais/facebook.png"
import logoInstagram from "../assets/midias-sociais/instagram.png"
import logoYoutube from "../assets/midias-sociais/youtube.png"
import logoLinkedin from "../assets/midias-sociais/linkedin.png"

const Footer = () => {
  return ( 
    <>
      <div className="flex flex-col justify-center px-[135px] py-[70px] bg-preto">
        <div className="flex justify-between items-center">
          <img 
            className="cursor-pointer"
            src={logoTiamate} 
            alt="Logo Tiamate" 
          />
          <nav className="flex justify-center items-center gap-[45px] font-[500] text-branco text-lg">
            <NavLink 
              to={"/"}
              className="hover:text-marron-claro transition duration-300"
            >
              Inicio
            </NavLink>
            <NavLink 
              to={"/nosso-cafe"}
              className="hover:text-marron-claro transition duration-300"
            >
              Nosso Café
            </NavLink>
            <NavLink 
              to={"/noticias"}
              className="hover:text-marron-claro transition duration-300"
            >
              Notícias
            </NavLink>
            <NavLink 
              to={"/contato"}
              className="hover:text-marron-claro transition duration-300"
            >
              Contato
            </NavLink>
            <NavLink 
              to={"/cardapio"}
              className="hover:text-marron-claro transition duration-300"
            >
              Cardápio
            </NavLink>
            <NavLink 
              to={"/franquia"}
              className="hover:text-marron-claro transition duration-300"
            >
              Franquia
            </NavLink>
          </nav>
        </div>
        <hr className="text-marron-escuro border-[1px] my-[50px]" />
        <div className="flex justify-between items-center">
          <div className="flex gap-[35px]">
            <p className="text-branco text-sm">Curta e <br />Compartilhe</p>
            <ul className="flex justify-center items-center gap-[25px]">
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
          </div>
          <div className="flex justify-center items-center gap-[35px]">
            <p className="text-marron-escuro text-xs">© 2021 Tiamate - Todos os Direitos Reservados</p>
            <img 
              className="cursor-pointer"
              src={logoGracom} 
              alt="Logo Grupo Gracom" 
            />
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Footer;