import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  
    useEffect(() => {
      console.log('effect ',{ enabled })
      const handleMove = (event) => {
        const { clientX, clientY } = event
        console.log('handleMove ', { clientX, clientY });
        setPosition({x:clientX, y: clientY})     
      }

      if(enabled) {
        window.addEventListener('pointermove', handleMove)
      }
      //cleanup:
      //-> cuando el componente se desmontó
      //-> cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
      return () => {
          console.log('cleanup')
          window.removeEventListener('pointermove', handleMove)
      }


    }, [enabled] )
  




  return (
  <>
    <div className={`absolute zise-10 border-4 bg-blue-700 rounded-full opacity-80 pointer-events-none -left-5 -top-5 size-10 translate-x-[${position.x}px] translate-y-[${position.y}px]`}/>
    <button onClick={() => {setEnabled(!enabled)}}>
      {enabled ? 'Desactivar' : 'Activar'} Seguir puntero
    </button>
  </>
  )
}

export default App
