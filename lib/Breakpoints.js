 let Breakpoints  = {
    sm: '@media (max-width: 540px)',
    md: '@media (max-width: 720px)',
    lg: '@media (max-width: 960px)',
    xl: '@media (max-width: 1140px)',
    xxl: '@media (max-width: 1320px) ',
}
 
 const changeBreakpoints = (breakpoints = false) => {
    if(breakpoints) Breakpoints = breakpoints 
 }

export { Breakpoints, changeBreakpoints}