import { NavLink, Link } from "react-router"
import logoTiamate from "../assets/logo-tiamate.png"

const Header = () => {
  return ( 
    <>
      <div className="flex justify-between px-[135px] py-[30px] bg-preto text-base text-branco">
        <nav className="flex justify-center items-center gap-[45px] font-[500]">
          <img 
            className="cursor-pointer"
            src={logoTiamate} 
            alt="Logo Tiamate" 
          />
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
        </nav>
        <button>
          <Link
            to={"/franquia"}
            className="px-[23px] py-[16px] rounded-[5px] bg-marron-claro text-black text-base hover:bg-vinho hover:text-marron-claro transition duration-300"
          >
            Seja um Franquiado
          </Link>
        </button>
      </div>
    </>
   );
}
 
export default Header;