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
## Documentation
[Go to documentation](https://atomic-library.com/)

## Demo
This is little demo about containers, all of them are basically the same component, the difference is that each one return a sematic tag
```jsx
import {
  Box as Wrapper,
  Header,
  Main,
  Aside,
  Footer,
  Box
} from 'atomic-library-core'

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
      <Main  flex flexWrap gap="10px" span="main">
        <Box  h='150px' bg="#909A9B" />
        <Box  h='150px' bg="#909A9B" />
        <Box  h='150px' bg="#909A9B" />
      </Main>
      <Aside  h='400px' bg="#CACACA" m="0" span="aside"/>
      <Footer  h='80px' bg="#ccc" span="footer"/>
  </Wrapper>
)
}

export default App
```
Result:
![Screenshot](https://github.com/atomic-library/atomic-library-core/blob/master/src/assets/Capture.PNG)
## Note
this is the new version of <a href="https://github.com/my-library-org/my-library-core">my-library-core</a>

