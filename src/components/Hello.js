import { useContext } from "react"

import { CustomerContext } from "./context/Custtomer"

const Hello = () => {

  const { name } = useContext(CustomerContext)

    return (
        <>
          <h1>{name}</h1>
        </>
    )
}

export default Hello