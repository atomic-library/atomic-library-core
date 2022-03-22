import styled from 'styled-components' 
import {useComponentContext} from '../MyContext'
import getProperties from '../getProperties'


const H1 = styled.h1`${(...rest)=>getProperties(...rest)}`
const H2 = styled.h2`${(...rest)=>getProperties(...rest)}`
const H3 = styled.h3`${(...rest)=>getProperties(...rest)}`
const H4 = styled.h4`${(...rest)=>getProperties(...rest)}`
const H5 = styled.h5`${(...rest)=>getProperties(...rest)}`
const H6 = styled.h6`${(...rest)=>getProperties(...rest)}`
const Title = ({
    className, myRef, children,
    h1, h2, h3, h4, h5, h6, bold, italic,
    ...rest
}) => {
    const {...props} = useComponentContext() || false
    return (
        <>
            {   
                h2 ? 
                <H2 {...props} {...rest} ref={myRef} className={className}>
                {
                    bold && italic ? <i><b>{children}</b></i> :
                    bold ? <b>{children}</b>                  :
                    italic ? <i>{children}</i> :
                    children
                }
                </H2>
                : 
                h3 ? 
                <H3 {...props} {...rest} ref={myRef} className={className}>
                {
                    bold && italic ? <i><b>{children}</b></i> :
                    bold ? <b>{children}</b>                  :
                    italic ? <i>{children}</i> :
                    children
                }
                </H3>
                :
                h4 ? 
                <H4 {...props} {...rest} ref={myRef} className={className}>
                {
                    bold && italic ? <i><b>{children}</b></i> :
                    bold ? <b>{children}</b>                  :
                    italic ? <i>{children}</i> :
                    children
                }
                </H4>
                :
                h5 ? 
                <H5 {...props} {...rest} ref={myRef} className={className}>
                {
                    bold && italic ? <i><b>{children}</b></i> :
                    bold ? <b>{children}</b>                  :
                    italic ? <i>{children}</i> :
                    children
                }
                </H5>
                :
                h6 ? 
                <H6 {...props} {...rest} ref={myRef} className={className}>
                {
                    bold && italic ? <i><b>{children}</b></i> :
                    bold ? <b>{children}</b>                  :
                    italic ? <i>{children}</i> :
                    children
                }
                </H6>
                : 
                <H1 {...props} {...rest} ref={myRef} className={className}>
                {
                    bold && italic ? <i><b>{children}</b></i> :
                    bold ? <b>{children}</b>                  :
                    italic ? <i>{children}</i> :
                    children
                }
                </H1>

            }
        </>
    )
}

export default Title