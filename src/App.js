import CustomerForm from './components/CustomerForm';
import { useState } from 'react';
import Hello from './components/Hello';
import { CustomerContext } from './components/context/Custtomer';


const App = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = ({ name, email }) => {
    console.log('app dados', { name, email })
    setName(name)
    setEmail(email)
  }

  return (
      <div>
        <CustomerContext.Provider value={{name, email, submit: handleSubmit}}>
          <CustomerForm/>
          <Hello/>
        </CustomerContext.Provider>
      </div>
    )
  }
export default App
