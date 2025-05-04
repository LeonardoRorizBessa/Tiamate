import Banner from "../components/Banner"
import bannerCardapio from"../assets/banners/bannerCardapio.png"

const Cardapio = () => {
  return ( 
    <>
      <main className="flex flex-col justify-center items-center">
        <section className="relative flex justify-center items-center w-full h-[500px]">
          <Banner 
            subTitulo="O verdadeiro sabor do Café."
            bg={bannerCardapio}
            textoWidth={"max-w-[450px]"}
          />
        </section>
      </main>
    </>
   );
}
 
export default Cardapio;