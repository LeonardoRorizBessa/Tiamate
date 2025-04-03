import { Link } from "react-router"

const NotFound = () => {
  return ( 
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-black">
        <h1 className="font-bold text-4xl text-white">Pagina não encontrada</h1>
        <Link 
          to={-1}
          className="text-white font-bold pt-4"
        >
          Votlar
        </Link>
      </div>
    </>
   );
}
 
export default NotFound;