import React from 'react';
import { Box, Box as Content } from './index'
import {useComponentContext} from '../MyContext'

const Card = ({
    image = false, 
    imageStyle, 
    contentStyle, 
    myStyle, 
    content = false,
    insert,
     ...rest
}) => {
    const {src, alt, width, w, height, h} = image
    const {...props} = useComponentContext() || false
    return (
        <Box 
            insertStyleBefore={ 'display: flex; flex-direction: column;' }
            myStyle={myStyle}
            {...props}
            {...rest}
        >
            {image && 
                <Box
                    superStyle={imageStyle} 
                    myStyle={{ w: '100%', 'img':{ w: '100%', h: '100%' } }}>
                    <img src={src} alt={alt} height={height || h } width={width || w}/>
                </Box>
            }
            {content && 
                <Content  
                    superStyle={contentStyle}
                    myStyle={{
                        w: '100%', jc: 'center', ai: 'center', p: '1rem'
                    }}
                > {content} </Content> 
            }
            {insert && insert}
             
        </Box>
    )
}
export default Card