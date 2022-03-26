import {Box, Box as Wrapper, Header, Main, Footer, Aside, Article } from '../lib/components'
import { createTheme, Theme } from '../lib/Theme'
import './App.css'
function App() {
  return (
    <>
  
    <Box flex flexWrap bBm="1px solid #00">
      <Box  h="100px" bg="#ccc" m="10px"></Box>
      <Box  h="100px" bg="#ccc" m="10px"></Box>
      <Box  h="100px" bg="#ccc" m="10px"></Box>
    </Box>
    <Box bg="#ccc" m="10px" h="100px" bBm="1px solid #000" borderBottomColor="red" br4="10px"></Box>
    </> 
  )
}


export default App
