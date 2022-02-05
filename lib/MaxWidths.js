let MaxWidths  = {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
    xxl: '1320px',
    fluid: '100%'
}
 
const changeMaxWidths  = (maxWidths = false) => {
   if(maxWidths ) MaxWidths  = maxWidths
}

export { MaxWidths , changeMaxWidths }