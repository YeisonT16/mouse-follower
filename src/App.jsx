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
    <button 
    className='border-2 rounded-lg bg-white text-indigo-500 border-indigo-500 font-bold text-sm cursor-pointer h-auto w-auto p-2'
    onClick={() => {setEnabled(!enabled)}}>
      {enabled ? 'Desactivar' : 'Activar'} Seguir puntero
    </button>
  </>
  )
}

export default App
