//-----------------------------------
//GO TO LIB IF YOU WANT SEE THE CODE
//-----------------------------------
import {Box,Button, Main, Header, Aside, Footer, Box as Wrapper,  AtomicContext} from '../lib/main'
import { createTheme, Theme} from '../lib/Theme'
import {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'

import './App.css'

createTheme({
  variants: {
    v1: 'background:red height:100px bg-blue600',
    btn:{
      base: "px-12 py-3 rounded-full border-none m-2 bg:#ccc",
      basic: "bg:#191A20 c:#fff",
      login: "bg:none b:1px_solid_#191A20"
    },
  
      card:{
        store: `
        p-4 bg:#f2f2f2 br:20px m-4
        .nav{
          flex jc:flex-end !btn
        }
        .title{
          fw:500 mb-2 fs:1.25rem
        }
        button{
          !btn-base
        }
        `
      }
    
  }
})



function App() {

  
  return (
    <>
      <Box atmClass="h:100px w:100px bg-red500 rounded "></Box>
    </> 
  )
}


export default App

//create props tailwind css
//text c fs fw textAlign ff bg  
//shading
//gradient