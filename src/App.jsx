//-----------------------------------
//GO TO LIB IF YOU WANT SEE THE CODE
//-----------------------------------
import {Box, Box as Wrapper, Header, Main, Footer, Aside, Article } from '../lib/elements'
import { createTheme, Theme } from '../lib/Theme'
import {useRef, useEffect} from 'react'
import AtomicContext from '../lib/AtomicContext'
import './App.css'

createTheme({
  variants: {
    v1: 'background: red;'
  }
})
function App() {

  const boxRef = useRef(null)
  
  useEffect(()=>{
    console.log(boxRef)
  }, [])
  return (
    <>
  
  <Wrapper 
      grid
      gap="10px"
      size="lg" 
      cols="1fr 1fr 1fr" 
      areas="
          'header header header'
          'main main aside'
          'footer footer footer'
      "
    >
      <Header  h='80px' variants={["v1"]}  span="header"/>
      <Main  flex flexWrap gap="10px" span="main">
        <Box  h='150px' bg="#909A9B" ref={boxRef}/>
        <Box  h='150px' bg="#909A9B" />
        <Box  h='150px' bg="#909A9B" />
      </Main>
      <Aside  h='400px' bg="#CACACA"  m="0" span="aside"/>
      <Footer  h='80px' bg="#ccc" span="footer"/>
  </Wrapper>
  <Box w="100px" className="element">
    <p>hola</p>
    asfsaf
  </Box>
  <AtomicContext.Provider value={{bg:"red", h:"100px", m:"10px"}}>
    <Box m="30px"></Box>
    <Box ></Box>
    <Box ></Box>
    <Box bg="#ccc"></Box>
    <Box ></Box>
  </AtomicContext.Provider>
  <Box bg="orange" h="100px" ></Box>
    </> 
  )
}


export default App
