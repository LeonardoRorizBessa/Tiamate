import Banner from "../components/Banner"
import CafeteriasInsta from "../components/CafeteriasInsta"
import bannerContato from "../assets/banners/bannerContato.png"

const Contato = () => {
  return ( 
    <>
      <main className="flex flex-col justify-center items-center">
        <section className="relative flex justify-center items-center w-full h-[500px]">
          <Banner 
            subTitulo="Depois do café eu me expresso."
            bg={bannerContato}
            textoWidth={"max-w-[450px]"}
          />
        </section>
        <section className="flex flex-col justify-center items-center w-full px-[135px] py-[150px]">
          <CafeteriasInsta />
        </section>
      </main>
    </>
   );
}
 
export default Contato;