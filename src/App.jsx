//-----------------------------------
//GO TO LIB IF YOU WANT SEE THE CODE
//-----------------------------------
import {Box,Button, Main, Header, Aside, Footer, Box as Wrapper,} from '../lib/main'
import { createTheme, Theme} from '../lib/Theme'
import {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import ElementTest from '../lib/ElementTest'

import './App.css'

// createTheme({
//   variants: {
//     v1: 'p-4',
//     btn:{
//       base: "px-3 py-0.7 rounded-full border-none m-2 bg:#ccc",
//       basic: "!btn-base bg:#191A20 c:#fff",
//       login: "bg:none b:1px_solid_#191A20"
//     },
//     button: "!btn-base !btn-basic ",
//       card:{
//         store: `
//         p-1 bg:#f2f2f2 br:20px m-4
//         .nav{
//           flex jc:flex-end !btn
//         }
//         .title{
//           fw:500 mb-1 fs:1.25rem
//         }
//         button{
//           !btn-base
//         }
//         `
//       }
    
//   }
 

createTheme({
  variants:{
    ele: "p-1 bg:red inline-block",
    card: "m-1 bg:#ccc rounded p-1 :hover|shadow-2 :hover|tt:0.3s tt:0.3s cursor:pointer"
  },

  extend:{

    classes:{
      "aspect-tablet": "aspect-ratio: 2 / 1;",
      "container-sm": `max-width: ${Theme.sizes.prose}; padding: ${Theme.spacing["1"]}; margin: auto;`
    }
  }
})

function App() {
  const [state, setState] = useState("")
  const [state2, setState2] = useState(false)
  const inputRef = useRef(null)

  const handleClick = () =>{
    setState(inputRef.current.value)
  }

  return (
    <>
      <ElementTest atmClass={state} id="element">
        <a href="https://pixabay.com/sound-effects/search/cat/" className="tres">pixaby</a>
      
      </ElementTest>

      {/* <Box atmClass="bg:#ccc h:100px :hover{ bg:red }"></Box> */}
      <textarea type="text" ref={inputRef}/>
      <button onClick={handleClick}>send</button>
      <button onClick={()=> setState2(!state)}>change state</button>
    </> 
  )
}


export default App

//create props tailwind css
//text c fs fw textAlign ff bg  
//shading
//gradient