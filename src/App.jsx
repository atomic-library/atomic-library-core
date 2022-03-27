import {Box, Box as Wrapper, Header, Main, Footer, Aside, Article } from '../lib/elements'
import { createTheme, Theme } from '../lib/Theme'
import './App.css'
function App() {
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
    </> 
  )
}


export default App
