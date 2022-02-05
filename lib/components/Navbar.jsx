import React from 'react';
import {Header, Nav}  from './index'
import {useComponentContext} from '../MyContext'

const headerStyles = {
    top : "width: 100%; height: 80px; top: 0; aling-items: center;",
    bottom : "width: 100%; height: 80px; bottom: 0;",
    right : "display: inline-block; width: 80px; height: 100vh; right: 0; ",
    left : "display: inline-block; width: 80px; height: 100vh; left: 0; "
}
const navStyles = {
    top : "flex-direction: row; max-width: 1200px;",
    bottom : "flex-direction: row ; max-width: 1200px;",
    right : "flex-direction: column; max-height: 800px;",
    left : "flex-direction: column; max-height: 800px;"
}
const Navbar = ({children, location, header, nav, position, ...rest}) => {
    const {...props} = useComponentContext() || false
    return (
        <Header
            insertStyleBefore={headerStyles[location || 'top'] + ".active {font-weight: 500;}"}
            myStyle={{pt: position, m: '0px'}}
            superStyle={header}
            {...props}
            {...rest}
        >
            <Nav
                flex
                x="space-between"
                insertStyleBefore={navStyles[location || 'top']}
                myStyle={{ h: '100%', w: '100%', m: 'auto', p: '10px' }}
                superStyle={nav}
            >
                {children}
            </Nav>
        </Header>
    )
}
export default Navbar