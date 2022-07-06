//-----------------------------------
//GO TO LIB IF YOU WANT SEE THE CODE
//-----------------------------------
import {Box, Box as Wrapper, P, Header,Button, Main, Footer, Aside, Article, Input, Ul } from '../lib/elements'
import { createTheme, Theme, } from '../lib/Theme'
import Colors from '../lib/Colors/'
import {useRef, useEffect, useState} from 'react'
import AtomicContext from '../lib/AtomicContext'
import styled from 'styled-components'
import gp from '../lib/getProperties'
import useDataAttr from '../lib/useDataAttr'
import './App.css'

createTheme({
  variants: {
    v1: 'background: red; height: 100px; color: blue accent-red500'
  }
})



function App() {
  useDataAttr()
  const [state, setState] = useState(false)
  const regexp = /t(e)(st(\d?))/g;
  const str = 'test1test2';
  
  const array = [...str.matchAll(regexp)];
  
  return (
    <>
      <Box atomicClass="w-auto bg-red200 br:10px p-4 ">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia autem quaerat magni incidunt ducimus quisquam laborum dolore nostrum non ipsam, deserunt corrupti accusamus magnam iste similique! Aliquid mollitia quam illo.</p>
      </Box>
      <p data-class="c:#1a1a1a m-8 font-bold sm|:hover|bg:red ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quas est voluptatem non neque dignissimos nulla at rerum dolorum, delectus, quod adipisci tenetur, fuga consequatur nam cum animi temporibus numquam!</p>
    </> 
  )
}


export default App
//create props tailwind css
//text c fs fw textAlign ff bg  
//shading
//gradient

// atomicStyle = `
//   bg:red500 p-4 m-auto text-center uppercase w-full
//   hover{
//     bg:red500 p-4 m-auto text-center uppercase w-full
//   }
//   @media-xl{
//     max-w-screen-lg px-16 text-justify lowercase
//     hover {
//       bg:red500 p-4 m-auto text-center uppercase w-full
//     }
//     a{
//       bg:red500 p-4 m-auto text-center uppercase w-full
//       hover{
//         bg:red500 p-4 m-auto text-center uppercase w-full
//       }
//     }
//   }
// `

// atomicClasss = {

// }
// atomicClass = {
//   base: [
//     "h2 fw:500 c:#141414",
//     "p c:#cccc lnH:1.5",
//     "a c:blue d:inline-block p:10px",

//   ],
//   xl: [
//     "h2 fw:500 c:#141414",
//     "p c:#cccc lnH:1.5",
//     "a c:blue d:inline-block p:10px",
//     "a:hover b:solid_1px_#ccc"
//   ],
// }

// atomicClass={[
//   "* h2 fw:500 c:#141414",
//   "* p c:#cccc lnH:1.5",
//   "* a c:blue d:inline-block p:10px",
//   "* a:hover b:solid_1px_#ccc"
// ]}

// atomicClass=[

//   "* * bg:#f2f2f2 br:10px p-4",
//   "* span text-red600 cursor-default",
//   "* span:hover text-blue500"
// ]
// atomicClass=`
//   bg:#f2f2f2 br:10px p-4 @effect-2 @sample-2 @effect-2
//   xl/:hover/br:10px xl/:hover/p-4 :hover/@effect-2

//   :hover{
//     bg:#f2f2f2 br:10px p-4 cursor-default @spreen-3 @spreen-2
//   }
//   ::after{
//     content:"''"
//   }
//   @media lg{
//     bg:#f2f2f2 br:10px p-4 cursor-default
//     div{
//       bg:#f2f2f2 br:10px p-4 cursor-default,
//       :hover{
//         bg:#f2f2f2 br:10px p-4 cursor-default,
//       }
//     }
//   }
// `