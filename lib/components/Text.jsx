import styled from 'styled-components'; 
import {customizer} from '../main'
import {getCommon} from '../functions'
import {useComponentContext} from '../MyContext'

const Article = styled.article`
${({insertStyleBefore})=> insertStyleBefore && insertStyleBefore}

${(...rest)=>getCommon(...rest)}


${({myStyle}) => myStyle && customizer(myStyle)}
${({superStyle}) => superStyle && customizer(superStyle)}
${({insertStyle}) => insertStyle && insertStyle}
`

const Text = ({children, className, myRef, bold, italic,...rest}) => {
    const {...props} = useComponentContext() || false
    return(
        <Article {...props}  {...rest} ref={myRef} className={className}>
            {
                    bold && italic ? <i><b>{children}</b></i> :
                    bold ? <b>{children}</b>                  :
                    italic ? <i>{children}</i> :
                    children
                }
        </Article >
    )
}
export default Text