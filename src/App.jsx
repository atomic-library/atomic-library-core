//-----------------------------------
//GO TO LIB IF YOU WANT SEE THE CODE
//-----------------------------------
import {Box,Button, Main, Header, Aside, Footer, Box as Wrapper,  AtomicContext} from '../lib/main'
import { createTheme, Theme} from '../lib/Theme'
import {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import TestComponent from '../lib/TestComponent'
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
  const [state, setState] = useState("red")
  const divRef = useRef(null)
  return (
    <>
      {/* <Box 
        atmClass="grid grid-cols-3 gap:10px m-4"
        areas={`
          'header header header'
          'main main aside'
          'footer footer footer'
        `}
        onClick={()=>setState(!state)}
      >
        <AtomicContext.Provider value={`rounded ${state ? "bg:#808B96" : "bg:#D5D8DC"}`}>
          <Header atmClass="h:80px  area:header"/>
          <Main atmClass="flex flex-wrap gap:10px hola-ha area:main bg:none .first{ rounded-5 } ">
            <Box atmClass="h:150px w-full" className='first'/>
            <Box atmClass="h:150px w-full"/>
            <Box atmClass="h:150px w-full"/>
          </Main>
          <Aside atmClass="h:400px area:aside"/>
          <Footer atmClass="h:80px area:footer"/>
        </AtomicContext.Provider>
      </Box> */}
      <Box className={`bg-${state} card`}>hola component stlyes 1</Box>
      
      <button onClick={()=>setState("red")}>Red</button>
      <button onClick={()=>setState("blue")}>blue</button>
      <button onClick={()=>setState("yellow")}>yellow</button>
      <button onClick={()=>setState("purple")}>purple</button>
      <button onClick={()=>setState("brown")}>brown</button>
      <button onClick={()=>setState("silver")}>silver</button>

      <TestComponent atmClass={state}>hola</TestComponent>
    </> 
  )
}


export default App

//create props tailwind css
//text c fs fw textAlign ff bg  
//shading
//gradient