import {Box, Section, Header, Footer} from './index'
import {useComponentContext} from '../AtomicContext'
const Card = ({
    s1Content = false, s1Style = false, s1Props = false,
    s2Content = false, s2Style = false, s2Props = false, 
    reverse, row, rowReverse,
    ...rest 
}) => {
    let s1PropsSelf = (!s1Props.head && !s1Props.body && !s1Props.foot && !s1Content.self )? s1Props : s1Props.self
    let s2PropsSelf = (!s2Props.head && !s2Props.body && !s2Props.foot && !s2Content.self )? s2Props : s2Props.self
    const {...props} = useComponentContext() || false
    return (
        <Box
            insertStyleBefore={'flex-direction: column; wrap: wrap;'}
            flex
            flexColumnReverse={reverse}
            flexRow={row}
            flexRowReverse={rowReverse}
            {...props}
            {...rest}
        >
            {s1Content && 
                <Section {...s1PropsSelf} myStyle={!s1Style.self && !s1Style.self && !s1Style.self ? {...s1Style} : {...s1Style.self}}>
                    {s1Content.head && <Header myStyle={{...s1Style.head}} {...s1Props.head} >{s1Content.head}</Header>}
                    {s1Content.body && <Section myStyle={{...s1Style.body}} {...s1Props.body} >{s1Content.body}</Section>}
                    {s1Content.foot && <Footer myStyle={{...s1Style.foot}} {...s1Props.foot} >{s1Content.foot}</Footer>}
                    {s1Content.self && s1Content.self}
                    {s1Content.$$typeof && s1Content}
                </Section>
            }
             {s2Content &&
                <Section {...s2PropsSelf} myStyle={!s2Style.self && !s2Style.self && !s2Style.self ? {...s2Style} : {...s2Style.self}}>
                     {s2Content.head && <Header myStyle={{...s2Style.head}} {...s2Props.head} >{s2Content.head}</Header>}
                    {s2Content.body && <Section myStyle={{...s2Style.body}} {...s2Props.body} >{s2Content.body}</Section>}
                    {s2Content.foot && <Footer myStyle={{...s2Style.foot}} {...s2Props.foot} >{s2Content.foot}</Footer>}
                    {s2Content.self && s2Content.self}
                    {s2Content.$$typeof && s2Content} 
                </Section>
            }
        </Box>
    
    )
}
export default Card
