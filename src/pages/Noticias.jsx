import { Link } from "react-router";

const Noticias = () => {
  return ( 
    <>
      <section className="flex flex-col justify-center items-center h-screen bg-black">
        <h1 className="font-bold text-4xl text-white">Pagina Notícias</h1>
        <ul className="flex flex-col text-white font-bold gap-4 mt-4">
          <li>
            <Link to={"/noticias/1"}>Noticia 1</Link>
          </li>
          <li>
            <Link to={"/noticias/2"}>Noticia 2</Link>
          </li>
          <li>
            <Link to={"/noticias/3"}>Noticia 3</Link>
          </li>
        </ul>
      </section>
    </>
   );
}
 
export default Noticias;