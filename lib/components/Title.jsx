import styled from 'styled-components'; 
import {customizer, TextTypes} from '../main'
import {getCommon} from '../functions'
import {useComponentContext} from '../MyContext'


const H1 = styled.h1`

    ${({insertStyleBefore})=> insertStyleBefore && insertStyleBefore}

    ${({type})=> type && TextTypes[type]}
    ${(...rest)=>getCommon(...rest)}


    ${({myStyle}) => myStyle && customizer(myStyle)}
    ${({superStyle}) => superStyle && customizer(superStyle)}
    ${({insertStyle}) => insertStyle && insertStyle}
`
const H2 = styled.h2`

    ${({insertStyleBefore})=> insertStyleBefore && insertStyleBefore}

    ${(...rest)=>getCommon(...rest)}


    ${({myStyle}) => myStyle && customizer(myStyle)}
    ${({superStyle}) => superStyle && customizer(superStyle)}
    ${({insertStyle}) => insertStyle && insertStyle}
`
const H3 = styled.h3`

    ${({insertStyleBefore})=> insertStyleBefore && insertStyleBefore}

    ${(...rest)=>getCommon(...rest)}


    ${({myStyle}) => myStyle && customizer(myStyle)}
    ${({superStyle}) => superStyle && customizer(superStyle)}
    ${({insertStyle}) => insertStyle && insertStyle}
`
const H4 = styled.h4`

    ${({insertStyleBefore})=> insertStyleBefore && insertStyleBefore}

    ${(...rest)=>getCommon(...rest)}


    ${({myStyle}) => myStyle && customizer(myStyle)}
    ${({superStyle}) => superStyle && customizer(superStyle)}
    ${({insertStyle}) => insertStyle && insertStyle}
`
const H5 = styled.h5`

    ${({insertStyleBefore})=> insertStyleBefore && insertStyleBefore}

    ${(...rest)=>getCommon(...rest)}


    ${({myStyle}) => myStyle && customizer(myStyle)}
    ${({superStyle}) => superStyle && customizer(superStyle)}
    ${({insertStyle}) => insertStyle && insertStyle}
`
const H6 = styled.h6`

    ${({insertStyleBefore})=> insertStyleBefore && insertStyleBefore}

    ${(...rest)=>getCommon(...rest)}


    ${({myStyle}) => myStyle && customizer(myStyle)}
    ${({superStyle}) => superStyle && customizer(superStyle)}
    ${({insertStyle}) => insertStyle && insertStyle}
`
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