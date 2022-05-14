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
  const regexp = /t(e)(st(\d?))/g;
  const str = 'test1test2';
  
  const array = [...str.matchAll(regexp)];
  

  // expected output: Array ["test1", "e", "st1", "1"]
  

  return (
    <>
     {/* <Box sqr="100px 10px 20px * #f2f2f2 flex" center>asd</Box> */}
     {/* <Box atomicClass="bg:red" breakpoints="sm{bg:pink} lg{bg:orange}">hola</Box>
     <Box bg="#ccc" h="20px" myStyle={{br: '10px'}}></Box>
     <Box breakpoints="sm{bg:pink} md{bg:blue}" atomicClass="bg:red">hola</Box> */}
      <Box atomicClass="h:100px w:70vw br:10px .cssClass{h:50px;bg:#ccc}" shading>
        <div className="cssClass"></div>
      </Box>
     
    </> 
  )
}


export default App
//create props tailwind css