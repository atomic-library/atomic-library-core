import styled from 'styled-components'; 
import {useComponentContext} from './AtomicContext'
import getProperties from './getProperties'

const init = "margin: auto; width: 100%;"
const BoxArticle =  styled.article`${init} ${(...rest)=>getProperties(...rest)}`
const BoxAside =  styled.aside`${init} ${(...rest)=>getProperties(...rest)}`
const BoxBox =  styled.div`${init} ${(...rest)=>getProperties(...rest)}`
const BoxFooter =  styled.footer`${init} ${(...rest)=>getProperties(...rest)}`
const BoxForm =  styled.form`${init} ${(...rest)=>getProperties(...rest)}`
const BoxHeader =  styled.header`${init} ${(...rest)=>getProperties(...rest)}`
const BoxMain =  styled.main`${init} ${(...rest)=>getProperties(...rest)}`
const BoxSection =  styled.section`${init} ${(...rest)=>getProperties(...rest)}`

const BoxImg =  styled.img`${(...rest)=>getProperties(...rest)}`
const BoxNav =  styled.nav`${(...rest)=>getProperties(...rest)}`
const BoxCode =  styled.code`${(...rest)=>getProperties(...rest)}`
const BoxPre =  styled.pre`${(...rest)=>getProperties(...rest)}`
const BoxButton =  styled.button`${(...rest)=>getProperties(...rest)}`
const BoxSpan =  styled.span`${(...rest)=>getProperties(...rest)}`
const BoxBlockquote =  styled.blockquote`${(...rest)=>getProperties(...rest)}`

const BoxInput =  styled.input`${(...rest)=>getProperties(...rest)}`
const BoxTextarea =  styled.textarea`${(...rest)=>getProperties(...rest)}`

const BoxUl =  styled.ul`${(...rest)=>getProperties(...rest)}`
const BoxOl =  styled.ol`${(...rest)=>getProperties(...rest)}`
const BoxLi =  styled.li`${(...rest)=>getProperties(...rest)}`

const BoxTable =  styled.table`${(...rest)=>getProperties(...rest)}`
const BoxTr =  styled.tr`${(...rest)=>getProperties(...rest)}`
const BoxTd =  styled.td`${(...rest)=>getProperties(...rest)}`
const BoxTbody =  styled.tbody`${(...rest)=>getProperties(...rest)}`
const BoxThead =  styled.thead`${(...rest)=>getProperties(...rest)}`
const BoxTfoot =  styled.tfoot`${(...rest)=>getProperties(...rest)}`

const TagP =  styled.p`${(...rest)=>getProperties(...rest)}`
const TagH1 = styled.h1`${(...rest)=>getProperties(...rest)}`
const TagH2 = styled.h2`${(...rest)=>getProperties(...rest)}`
const TagH3 = styled.h3`${(...rest)=>getProperties(...rest)}`
const TagH4 = styled.h4`${(...rest)=>getProperties(...rest)}`
const TagH5 = styled.h5`${(...rest)=>getProperties(...rest)}`
const TagH6 = styled.h6`${(...rest)=>getProperties(...rest)}`

const Article = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxArticle {...props} {...rest} ref={myRef} className={className}>{children}</BoxArticle>}

const Aside = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxAside {...props} {...rest} ref={myRef} className={className}>{children}</BoxAside>}

const Box = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxBox {...props} {...rest} ref={myRef} className={className}>{children}</BoxBox>}

const Footer = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxFooter {...props} {...rest} ref={myRef} className={className}>{children}</BoxFooter>}

const Form = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxForm {...props} {...rest} ref={myRef} className={className}>{children}</BoxForm>}

const Header = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxHeader {...props} {...rest} ref={myRef} className={className}>{children}</BoxHeader>}

const Main = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxMain {...props} {...rest} ref={myRef} className={className}>{children}</BoxMain>}

const Section = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxSection {...props} {...rest} ref={myRef} className={className}>{children}</BoxSection>}

const Img = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxImg {...props} {...rest} ref={myRef} className={className}>{children}</BoxImg>}

const Nav = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxNav {...props} {...rest} ref={myRef} className={className}>{children}</BoxNav>}
const Code = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxCode {...props} {...rest} ref={myRef} className={className}>{children}</BoxCode>}

const Pre = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxPre {...props} {...rest} ref={myRef} className={className}>{children}</BoxPre>}

const Button = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxButton {...props} {...rest} ref={myRef} className={className}>{children}</BoxButton>}

const Span = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxSpan {...props} {...rest} ref={myRef} className={className}>{children}</BoxSpan>}

const Input = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxInput {...props} {...rest} ref={myRef} className={className}>{children}</BoxInput>}

const Blockquote = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxBlockquote {...props} {...rest} ref={myRef} className={className}>{children}</BoxBlockquote>}

const Textarea = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxTextarea {...props} {...rest} ref={myRef} className={className}>{children}</BoxTextarea>}

const Ul = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxUl {...props} {...rest} ref={myRef} className={className}>{children}</BoxUl>}

const Ol = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxOl {...props} {...rest} ref={myRef} className={className}>{children}</BoxOl>}

const Li = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxLi {...props} {...rest} ref={myRef} className={className}>{children}</BoxLi>}

const Table = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxTable {...props} {...rest} ref={myRef} className={className}>{children}</BoxTable>}

const Tr = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxTr {...props} {...rest} ref={myRef} className={className}>{children}</BoxTr>}

const Td = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxTd {...props} {...rest} ref={myRef} className={className}>{children}</BoxTd>}


const Thead = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxThead {...props} {...rest} ref={myRef} className={className}>{children}</BoxThead>}

const Tbody = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxTbody {...props} {...rest} ref={myRef} className={className}>{children}</BoxTbody>}

const Tfoot = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <BoxTfoot {...props} {...rest} ref={myRef} className={className}>{children}</BoxTfoot>}

const Paragraph = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <TagP {...props} {...rest} ref={myRef} className={className}>{children}</TagP>}

const H1 = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <TagH1 {...props} {...rest} ref={myRef} className={className}>{children}</TagH1>}

const H2 = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <TagH2 {...props} {...rest} ref={myRef} className={className}>{children}</TagH2>}

const H3 = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <TagH3 {...props} {...rest} ref={myRef} className={className}>{children}</TagH3>}

const H4 = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <TagH4 {...props} {...rest} ref={myRef} className={className}>{children}</TagH4>}

const H5 = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <TagH5 {...props} {...rest} ref={myRef} className={className}>{children}</TagH5>}

const H6 = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return <TagH6 {...props} {...rest} ref={myRef} className={className}>{children}</TagH6>}



export {
    Article,
    Aside,
    Box,
    Footer,
    Form,
    Header,
    Main,
    Section,
    Nav,
    Code,
    Pre,
    Button,
    Img,
    Paragraph,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Span,
    Input,
    Blockquote,
    Ul,
    Ol,
    Li,
    Table,
    Td,
    Tr,
    Thead,
    Tbody,
    Tfoot,
    Textarea,
}