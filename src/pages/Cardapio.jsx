import Banner from "../components/Banner"
import bannerCardapio from"../assets/banners/bannerCardapio.png"

const Cardapio = () => {
  return ( 
    <>
      <div className="fflex flex-col justify-center items-center">
        <Banner 
          subTitulo="O verdadeiro sabor do Café."
          bg={bannerCardapio}
          textoWidth={"max-w-[450px]"}
        />
      </div>
    </>
   );
}
 
export default Cardapio;