import styled from 'styled-components'; 
import {useCompContext as c} from './AtomicContext'
import {forwardRef as fr} from 'react'
import getProperties from './getProperties'

//c : useCompContext
const gp = getProperties
const init = "margin: auto; width: 100%;"

const Box =  styled.div`${init} ${(rest)=>gp({...c(),...rest})}`

const Article =  styled.article`${init} ${(rest)=>gp({...c(),...rest})}`
const Aside =  styled.aside`${init} ${(rest)=>gp({...c(),...rest})}`
const Footer =  styled.footer`${init} ${(rest)=>gp({...c(),...rest})}`
const Form =  styled.form`${init} ${(rest)=>gp({...c(),...rest})}`
const Header =  styled.header`${init} ${(rest)=>gp({...c(),...rest})}`
const Main =  styled.main`${init} ${(rest)=>gp({...c(),...rest})}`
const Section =  styled.section`${init} ${(rest)=>gp({...c(),...rest})}`
const Img =  styled.img`${(rest)=>gp({...c(),...rest})}`
const Nav =  styled.nav`${(rest)=>gp({...c(),...rest})}`
const Code =  styled.code`${(rest)=>gp({...c(),...rest})}`
const Pre =  styled.pre`${(rest)=>gp({...c(),...rest})}`
const Button =  styled.button`${(rest)=>gp({...c(),...rest})}`
const Span =  styled.span`${(rest)=>gp({...c(),...rest})}`
const Blockquote =  styled.blockquote`${(rest)=>gp({...c(),...rest})}`
const Hr =  styled.hr`${(rest)=>gp({...c(),...rest})}`
const A =  styled.a`${(rest)=>gp({...c(),...rest})}`
const Input =  styled.input`${(rest)=>gp({...c(),...rest})}`
const Textarea =  styled.textarea`${(rest)=>gp({...c(),...rest})}`
const Ul =  styled.ul`${(rest)=>gp({...c(),...rest})}`
const Ol =  styled.ol`${(rest)=>gp({...c(),...rest})}`
const Li =  styled.li`${(rest)=>gp({...c(),...rest})}`
const Table =  styled.table`${(rest)=>gp({...c(),...rest})}`
const Tr =  styled.tr`${(rest)=>gp({...c(),...rest})}`
const Td =  styled.td`${(rest)=>gp({...c(),...rest})}`
const Th =  styled.th`${(rest)=>gp({...c(),...rest})}`
const Tbody =  styled.tbody`${(rest)=>gp({...c(),...rest})}`
const Thead =  styled.thead`${(rest)=>gp({...c(),...rest})}`
const Tfoot =  styled.tfoot`${(rest)=>gp({...c(),...rest})}`
const P =  styled.p`${(rest)=>gp({...c(),...rest})}`
const H1 = styled.h1`${(rest)=>gp({...c(),...rest})}`
const H2 = styled.h2`${(rest)=>gp({...c(),...rest})}`
const H3 = styled.h3`${(rest)=>gp({...c(),...rest})}`
const H4 = styled.h4`${(rest)=>gp({...c(),...rest})}`
const H5 = styled.h5`${(rest)=>gp({...c(),...rest})}`
const H6 = styled.h6`${(rest)=>gp({...c(),...rest})}`


export { Article, Aside, Box, Footer, Form, Header, Main, Section, Nav,
        Code, Pre, Button, Img, P, H1, H2, H3, H4, H5, H6, Span, Input, 
        Blockquote, Hr, A, Ul, Ol, Li, Table, Td, Tr, Th, Thead, Tbody, 
        Tfoot, Textarea}