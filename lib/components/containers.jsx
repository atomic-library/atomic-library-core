import styled from 'styled-components'; 
import {useComponentContext} from '../MyContext'
import getProperties from '../getProperties'

const init = 'width: 100%; margin: auto;'

const BoxArticle =  styled.article`${init} ${(...rest)=>getProperties(...rest)}`
const BoxAside =  styled.aside`${init} ${(...rest)=>getProperties(...rest)}`
const BoxBox =  styled.div`${init} ${(...rest)=>getProperties(...rest)}`
const BoxFooter =  styled.footer`${init} ${(...rest)=>getProperties(...rest)}`
const BoxForm =  styled.form`${init} ${(...rest)=>getProperties(...rest)}`
const BoxHeader =  styled.header`${init} ${(...rest)=>getProperties(...rest)}`
const BoxMain =  styled.main`${init} ${(...rest)=>getProperties(...rest)}`
const BoxSection =  styled.section`${init} ${(...rest)=>getProperties(...rest)}`
const BoxImg =  styled.img`${init} ${(...rest)=>getProperties(...rest)}`
const BoxNav =  styled.nav`${(...rest)=>getProperties(...rest)}`

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

export { Article, Aside, Box, Footer, Form, Header, Main, Section, Nav, Img }