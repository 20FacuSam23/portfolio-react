import { useState } from 'react'

import logo from '/logo.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Edu_Exp'>
        <a href="#" target="_blank">         
          <img src={logo} classNemae="logo" alt="ava"/>
        </a>       
      </div>
    </>
  )
}

export default App