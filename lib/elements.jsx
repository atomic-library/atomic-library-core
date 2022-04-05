import styled from 'styled-components'; 
import {useCompContext as c} from './AtomicContext'
import {forwardRef as fr} from 'react'
import getProperties from './getProperties'

//p: props
//r: ref
//c : useCompContext
const gp = getProperties
const init = "margin: auto; width: 100%;"

const BoxBox =  styled.div`${init} ${(rest)=>gp(rest)}`
const BoxArticle =  styled.article`${init} ${(rest)=>gp(rest)}`
const BoxAside =  styled.aside`${init} ${(rest)=>gp(rest)}`
const BoxFooter =  styled.footer`${init} ${(rest)=>gp(rest)}`
const BoxForm =  styled.form`${init} ${(rest)=>gp(rest)}`
const BoxHeader =  styled.header`${init} ${(rest)=>gp(rest)}`
const BoxMain =  styled.main`${init} ${(rest)=>gp(rest)}`
const BoxSection =  styled.section`${init} ${(rest)=>gp(rest)}`
const BoxImg =  styled.img`${(rest)=>gp(rest)}`
const BoxNav =  styled.nav`${(rest)=>gp(rest)}`
const BoxCode =  styled.code`${(rest)=>gp(rest)}`
const BoxPre =  styled.pre`${(rest)=>gp(...rest)}`
const BoxButton =  styled.button`${(rest)=>gp(rest)}`
const BoxSpan =  styled.span`${(rest)=>gp(rest)}`
const BoxBlockquote =  styled.blockquote`${(rest)=>gp(rest)}`
const BoxHr =  styled.hr`${(rest)=>gp(rest)}`
const BoxA =  styled.a`${(rest)=>gp(rest)}`
const BoxInput =  styled.input`${(...rest)=>gp(rest)}`
const BoxTextarea =  styled.textarea`${(rest)=>gp(rest)}`
const BoxUl =  styled.ul`${(rest)=>gp(rest)}`
const BoxOl =  styled.ol`${(rest)=>gp(rest)}`
const BoxLi =  styled.li`${(rest)=>gp(rest)}`
const BoxTable =  styled.table`${(rest)=>gp(rest)}`
const BoxTr =  styled.tr`${(rest)=>gp(rest)}`
const BoxTd =  styled.td`${(rest)=>gp(rest)}`
const BoxTh =  styled.th`${(rest)=>gp(rest)}`
const BoxTbody =  styled.tbody`${(rest)=>gp(rest)}`
const BoxThead =  styled.thead`${(rest)=>gp(rest)}`
const BoxTfoot =  styled.tfoot`${(rest)=>gp(rest)}`
const TagP =  styled.p`${(rest)=>gp(rest)}`
const TagH1 = styled.h1`${(rest)=>gp(rest)}`
const TagH2 = styled.h2`${(rest)=>gp(rest)}`
const TagH3 = styled.h3`${(rest)=>gp(rest)}`
const TagH4 = styled.h4`${(rest)=>gp(rest)}`
const TagH5 = styled.h5`${(rest)=>gp(rest)}`
const TagH6 = styled.h6`${(rest)=>gp(rest)}`

const Box = fr((p, r) => <BoxBox {...c()} {...p} ref={r} />)
const Article = fr((p, r) =>  <BoxArticle {...c()} {...p} ref={r} />)
const Aside = fr((p, r) => <BoxAside {...c()} {...p} ref={r} />)
const Footer = fr((p, r) => <BoxFooter {...c()} {...p} ref={r} />)
const Form = fr((p, r) => <BoxForm {...c()} {...p} ref={r} />)
const Header = fr((p, r) => <BoxHeader {...c()} {...p} ref={r} />)
const Main = fr((p, r) => <BoxMain {...c()} {...p} ref={r} />)
const Section = fr((p, r) => <BoxSection {...c()} {...p} ref={r} />)
const Img = fr((p, r) => <BoxImg {...c()} {...p} ref={r} />)
const Nav = fr((p, r) => <BoxNav {...c()} {...p} ref={r} />)
const Code = fr((p, r) => <BoxCode {...c()} {...p} ref={r} />)
const Pre = fr((p, r) => <BoxPre {...c()} {...p} ref={r} />)
const Button = fr((p, r) => <BoxButton {...c()} {...p} ref={r} />)
const Span = fr((p, r) => <BoxSpan {...c()} {...p} ref={r} />)
const Blockquote = fr((p, r) => <BoxBlockquote {...c()} {...p} ref={r} />)
const Hr = fr((p, r) => <BoxHr {...c()} {...p} ref={r} />)
const A = fr((p, r) => <BoxA {...c()} {...p} ref={r} />)
const P = fr((p, r) => <TagP {...c()} {...p} ref={r}/>)
const Textarea = fr((p, r) => <BoxTextarea {...c()} {...p} ref={r} />)
const Input = fr((p, r) => <BoxInput {...c()} {...p} ref={r} />)
const Ul = fr((p, r) => <BoxUl {...c()} {...p} ref={r} />)
const Ol = fr((p, r) => <BoxOl {...c()} {...p} ref={r} />)
const Li = fr((p, r) => <BoxLi {...c()} {...p} ref={r} />)
const Table = fr((p, r) => <BoxTable {...c()} {...p} ref={r} />)
const Tr = fr((p, r) => <BoxTr {...c()} {...p} ref={r} />)
const Td = fr((p, r) => <BoxTd {...c()} {...p} ref={r} />)
const Th = fr((p, r) => <BoxTh {...c()} {...p} ref={r} />)
const Thead = fr((p, r) => <BoxThead {...c()} {...p} ref={r} />)
const Tbody = fr((p, r) => <BoxTbody {...c()} {...p} ref={r} />)
const Tfoot = fr((p, r) => <BoxTfoot {...c()} {...p} ref={r} />)
const H1 = fr((p, r) => <TagH1 {...c()} {...p} ref={r} />)
const H2 = fr((p, r) => <TagH2 {...c()} {...p} ref={r} />)
const H3 = fr((p, r) => <TagH3 {...c()} {...p} ref={r} />)
const H4 = fr((p, r) => <TagH4 {...c()} {...p} ref={r} />)
const H5 = fr((p, r) => <TagH5 {...c()} {...p} ref={r} />)
const H6 = fr((p, r) => <TagH6 {...c()} {...p} ref={r} />)

export { Article, Aside, Box, Footer, Form, Header, Main, Section, Nav,
        Code, Pre, Button, Img, P, H1, H2, H3, H4, H5, H6, Span, Input, 
        Blockquote, Hr, A, Ul, Ol, Li, Table, Td, Tr, Th, Thead, Tbody, 
        Tfoot, Textarea}