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
  Box,
  Header,
  Main,
  Aside,
  Footer,
  Box
} from 'atomic-library-core'

function App() {
  const [state, setState] = useState(false)
  return (
    <>
      <Box 
        atmClass="grid grid-cols-3 gap:10px m-4"
        areas={`
          'header header header'
          'main main aside'
          'footer footer footer'
        `}
      >
        <AtomicContext.Provider value={`rounded ${state ? "bg:#808B96" : "bg:#D5D8DC"}`}>
          <Header atmClass="h:80px  area:header"/>
          <Main atmClass="flex flex-wrap gap:10px area:main bg:none .first{ rounded-5 } ">
            <Box atmClass="h:150px w-full" className='first'/>
            <Box atmClass="h:150px w-full"/>
            <Box atmClass="h:150px w-full"/>
          </Main>
          <Aside atmClass="h:400px area:aside"/>
          <Footer atmClass="h:80px area:footer"/>
        </AtomicContext.Provider>
      </Box>
    </> 
  )
}

export default App
```
Result:
![Screenshot](https://github.com/atomic-library/atomic-library-core/blob/master/src/assets/capture.PNG)
## Note
this is the new version of <a href="https://github.com/my-library-org/my-library-core">my-library-core</a>

