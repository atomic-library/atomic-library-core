//-----------------------------------
//GO TO LIB IF YOU WANT SEE THE CODE
//-----------------------------------
import {Box, Box as Wrapper, Header,Button, Main, Footer, Aside, Article, Input } from '../lib/elements'
import { createTheme, Theme, } from '../lib/Theme'
import Colors from '../lib/Colors/'
import {useRef, useEffect} from 'react'
import AtomicContext from '../lib/AtomicContext'
import styled from 'styled-components'
import gp from '../lib/getProperties'
import './App.css'

createTheme({
  variants: {
    v1: 'background: red; height: 100px'
  }
})

function App() {
  const regexp = /t(e)(st(\d?))/g;
  const str = 'test1test2';
  
  const array = [...str.matchAll(regexp)];
  

  // expected output: Array ["test1", "e", "st1", "1"]
  

  return (
    <>
     <Box box="100px 100px 1rem 0/s1rem 10px * #ccc red"
     atomicClass={[
       "* :hover bg:red tt:.5s",
       "sm :hover bg:blue p:2rem"
     ]}>
asfds
     </Box>
    </> 
  )
}


export default App
//create props tailwind css