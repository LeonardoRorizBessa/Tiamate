import Banner from "../components/Banner"
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
      </main>
    </>
   );
}
 
export default Contato;