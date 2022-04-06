import styled from 'styled-components'; 
import {useCompContext as c} from './AtomicContext'
import gp from './getProperties'

let init = "margin: auto; width: 100%;"
let containers = ["article", "aside", "footer", "form", "header", "main", "section"]
let elements = ["img", "nav",  "code", "pre", "button", "span", "blockquote", "q", "hr", "a", "input", 
"textarea", "ul", "ol", "li", "dl", "dt", "dd", "table", "th", "tr", "td", "tbody", "thead", "tfoot", 
"p", "h1", "h2", "h3", "h4", "h5", "h6"]

let res = {Box: styled.div`${init} ${(rest)=>gp({...c(),...rest})}`}
containers.forEach(e => {
        res[e[0].toUpperCase() + e.slice(1)] = styled(e)`${init} ${(rest)=>gp({...c(),...rest})}`})
elements.forEach(e => {
        res[e[0].toUpperCase() + e.slice(1)] = styled(e)`${(rest)=>gp({...c(),...rest})}`})
        
export const {Article, Aside, Box, Footer, Form, Header, Main, Section, Nav,
        Code, Pre, Button, Img, P, H1, H2, H3, H4, H5, H6, Span, Input, 
        Blockquote, Q, Hr, A, Ul, Ol, Li, Dl, Dt, DD, Table, Td, Tr, Th, Thead, Tbody, 
        Tfoot, Textarea } = res