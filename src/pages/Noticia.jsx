import { useParams } from "react-router";

const Noticia = () => {
  const { id } = useParams()

  const noticias = [
    {
      id: 1,
      titulo: "Max Titanium é confiável?",
      imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-WeLaOrK3yKs6ZhboM6QoEeqpom1vHba9UaenyqxGDm6-Vz2KgIB05oDKmRh2en_Gb2FIH844MYUadyt9ToyqpBXWkwoX4xfYpZ94XAEP7wtxTScdB-NfGhMBmLiK&usqp=CAc"
    },
    {
      id: 2,
      titulo: "Whey Protein Dux é bom mesmo?",
      imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQvWCGW2VfXjIrxAEMwDD6ohLtRPY1L3P6GwFU0Lv_zPwrYSvJq_IFXc9FIdY1cqyl5oywU1HzPFslvNQKuiX3NeVh0NvizBxaIltRMyvmedt-XdaBUeEGorEYrfaWbM1bXnkxa-g&usqp=CAc"
    },
    {
      id: 3,
      titulo: "Strap, como usar!",
      imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRsZtRMxd-fcxc0Z6SQOpP62zLuSZhyxMqIKDskcfHLWXKrvEdwASfEl3YXtee0HqlOzaxPeeHJN8LM9OT54J7MQrn4xr9yJb3d--rirZawJQv3_PJNZx6QcOpDf-gzbjmiz4-s0Q&usqp=CAc"
    }
  ]

  return ( 
    <>
      <section className="flex flex-col justify-center items-center h-screen bg-black">
        <h1 className="font-bold text-4xl text-white">Pagina Noticia</h1>
        {
          noticias.filter(noticia => noticia.id == id).map(noticia => (
            <div>
              <img className="w-50" src={noticia.imagem} alt="" />
              <h3 className="text-white">{noticia.titulo}</h3>
            </div>
          ))
        }
      </section>
    </>
   );
}
 
export default Noticia;