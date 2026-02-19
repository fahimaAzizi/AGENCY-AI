import React from 'react'
import assets from '../assets/assets'

function ThemeToggleBtn = ({theme , setTheme}) => {
  return (
    <>
    <button>
        {theme == 'dark'? (
            <img onClick={()=> setTheme('light')} src={assets.sun_icon} alt=""
            className='size-8.5 p-a.5 border border-gray-500 rounded-full' />
        ) : (
            <img src={assets.mo}/>
        )}
    </button>
    </>
  )
}

export default ThemeToggleBtn