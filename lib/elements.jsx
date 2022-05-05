import styled from 'styled-components'; 
import {useCompContext as c} from './AtomicContext'
import gp from './getProperties'

let init = "margin: auto; width: 100%;"
let containers = ["article", "aside", "footer", "form", "header", "main", "section"]
let elements = ["img", "nav",  "code", "pre", "button", "span", "blockquote", "q", "hr", "a", "input", 
"textarea", "ul", "ol", "li", "dl", "dt", "dd", "table", "th", "tr", "td", "tbody", "thead", "tfoot", 
"p", "h1", "h2", "h3", "h4", "h5", "h6", "label", "audio", "video", "canvas", "fieldset", "iframe",
"legend", "caption", "cite"]

let res = new Object

res.Box = styled.div.attrs(props => ({...c(), ...props}))`${init} ${(rest)=>gp({...rest})}`

containers.forEach(e => {
        res[e[0].toUpperCase() + e.slice(1)] = styled(e).attrs(props => ({...c(), ...props}))`${init} ${(rest)=>gp({...rest})}`})
elements.forEach(e => {
        res[e[0].toUpperCase() + e.slice(1)] = styled(e).attrs(props => ({...c(), ...props}))`${(rest)=>gp({...rest})}`})
        
export const {
        Article, Aside, Box, Footer, Form, Header, Main, Section, Nav,
        Code, Pre, Button, Img, P, H1, H2, H3, H4, H5, H6, Span, Input, 
        Blockquote, Q, Hr, A, Ul, Ol, Li, Dl, Dt, DD, Table, Td, Tr, Th, Thead, Tbody, 
        Tfoot, Textarea, Label, Audio, Video, Canvas, Fieldset, Iframe, Legend, 
        Caption, Cite
} = res