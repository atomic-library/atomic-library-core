# Atomic Library
this is a library of react components and other useful functions for development

## Installation

### npm
```bash
npm install atomic-library 
```
### yarn 
```bash
yarn add atomic-library
```
## Demo
    this is little example of one of the components
```jsx
import {
    Box as Wrapper,
    Box as Header,
    Box as Main,
    Box as Aside,
    Box as Footer,
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
        <Header header h='80px' bg="#ccc" span="header"/>
        <Main main flex wrap span="main">
          <Box  h='200px' bg="#909A9B" m="0 0 5px 0"/>
          <Box  h='200px' bg="#909A9B" m="5px 0"/>
          <Box  h='200px' bg="#909A9B" m="5px 0"/>
        </Main>
        <Aside aside h='400px'bg="#CACACA" m="0" span="aside"/>
        <Footer footer h='80px'bg="#ccc" span="footer"/>
    </Wrapper>
  )
}

export default App
```
and result will be this:
![Screenshot](src/assets/Capture.PNG)

