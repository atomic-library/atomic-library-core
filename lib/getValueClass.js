import { Theme } from './Theme'
import Dictionary from './Dictionary'
// import colors from './Colors'
import {scales } from './classes'

let {spacing, colors, fractions} = Theme

scales.colors = Theme.colors
scales.spacing = Theme.spacing
scales.sizes = Theme.sizes
scales.fractions = Theme.fractions
scales.sections = Theme.sections
scales.time = Theme.time
scales.scale = Theme.scale
scales.shadow = Theme.shadow
scales.opacity = Theme.opacity
scales.pixelScale = Theme.pixelScale
const {scaleContent, scaleStyles} = scales

const getValue = (scale, value) =>{
  let obj = scales[scale]
  for(let i = 0; i < value.length; i++) obj = obj[value[i]]
  return obj
}

const scaleFunc = {
  //functions
  "min-h": (value) => {
    if(scaleContent[value[0]]) return "min-heigh: " + getValue("scaleContent", value) + ";"
    else return "min-heigh: " + getValue("spacing", value) + ";"
  },
  "min-w": (value) => {
    if(scaleContent[value[0]]) return "min-width: " + getValue("scaleContent", value) + ";"
    else return "min-width: " + getValue("spacing", value) + ";"
  },
  
  "max-h": (value) => {
    if(scaleContent[value[0]]) return "max-heigh: " + getValue("scaleContent", value) + ";"
    else return "max-heigh: " + getValue("spacing", value) + ";"
  },
  //---------
  "max-w": (value) => {
    if(scaleContent[value[0]]) return "max-width: " + getValue("scaleContent", value) + ";"
    else if(spacing[value[0]]) return "max-width: " + getValue("spacing", value) + ";"
    else if(Theme.sizes[value[0]]) return "width: " + getValue("sizes", value) + ";"
  },
  border: (value) => {
    if(colors.hasOwnProperty(value[0])) return "border-color:" + getValue("colors", value) + ";"
    else if(spacing.hasOwnProperty(value[0])) return  "border-width:" + getValue("spacing", value) + ";"
    else return "border-style:" + scaleStyles[value[0]] + ";"
  }, 
  //-----------
  "border-x": (value) => {
    if(colors.hasOwnProperty(value[0])) return "border-left-color:" + getValue("colors", value) + ";" +"border-right-color:" + getValue("colors", value) + ";"
    else return  "border-left-width:" + getValue("spacing", value) + ";" + "border-right-width:" + getValue("spacing", value) + ";"
  },
  "border-y": (value) => {
    if(colors.hasOwnProperty(value[0])) return "border-top-color:" + getValue("colors", value) + ";" +"border-bottom-color:" + getValue("colors", value) + ";"
    else return  "border-top-width:" + getValue("spacing", value) + ";" + "border-bottom-width:" + getValue("spacing", value) + ";"
  }, 

  "border-t": (value) => {
    if(colors.hasOwnProperty(value[0])) return "border-top-color:" + getValue("colors", value) + ";"
    else return  "border-top-width:" + getValue("spacing", value) + ";"
  }, 
  "border-r": (value) => {
    if(colors.hasOwnProperty(value[0])) return "border-right-color:" + getValue("colors", value) + ";"
    else return  "border-right-width:" + getValue("spacing", value) + ";"
  }, 
  "border-b": (value) => {
    if(colors.hasOwnProperty(value[0])) return "border-bottom-color:" + getValue("colors", value) + ";"
    else return  "border-bottom-width:" + getValue("spacing", value) + ";"
  }, 
  "border-l": (value) => {
    if(colors.hasOwnProperty(value[0])) return "border-left-color:" + getValue("colors", value) + ";"
    else return  "border-left-width:" + getValue("spacing", value) + ";"
  }, 

  divide: (value) => {
    if(colors.hasOwnProperty(value[0])) return "border-color:" + getValue("colors", value) + ";" 
    else return  "border-style:" + getValue("scaleStyles", value) + ";"
  },
  outline: (value) => {
    if(colors.hasOwnProperty(value[0])) return "outline-color:" + getValue("colors", value) + ";"
    else if(spacing.hasOwnProperty(value[0])) return  "outline-width:" + getValue("spacing", value) + ";"
    else return "outline-style:" + scaleStyles[value[0]] + ";"
  }, 
  w: (value) => {
    if(fractions[value[0]]) return "width: " + getValue("fractions", value) + ";"
    else if(scaleContent[value[0]]) return "width: " + getValue("scaleContent", value) + ";"
    else if(spacing[value[0]]) return "width: " + getValue("spacing", value)+ ";"
    else if(Theme.sizes[value[0]]) return "width: " + getValue("sizes", value) + ";"
  },
  h: (value) => {
    if(fractions[value[0]]) return "height: " + getValue("fractions", value) + ";"
    else if(scaleContent[value[0]]) return "height: " + getValue("scaleContent", value) + ";"
    else if(spacing[value[0]]) return "height: " + getValue("spacing", value) + ";"
  },
  basis: (value) => {
    if(fractions[value[0]]) return "flex-basis: " + getValue("fractions", value) + ";"
    else if(spacing[value[0]]) return "flex-basis: " + getValue("spacing", value) + ";"
  },
}
let spacingScale = {
  "outline-offset": "outline-offset: ${value};",
  "font-size": "font-size: ${value};",
  "line-height": "line-height: ${value};",
  "leading": "line-height: ${value};",
  "scroll-m": "scroll-margin: ${value};",
  "scroll-mx": "scroll-margin-left: ${value}; scroll-margin-right: ${value};",
  "scroll-my": "scroll-margin-top: ${value}; scroll-margin-bottom: ${value};",
  "scroll-mt": "scroll-margin-top: ${value};",
  "scroll-mr": "scroll-margin-right: ${value};",
  "scroll-mb": "scroll-margin-bottom: ${value};",
  "scroll-ml": "scroll-margin-left: ${value};",
  "scroll-p": "scroll-padding: ${value};",
  "scroll-px": "scroll-padding-left: ${value}; scroll-padding-right: ${value};",
  "scroll-py": "scroll-padding-top: ${value}; scroll-padding-bottom: ${value};",
  "scroll-pt": "scroll-padding-top: ${value};",
  "scroll-pr": "scroll-padding-right: ${value};",
  "scroll-pb": "scroll-padding-bottom: ${value};",
  "scroll-pl": "scroll-padding-left: ${value};",
  "divide-x": "border-right-width: ${value}; border-left-width: ${value};",//---------
  "divide-y": "border-top-width: ${value}; border-bottom-width: ${value};",
  rounded: "border-radius: ${value};",
  "rounded-t": "border-top-left-radius: ${value}; border-top-right-radius: ${value};",
  "rounded-b": "border-bottom-right-radius: ${value};border-bottom-left-radius: ${value};",
  "rounded-l": "border-top-left-radius: ${value}; border-bottom-left-radius: ${value};",
  "rounded-r": "border-top-right-radius: ${value};border-bottom-right-radius: ${value};",
  "rounded1": "border-top-left-radius: ${value};",
  "rounded2": "border-top-right-radius: ${value};",
  "rounded3": "border-bottom-right-radius: ${value};",
  "rounded4": "border-bottom-left-radius: ${value};",
  p: "padding: ${value};",
  pt: "padding-top: ${value};", 
  pr: "padding-right: ${value};",
  pb: "padding-bottom: ${value};",
  pl: "padding-left: ${value};",
  py: "padding-top: ${value}; padding-bottom: ${value};",
  px: "padding-left: ${value}; padding-right: ${value};",
  m: "margin: ${value};",
  mt: "margin-top: ${value};",
  mr: "margin-right: ${value};",
  mb: "margin-bottom: ${value};",
  ml: "margin-left: ${value};",
  leading: "line-height: ${value};",
  decoration: "text-decoration-thickness: ${value};",
  "underline-offset": "text-underline-offset: ${value};",
  my: "margin-top: ${value};" +"margin-bottom: ${value};",
  mx: "margin-left: ${value};" +"margin-right: ${value};",
  outline: "outline-width:${value};",
  offset: "outline-offset:${value};",
  stroke: "stroke-width: ${value};",
  indent: "text-indent: ${value};",
  top: "top:${value};",
  bottom: "bottom:${value};",
  left: "left:${value};",
  right: "right:${value};",
  "space-x": "margin-left: ${value};",
  "space-y": "margin-top: ${value};",
  gap: "gap: ${value};",
  "gap-x": "column-gap: ${value};",
  "gap-y": "row-gap:${value};",
  "translate-x": "transform: translateX(${value});",
  "translate-y": "transform: translateY(${value});",
  inset: "top: ${value}; right: ${value}px; bottom: ${value}px; left: ${value};",
  "inset-y": "top: ${value}; bottom: ${value};",
  "inset-x": "left: ${value};right: ${value};",
  "border-x": "border-left-width:  ${value}; border-right-width:  ${value};",
  "border-y": "border-top-width:  ${value}; border-bottom-width: ${value};",
}
const scaledClasses = {
  //opacity
  opacity: ["opacity",  "opacity:  ${value};"],
  "backdrop-opacity": ["opacity",  "backdrop-filter: opacity(${value});"],
  //pixelScale
  blur: ["pixelScale",  "filter: blur(${value});"],
  "backdrop-blur-none": ["pixelScale",  "backdrop-filter: blur(${value});"],
  blur: ["pixelScale",  "filter: blur(${value});"],
  //colors
  text: ["colors",  "color:  ${value};"],
  bg: ["colors", "background-color: ${value};"],
  decoration: ["colors", "text-decoration-color:  ${value};"],

  outline: ["colors", "outline-color: ${value};"],
  stroke: ["colors", "stroke: ${value};"],
  fill: ["colors", "fill: ${value};"],
  accent: ["colors", "accent-color: ${value};"],
  caret: ["colors", "caret-color: ${value};"],
  //shadow
  shadow: ["shadow", "box-shadow: ${value};"],
  
  //break
  after: ["scaleBreak", "break-after:${value};"],
  before: ["scaleBreak", "break-before: ${value};"],
  //time
  duration: ["time", "transition-duration: ${value};"],
  delay: ["time", "transition-delay: ${value};"],
  //scale
  scale: ["scale", "transform: scale(${value});"],//---------]-
  "scale-y": ["scale", "transform: scaleY(${value});"],
  "scale-x": ["scale", "transform: scaleX( ${value});"],
  brightness: ["scale", "filter: brightness(${value});" ],
  contrast: ["scale", "filter: contrast(${value});" ],
  saturate: ["scale", "filter: saturate(${value});" ],
  "backdrop-brightness": ["scale", "backdrop-filter: brightness(${value});" ],
  "backdrop-contrast": ["scale", "backdrop-filter: contrast(${value});" ],
  "backdrop-saturate": ["scale", "backdrop-filter: saturate(${value});" ],
  //style
  outline: ["scaleStyles", "outline-style:${value};"],
  decoration:["scaleStyles",  "text-decoration-style: ${value};"],
  divide: ["scaleStyles", "border-style: ${value};"],
  //content
  "auto-cols": ["scaleContent", "grid-auto-columns:${value};"],
  "auto-rows": ["scaleContent", "grid-auto-rows:${value};"],
  
  //------------sections 360
  columns: ["sections", "columns:${value};"],
  order: ["sections", "order: ${value};"],
  "grid-cols": ["sections", "grid-template-columns: repeat(${value}, minmax(0, 1fr));"],
  "grid-rows": ["sections", "grid-template-rows: repeat(${value}, minmax(0, 1fr));"],
  "col-span": ["sections", "grid-column: span ${value} / span ${value};"],
  "col-start": ["sections", "grid-column-start:${value};"],
  "col-end": ["sections", "grid-column-end:${value};"],

  "row-span": ["sections", "grid-row: span ${value} / span ${value};"],
  "row-start": ["sections", "grid-row-start:${value};"],
  "row-end": ["sections", "grid-row-end:${value};"],

  "hue-rotate": ["sections", "filter: hue-rotate(${value}deg);"],
  "backdrop-hue-rotate": ["sections", "backdrop-filter: hue-rotate(${value}deg);"],
  
  rotate: ["sections", "transform: rotate(${value}deg);"],
  "skew-x": ["sections", "transform: skewX(${value}deg);"],
  "skew-y": ["sections", "transform: skewY(${value}deg);"],  
}


const getValueClass = (str) => {

    str = str.trim()
    if(str.includes(":")){
      let [property, value] = str.split(':');
      return Dictionary[property] + value.replaceAll('_', ' ') + ';'
    }
    else if(Theme.classes.hasOwnProperty(str)) return Theme.classes[str]
    else{

      let negative = ""
      if(str[0] === "-") {negative = "-"; str = str.slice(1)}

      let parts = str.split("-")
      
      if(scaleFunc.hasOwnProperty(parts[0])) return scaleFunc[parts[0]](parts.slice(1))
      if(scaleFunc.hasOwnProperty(parts[0]+"-"+parts[1])) return scaleFunc[parts[0]+"-"+parts[1]](parts.slice(2))

      if(spacingScale.hasOwnProperty(parts[0])){
        let sentence = spacingScale[parts[0]]
        let value = parts.slice(1)
        let obj = scales.spacing
        for(let i = 0; i < value.length; i++) obj = obj[value[i]]
        return sentence.replaceAll("${value}", negative + obj )
      }
      if(spacingScale.hasOwnProperty(parts[0]+"-"+parts[1])){
        let sentence = spacingScale[parts[0]+"-"+parts[1]]
        let value = parts.slice(2)
        let obj = scales.spacing
        for(let i = 0; i < value.length; i++) obj = obj[value[i]]
        return sentence.replaceAll("${value}", negative + obj )
      }

      if(scaledClasses.hasOwnProperty(parts[0])){
        let [scale, classValue] = scaledClasses[parts[0]]
        let value = parts.slice(1)
        let obj = scales[scale]
        for(let i = 0; i < value.length; i++) obj = obj[value[i]]
        return classValue.replaceAll("${value}", negative + obj )
      }
      else{
        let [scale, classValue] = scaledClasses[parts[0]+"-"+parts[1]]
        let value = parts.slice(2)
        let obj = scales[scale]
        for(let i = 0; i < value.length; i++) obj = obj[value[i]]
        return classValue.replaceAll("${value}", negative + obj )
      }
      
    }
  }

  export default getValueClass
  //indent
  