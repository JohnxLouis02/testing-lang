import { useState } from 'react'
import Sidebar from './assets/components/sidebar'

import Navrouter from './assets/components/Navrouter'

function App() {
  const [count, setCount] = useState(0)

  return (

    // Container
    <div class="h-screen grid mr-2 ml-2">
      <div>
       <Sidebar  />
       
       </div>
       
    </div>
     
     
    
  )
}

export default App
