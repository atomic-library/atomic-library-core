import styled from 'styled-components'; 
import {useComponentContext} from '../AtomicContext'
import getProperties from '../getProperties'
const Article = styled.article`${(...rest)=>getProperties(...rest)}`

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