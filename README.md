# Atomic Library
this is a library of react components and other useful functions for development

## Installation

### npm
```bash
npm install atomic-library-core
```
### yarn 
```bash
yarn add atomic-library-core
```
## Demo
    this is little example of one of the components
```jsx
import {
    Box as Wrapper,
    Header,
    Main,
    Aside,
    Footer,
    Box
} from 'atomic-library'

function App() {
  return (
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
        <Main  flex wrap span="main">
          <Box  h='200px' bg="#909A9B" m="0 0 5px 0"/>
          <Box  h='200px' bg="#909A9B" m="5px 0"/>
          <Box  h='200px' bg="#909A9B" m="5px 0"/>
        </Main>
        <Aside  h='400px'bg="#CACACA" m="0" span="aside"/>
        <Footer  h='80px'bg="#ccc" span="footer"/>
    </Wrapper>
  )
}

export default App
```
and result will be this:
![Screenshot](src/assets/Capture.PNG)

## Note
this is the new version of <a href="https://github.com/my-library-org/my-library-core">my-library-core</a>

