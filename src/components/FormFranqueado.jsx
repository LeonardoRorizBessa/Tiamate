import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import coffee from '../assets/icon-coffee.png'
import email from '../assets/icon-email.png'
import house from '../assets/icon-house.png'
import pin from '../assets/icon-pin.png'
import user from '../assets/icon-user.png'
import phone from '../assets/icon-phone.png'

const FormFranqueado = () => {
  const [estados, setEstados] = useState([])
  const [cidades, setCidades] = useState([])
  const { register, handleSubmit, setValue } = useForm()

  async function buscarEstados() {
    const request = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    const response = await request.json()
    if(response){
      setEstados(response)
    }
  }

  async function buscarCidades(estadoId) {
    const request = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios?orderBy=nome`)
    const response = await request.json()
    if(response){
      setCidades(response)
    }
  }

  function cadastrarLead(dados) {
    console.log(dados)
  }

  useEffect(() => {
    buscarEstados()
  }, [])

  return ( 
    <>
      <form className="flex flex-col justify-center gap-4" onSubmit={handleSubmit(cadastrarLead)}>
        <div className="flex items-center relative gap-2 border-2 p-1">
          <div className="flex justify-center items-center p-[7px] rounded-full bg-[#C7794A]">
            <img src={user} alt="User icon" />
          </div>
          <input 
            className="flex-1 p-1 focus:outline-none" 
            type="text" 
            placeholder="Nome e sobrenome" 
            {...register("nome", { required: true })}
          />
        </div>
        <div className="flex items-center gap-2 border-2 p-1">
          <img src={email} alt="Email icon" />
          <input 
            type="text" 
            placeholder="email@exemplo.com" 
            {...register("email", { required: true })}
          />
        </div>
        <div className="flex items-center gap-2 border-2 p-1">
          <img src={phone} alt="Phone icon" />
          <input 
            type="text" 
            placeholder="Telefone com DDD" 
            {...register("telefone", { required: true })}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-1 items-center gap-2 border-2 p-1">
            <img src={pin} alt="Pin icon" />
            <select
              onChange={(e) => {
                setValue('estado', e.target.value)
                buscarCidades(e.target.selectedOptions[0].attributes.estadoId.value)
              }}
            >
              <option disabled selected>UF</option>
              {
                estados.map(estado => (
                  <option 
                    key={`estado-${estado.id}`} 
                    value={estado.id} 
                    estadoId={estado.id}
                  >
                    {estado.nome}
                  </option>
                ))
              }
            </select>
          </div>
          <div className="flex flex-1 items-center gap-2 border-2 p-1">
            <img src={house} alt="House icon" />
            <select onChange={(e) => setValue('cidade', e.target.value)}>
              <option disabled selected>Cidade</option>
              {
                cidades.map(cidade => (
                  <option 
                    key={`estado-${cidade.id}`} 
                    value={cidade.id} 
                    estadoId={cidade.id}
                  >
                    {cidade.nome}
                  </option>
                ))
              }
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2 border-2 p-1">
          <img src={coffee} alt="Coffee icon" />
          <select>
            <option disabled selected>Como conheceu a Tiamate?</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="google">Google</option>
            <option value="indicação">Indicação</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        <button className="bg-amber-600 p-3 font-bold rounded-3xl cursor-pointer">Enviar cadastro</button>
      </form>
    </>
   );
}
 
export default FormFranqueado;