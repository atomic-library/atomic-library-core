import {Box, MyBtn} from '../lib/components'
import {createVariants} from '../lib/Variants'



createVariants({
  buttons: {
    variant1: `
    background: #B459FA;
    border-radius: 10px;
    color: #fff;
  `
  },
  var1: `
  background: #B459FA;
  border-radius: 10px;
  color: #fff;
`
  
})


function App() {


  return (
    <>
    <MyBtn variant="[buttons.variant1]">button</MyBtn>
    <Box ></Box>
    </>
  )
}

export default App
