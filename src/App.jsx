//-----------------------------------
//GO TO LIB IF YOU WANT SEE THE CODE
//-----------------------------------
import {Box, Box as Wrapper, Header,Button, Main, Footer, Aside, Article, Input } from '../lib/elements'
import { createTheme, Theme, } from '../lib/Theme'
import {useRef, useEffect} from 'react'
import AtomicContext from '../lib/AtomicContext'
import styled from 'styled-components'
import gp from '../lib/getProperties'
import './App.css'

createTheme({
  variants: {
    v1: 'background: red;'
  }
})

function App() {

console.log(Theme)
 

  return (
    <>
     <Box h="100px" rounded width="100px" shading   m="10px"bg="#f2f2f2"></Box>
     <Box h="100px" rounded width="100px"  boxShadow="1px 2px 3px #ccc"  m="10px" bg="#f2f2f2"></Box>
     <Box atomicClass="h:100px w:100px m:10px bg:#f2f2f2" rounded shading></Box>
    </> 
  )
}


export default App
//create props tailwind css