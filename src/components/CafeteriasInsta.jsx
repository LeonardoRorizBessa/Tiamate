import logoInsta from "../assets/ambienteInsta/instaIcon.png"
import fotoInsta1 from "../assets/cafeteriasInsta/cafeteriaFoto1.png"
import fotoInsta2 from "../assets/cafeteriasInsta/cafeteriaFoto2.png"
import fotoInsta3 from "../assets/cafeteriasInsta/cafeteriaFoto3.png"
import fotoInsta4 from "../assets/cafeteriasInsta/cafeteriaFoto4.png"
import fotoInsta5 from "../assets/cafeteriasInsta/cafeteriaFoto5.png"

const CafeteriasInsta = () => {
  return ( 
    <>
      <div className="flex justify-between items-center w-full mb-[40px]">
        <h1 className="font-[700] text-[50px] text-marron-escuro leading-[100%]">Nossas Cafeterias</h1>
        <div className="flex justify-center items-center gap-[10px]">
          <p className="font-[400] text-base text-marron-preto leading-[120%]">Veja mais</p>
          <img src={logoInsta} alt="Instagram logo" />
        </div>
      </div>
      <div className="flex justify-between items-center w-full mb-[60px]">
        <img src={fotoInsta1} alt="Cafeteria instagram 1" />
        <img src={fotoInsta2} alt="Cafeteria instagram 2" />
        <img src={fotoInsta3} alt="Cafeteria instagram 3" />
        <img src={fotoInsta4} alt="Cafeteria instagram 4" />
        <img src={fotoInsta5} alt="Cafeteria instagram 5" />
      </div>
      <div className="flex justify-center items-center gap-[15px]">
        <span className="w-[15px] h-[15px] bg-[#c4c4c4] rounded-full cursor-pointer"></span>
        <span className="w-[15px] h-[15px] bg-[#c4c4c4] rounded-full cursor-pointer"></span>
        <span className="w-[15px] h-[15px] bg-[#c4c4c4] rounded-full cursor-pointer"></span>
        <span className="w-[15px] h-[15px] bg-[#c4c4c4] rounded-full cursor-pointer"></span>
        <span className="w-[15px] h-[15px] bg-[#c4c4c4] rounded-full cursor-pointer"></span>
      </div>
    </>
   );
}
 
export default CafeteriasInsta;