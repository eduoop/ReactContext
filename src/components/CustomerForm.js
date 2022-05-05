import { useState, useContext } from "react"

import { CustomerContext } from "./context/Custtomer"

const CustomerForm = () => {

    const { submit } = useContext(CustomerContext)

    const [name, setName] = useState()
    const [email, setEmail] = useState()

    function handleSubmit(e) {
         submit({name, email})

        e.preventDefault()
        console.log('dados componente', { name, email })
    }

    return (
        <>
          <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nome</label>
              <input 
                type="text" 
                name="name"
                id="name" 
                onChange={e => setName(e.target.value)}
              /> <br/>

              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                onChange={e => setEmail(e.target.value)}
              /> <br/>

              <button type="submit">Enviar</button>
          </form>
        </>
    )
}

export default CustomerForm