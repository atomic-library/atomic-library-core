

let Theme  = {
   breakPoints:{
      sm: '@media (max-width: 540px)',
      md: '@media (max-width: 720px)',
      lg: '@media (max-width: 960px)',
      xl: '@media (max-width: 1140px)',
      xxl: '@media (max-width: 1320px) ',
   },
   maxWidths: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      xxl: '1320px',
      fluid: '100%'
   },
   props: {},
   variants: {}
}
 
const createTheme  = (theme = false) => {
   if(theme ){
      if(theme.breakPoints) Theme.breakPoints = theme.breakPoints
      if(theme.maxWidths) Theme.maxWidths = theme.maxWidths
      if(theme.props) Theme.props = theme.props
      if(theme.variants) Theme.variants = theme.variants
   }
}


export { Theme, createTheme}