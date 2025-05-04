import instaIcon from "../assets/ambienteInsta/instaIcon.png"
import foto1 from "../assets/ambienteInsta/foto01.png"
import foto2 from "../assets/ambienteInsta/foto02.png"
import foto3 from "../assets/ambienteInsta/foto03.png"
import foto4 from "../assets/ambienteInsta/foto04.png"
import foto5 from "../assets/ambienteInsta/foto05.png"
import foto6 from "../assets/ambienteInsta/foto06.png"

const AmbienteInsta = () => {
  return ( 
    <>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col justify-center items-start gap-[15px]">
          <p className="font-[400] text-lg text-marron-preto leading-[100%]">Para você e seus amigos</p>
          <h1 className="font-[700] text-[50px] text-marron-escuro leading-[100%]">Ambiente agradável</h1>
        </div>
        <div className="flex flex-row justify-between items-center gap-[15px]">
          <p className="font-[400] text-lg text-marron-preto leading-[120%]">Veja mais</p>
          <img 
            src={instaIcon} 
            alt="Instagram icone" 
          />
        </div>
      </div>
      <div className="grid grid-cols-3 w-full">
        <img className="w-full" src={foto1} alt="Foto ambiente 1" />
        <img className="w-full" src={foto2} alt="Foto ambiente 2" />
        <img className="w-full" src={foto3} alt="Foto ambiente 3" />
        <img className="w-full" src={foto4} alt="Foto ambiente 4" />
        <img className="w-full" src={foto5} alt="Foto ambiente 5" />
        <img className="w-full" src={foto6} alt="Foto ambiente 6" />
      </div>
    </>
   );
}
 
export default AmbienteInsta;