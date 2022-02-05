import styled from 'styled-components'; 
import {customizer} from '../main'
import {getCommon, getGrid, getFlex} from '../functions'
import {useComponentContext} from '../MyContext'


const Container =  styled.article`
    width: 100%;
    margin: auto;
    ${({insertStyleBefore})=> insertStyleBefore && insertStyleBefore}

    ${(...rest)=>getCommon(...rest)}
    ${(...rest)=>getGrid(...rest)}
    ${(...rest)=>getFlex(...rest)}

    ${({myStyle}) => myStyle && customizer(myStyle)}
    ${({superStyle}) => superStyle && customizer(superStyle)}
    ${({insertStyle}) => insertStyle && insertStyle}
   
`


const Article = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return (
        <Container {...props}  {...rest} ref={myRef} className={className}>
                {children}
        </Container>
    )
}
export default Article