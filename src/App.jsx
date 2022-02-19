import {Box, MyBtn} from '../lib/components'
import { createTheme, Theme,  } from '../lib/Theme'
// import {createVariants} from '../lib/Variants'



// createVariants({
//   buttons: {
//     variant1: `
//     background: #B459FA;
//     border-radius: 10px;
//     color: #fff;
//   `
//   },
//   var1: `
//   background: #B459FA;
//   border-radius: 10px;
//   color: #fff;
// `
  
// })
// createTheme({
//   props: {
//     bg: 'red'
//   }
// })
// const myEffct = effectRipple()
// const large = size('1rem', '2rem', '1.3rem')
createTheme({
  breakPoints: {
    sm: '@media (max-width: 768px)',
    md: '@media (max-width: 768px)',
    lg: '@media (max-width: 768px)',
    xlg: '@media (max-width: 768px)',
  },
  maxWidths: { ...Theme.maxWidths, min: '70px' },
  props: {
    bg: 'red',
    buttons: {
      success: 'green',
      danger: 'red',
      disabled: 'grey',
      info: 'blue',
    },
  },
  variants: {
    buttons: {
      variant1: `
          background: green;
          border-radius: 40px;
          color: #fff;
        `,
    },
    cardEffect: `
        :hover{
          background: pink;
        }
      `,
  },
})

// console.log(Theme.variants.var1)
function App() {


  return (
    <>
    <MyBtn >button</MyBtn>
    <Box bg="[bg]" h="100px" size="min"></Box>
    <Box inlineFlex w="auto">
      <span>hola</span>
    </Box>
    <Box inlineFlex w="auto">
      <span>hola</span>
    </Box>
    </>
  )
}

export default App
