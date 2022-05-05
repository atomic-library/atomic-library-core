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

// let elements = ["h1", "div", "p"]
// const generate = (arr) => {
//   let res = {}
//   arr.forEach(e => {
//     let newStr = e[0].toUpperCase() + e.slice(1) 
//           res[newStr] = styled(e)` background: blue; width: 100%; height: 100px; margin: 10px;`
//   })
//   return res
// }
// let result = generate(elements)
// const {H1, Div, P} = result
// console.log(H1)
// console.log(Box)
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
      <Header  h='80px' bg="#ccc" span="header"/>
      <Main  flex flexWrap gap="10px" span="main">
        <Box  h='150px' bg="#909A9B" />
        <Box  h='150px' bg="#909A9B" />
        <Box  h='150px' bg="#909A9B" />
      </Main>
      <Aside  h='400px' bg="#CACACA" m="0" span="aside"/>
      <Footer  h='80px' bg="#ccc" span="footer"/>
  </Wrapper>
  <Box flex gap="10px" flexWrap flowColumnReverse>
    <Box bg="#ccc" h="100px" w="200px" m="0" hover={{bg: 'red'}}>1</Box>
    <Box bg="#ccc" h="100px" w="200px" m="0">2</Box>
    <Box bg="#ccc" h="100px" w="200px" m="0">3</Box>
  </Box>
    </> 
  )
}


export default App
