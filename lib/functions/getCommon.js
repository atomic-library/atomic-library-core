import {MaxWidths} from '../main'
import {getValueTheme, getValueVariants} from '../functions'

const getCommon = ({
    size, rounded, fullRounded, raised, span, 
    width, w, height, h, bg, background, 
    padding, p, margin, m, layer, z, variant,

    text, lineHeight, lh, fw, fontWeight, fs, fontSize,
    c, color
}) =>{
    if(variant) variant = getValueVariants(variant)
    if(text) text = getValueTheme(text)
    if(lineHeight) lineHeight = getValueTheme(lineHeight)

    if(lh) lh = getValueTheme(lh)
    if(fw) fw = getValueTheme(fw)
    if(fontWeight) fontWeight = getValueTheme(fontWeight)
    if(fontSize) fontSize = getValueTheme(fontSize)
    if(c) c = getValueTheme(c)
    if(color) color = getValueTheme(color)


    if(span) span = getValueTheme(span)
    if(width) width = getValueTheme(width)
    if(w) w = getValueTheme(w)
    if(height) height = getValueTheme(height)
    if(h) h = getValueTheme(h)
    if(background) background = getValueTheme(background)
    if(bg) bg = getValueTheme(bg)
    if(padding) padding = getValueTheme(padding)
    if(p) p = getValueTheme(p)
    if(margin) margin = getValueTheme(margin)
    if(m) m = getValueTheme(m)
    if(layer) layer = getValueTheme(layer)
    if(z) z = getValueTheme(z)
    return(
    `
    box-sizing: border-box;
    ${variant}
    ${lineHeight && 'line-height:' + lineHeight};
    ${lh && 'line-height:' + lh};
    ${fontWeight && 'font-weight:' + fontWeight};
    ${fw && 'font-weight:' + fw};
    ${fontSize && 'font-size:' + fontSize};
    ${fs && 'font-size:' + fs};
    ${color && 'color:' + color};
    ${c && 'color:' + c};
    ${text && 'text-align:' + text};


    ${size && "max-width:" + MaxWidths[size]};
    ${rounded ? 'border-radius: 5px' : fullRounded ? 'border-radius: 100px' : ''};
    ${raised && 'box-shadow: 3px 3px 5px #ccc'};

    ${span && 'grid-column:' + span};
    ${width && 'width:' + width};
    ${w && 'width:' + w};
    ${height && 'height:' + height};
    ${h && 'height:' + h};
    ${background && 'background:' + height};
    ${bg && 'background:' + bg};
    ${padding && 'padding:' + padding};
    ${p && 'padding:' + p};
    ${margin && 'margin:' + margin};
    ${m && 'margin:' + m};
    ${layer && 'z-index:' + layer};
    ${z && 'z-index:' + z};
`)}
export default getCommon