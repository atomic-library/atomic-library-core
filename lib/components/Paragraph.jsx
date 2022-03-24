import styled from 'styled-components'; 
import {useComponentContext} from '../AtomicContext'
import getProperties from '../getProperties'
const P = styled.p` ${(...rest)=>getProperties(...rest)}`

const Paragraph = ({children, className, myRef,bold, italic, ...rest}) => {
    const {...props} = useComponentContext() || false
    return(
        <P {...props}  {...rest} ref={myRef} className={className}>
            {
                    bold && italic ? <i><b>{children}</b></i> :
                    bold ? <b>{children}</b>                  :
                    italic ? <i>{children}</i> :
                    children
                }
        </P >
    )
}
export default Paragraph