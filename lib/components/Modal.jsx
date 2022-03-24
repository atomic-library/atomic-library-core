import React from 'react';
import {Box } from './index'
import {useComponentContext} from '../AtomicContext'

const Modal = ({children, open = false, ...rest }) => {
    const {...props} = useComponentContext() || false
    return (
        <>
        {open && <Box 
            insertStyleBefore={`
                width: 100vw;
                height: 100vh;
                background: rgba(0,0,0,.5);
                position: fixed;
                top: 0;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                div{
                    display: inline-block;
                }            
            `}
        {...props}
        {...rest}>
            <div  onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
                
        </Box> 
        }
        </>
    )
}

export default Modal