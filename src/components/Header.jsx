import { NavLink, Link } from "react-router"

const Header = () => {
  return ( 
    <>
      <div className="flex justify-between px-[135px] py-6 bg-gray-700 text-base text-white font-bold">
        <nav className="flex gap-8">
          <h1>LOGO</h1>
          <NavLink 
            to={"/"}
            className="hover:text-red-500 transition duration-300"
          >
            Inicio
          </NavLink>
          <NavLink 
            to={"/nosso-cafe"}
            className="hover:text-red-500 transition duration-300"
          >
            Nosso Café
          </NavLink>
          <NavLink 
            to={"/noticias"}
            className="hover:text-red-500 transition duration-300"
          >
            Notícias
          </NavLink>
          <NavLink 
            to={"/contato"}
            className="hover:text-red-500 transition duration-300"
          >
            Contato
          </NavLink>
          <NavLink 
            to={"/cardapio"}
            className="hover:text-red-500 transition duration-300"
          >
            Cardápio
          </NavLink>
        </nav>
        <button>
          <Link
            to={"/franquia"}
            className="p-3 rounded-md bg-orange-500 text-black"
          >
            Seja um Franquiado
          </Link>
        </button>
      </div>
    </>
   );
}
 
export default Header;