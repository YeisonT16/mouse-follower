import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)

  
    useEffect(() => {
      console.log('effect ',{ enabled })
      const handleMove = (event) => {
        const { clientX, clientY } = event
        console.log('handleMove ', { clientX, clientY });      
      }
      if(enabled) {
        window.addEventListener('pointermove', handleMove)
      }
    }, [enabled] )
  




  return (
  <main>
    <div className='absolute bg-blue-700 rounded-full opacity-80 pointer-events-none -left-5 -top-5 size-10'></div>
    <button onClick={() => {setEnabled(!enabled)}}>
      {enabled ? 'Desactivar' : 'Activar'} Seguir puntero
    </button>
  </main>
  )
}

export default App
