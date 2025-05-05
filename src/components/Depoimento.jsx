import franqueadaImg from "../assets/depoimento/franqueada.png"

const Depoimento = () => {
  return ( 
    <>
      <h1 className="font-[700] text-[50px] text-marron-escuro leading-[100%] mb-[45px]">Depoimento Franqueada</h1>
      <img className="mb-[30px]" src={franqueadaImg} alt="Franqueada imagem" />
      <p className="font-[400] text-base text-black leading-[120%] max-w-[635px] mb-[50px]">"Antes de optar por ser uma franqueada Tiamate,analisei varias franquias do mercado. Mas senti, já nas primeiras apresentações que o objetivo do Grupo não era simplismente que eu abrisse mais uma loja, e sim que eu me tornasse um parceiro de sucesso. O processo de procura do ponto e abertura da loja foi muito pratico. A consultoria e os treinamentos com o apoio dos diversos manuais da marca transcederam minhas expectativas. Os resultados estão sendo excelentes e percebidos por todos, sócios, funcionários e, principalmente, pelos clientes".</p>
      <h5 className="font-[700] text-[24px] text-vinho leading-[100%] mb-[10px]">Aquila Carvalho</h5>
      <p className="font-[400] text-base text-black leading-[120%]">Franqueada - Unidade Salvador - BA</p>
    </>
   );
}
 
export default Depoimento;