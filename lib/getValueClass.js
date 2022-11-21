import { Theme } from './Theme'
import Dictionary from './Dictionary'
import Colors from './Colors'
import classes, {
  scaleStyles,
  scaleTime,
  scaleScale,
  scale2,
  scaleContent,
  scalePositions,
  scaleBreak,
  scaleFractions,
  scale360} from './classes'


const all = {
  ...scaleStyles,
  ...scaleTime,
  ...scaleScale,
  ...scale2,
  ...scaleContent,
  ...scalePositions,
  ...scaleBreak,
  ...scaleFractions,
  ...scale360,
  ...Colors
}

const allClass = {
  //colors
  text: (value) => "color: " + Colors[value] + ";",
  bg: (value) => "background-color:" + Colors[value] + ";",
  decoration: (value) => "text-decoration-color: " + Colors[value] + ";",
  border: (value) => {
    if(Colors.hasOwnProperty(value)) return "border-color:" + Colors[value] + ";"
    else if(scale2.hasOwnProperty(value)) return  "border-width:" + scale2[value] + "px ;"
    else return "border-style:" + scaleStyles[value] + ";"
  }, //----------------
  divide: (value) => "border-color:"  + Colors[value] + ";",
  dividex: value => "border-right-width: " + scale2[value] + "px; border-left-width: " + scale2[value] + "px;",//---------
  dividey: value => "border-top-width: " + scale2[value] + "px; border-bottom-width: " + scale2[value] + "px;",
  outline: (value) => "outline-color:" + Colors[value] + ";",
  stroke: (value) => "stroke:" + Colors[value] + ";",
  fill: (value) => "fill:" + Colors[value] + ";",
  accent: (value) => "accent-color:" + Colors[value] + ";",
  caret: (value) => "caret-color:" + Colors[value] + ";",
  //fractions
  w: (value) => {
    if(scaleFractions[value]) return "width: " + scaleFractions[value] + ";"
    else if(scaleContent[value]) return "width: " + scaleContent[value] + ";"
    else if(scale2[value]) return "width: " + scale2[value] + ";"
  },
  h: (value) => {
    if(scaleFractions[value]) return "height: " + scaleFractions[value] + ";"
    else if(scaleContent[value]) return "height: " + scaleContent[value] + ";"
    else if(scale2[value]) return "height: " + scale2[value] + ";"
  },
  basis: (value) => {
    if(scaleFractions[value]) return "flex-basis: " + scaleFractions[value] + ";"
    else if(scale2[value]) return "flex-basis: " + scale2[value] + ";"
  },
  //break
  after: (value) => "break-after:"  + scaleBreak[value] + ";",
  before: (value) => "break-before: " + scaleBreak[value] + ";",
  //time
  duration: (value) => "transition-duration: " + scaleTime[value] + ";",
  delay: (value) => "transition-delay: " + scaleTime[value] + ";",
  //scale
  scale: (value) => "transform: scale("  + scaleScale[value] + ");",//----------
  scaley: (value) => "transform: scaleY("  + scaleScale[value] + ");",
  scalex: (value) => "transform: scaleX( " + scaleScale[value] + ");",
  //style
  outline: (value) => "outline-style:" + scaleStyles[value] + ";",
  decoration: (value) => "text-decoration-style: " + scaleStyles[value] + ";",
  divide: (value) => "border-style: " + scaleStyles[value] + ";",
  //content
  min: {
    w: (value) => "min-width: " + scaleContent[value] + ";",
    h: (value) => "min-heigh: " + scaleContent[value] + ";",
  },
  max:{
    h: (value) => {
      if(scaleContent[value]) return "max-heigh: " + scaleContent[value] + ";"
      else if(scale2[value]) return "max-heigh: " + scale2[value] + ";"
    },
    w: (value) => {
      if(scaleContent[value]) return "max-width: " + scaleContent[value] + ";"
      else if(scale2[value]) return "max-width: " + scale2[value] + ";"
    },
 
  },
  auto: {
    cols: (value) => "grid-auto-columns:" + scaleContent[value] + ";",
    rows: (value) => "grid-auto-rows:" + scaleContent[value] + ";",
  },
  //scale2
  rounded: value => value === "full" ?  "border-radius: 999px ;" :  "border-radius: " + scale2[value] + ";",
  p: value => "padding: " + scale2[value] + ";",
  pt: value => "padding-top: " + scale2[value] + ";",
  pr: value => "padding-right: " + scale2[value] + ";",
  pb: value => "padding-bottom: " + scale2[value] + ";",
  pl: value => "padding-left: " + scale2[value] + ";",

  py: value => "padding-top: " + scale2[value] + ";" +"padding-bottom: " + scale2[value] + ";",
  px: value => "padding-left: " + scale2[value] + ";" +"padding-right: " + scale2[value] + ";",
  m: value => "margin: " + scale2[value] + ";",
  mt: value => "margin-top: " + scale2[value] + ";",
  mr: value => "margin-right: " + scale2[value] + ";",
  mb: value => "margin-bottom: " + scale2[value] + ";",
  ml: value => "margin-left: " + scale2[value] + ";",
  leading: value => "line-height: " + scale2[value] + ";",
  rotate: value => "transform: rotate("+scale360[value]+"deg);",
  decoration: value => "text-decoration-thickness: " + scale2[value] + ";",
  underlineOffset: value => "text-underline-offset: " + scale2[value] + ";",

  my: value => "margin-top: " + scale2[value] + ";" +"margin-bottom: " + scale2[value] + ";",
  mx: value => "margin-left: " + scale2[value] + ";" +"margin-right: " + scale2[value] + ";",
  outline: value => "outline-width:" + scale2[value] + ";",
  offset: value => "outline-offset:" + scale2[value] + ";",
  stroke: value => "stroke-width: "+scale2[value]+";",
  indent: value => "text-indent: " + scale2[value] + ";",

  top: value => "top:" + scale2[value] + ";",
  bottom: value => "bottom:" + scale2[value] + ";",
  left: value => "left:" + scale2[value] + ";",
  right: value => "right:" + scale2[value] + ";",

  skew:{  
    x: value => "transform: skewX(" + scale360[value] + "deg);",
    y: value => "transform: skewY(" + scale360[value] + "deg);",
  },
  space:{
    x: value => "margin-left: " + scale2[value] + ";",
    y: value => "margin-top: " + scale2[value] + ";",
  },
  gap: value => "gap: " + scale2[value] + ";",
  
  // gap: {
  //   base: value => "gap: " + scale2[value] + ";",
  //   x: value => "column-gap: " + scale2[value] + ";",
  //   y: value => "row-gap:" + scale2[value] + ";",
  // },
  translate: {
    x: value => "transform: translateX(" + scale2[value] + ");",
    y: value => "transform: translateY(" + scale2[value] + ");",
  },
  inset:{
    base: value => "top: "+scale2[value]+"px; right: "+scale2[value]+"px; bottom: "+scale2[value]+"px; left: "+scale2[value]+"px;",
    y: value => "top: "+scale2[value]+"px; bottom: "+scale2[value]+"px;",
    x: value => "left: "+scale2[value]+"px;right: "+scale2[value]+"px;",
  },
  //inset: value => "top: "+scale2[value]+"px; right: "+scale2[value]+"px; bottom: "+scale2[value]+"px; left: "+scale2[value]+"px;",
  order: value => "order:" + scale2[value] + ";",

  grid:{
    cols: value => "grid-template-columns: repeat(" + scale360[value] + ", minmax(0, 1fr));",
    rows: value => "grid-template-rows: repeat(" + scale360[value] + ", minmax(0, 1fr));",
  },
  col:{
    span: value => "grid-column: span " + scale360[value] +" / span " + scale360[value] + ";",
    start: value => "grid-column-start:" + scale360[value] +";",
    end: value => "grid-column-end:" + scale360[value] +";",
  },
  row:{
    span: value => "grid-row: span " + scale360[value] +" / span " + scale360[value] + ";",
    start: value => "grid-row-start:" + scale360[value] +";",
    end: value => "grid-row-end:" + scale360[value] +";",
  },
  borderx: value => "border-left-width: " + scale2[value] + "px; border-right-width: " + scale2[value] +"px;",
  bordery: value => "border-top-width: " + scale2[value] + "px; border-bottom-width: " + scale2[value] +"px;",
}

const classUnit = {
  flex: "display: flex;",
  grid: "display: grid;",
  table: "display: table;",
  inline:	"display: inline;",
  border: "border: 1px solid #ccc;",
  isolate: "isolation: isolate;",
  isolationAuto: "isolation: auto;",
  static: "position: static;",
  fixed: "position: fixed;",
  absolute: "position: absolute;",
  relative: "position: relative;",
  sticky: "position: sticky;",
  visible: "visibility: visible;",
  invisible: "visibility: hidden;",
  hidden:	"display: none;",
  italic: "font-style: italic;",
  notItalic: "font-style: normal;",//
  antialiased: "-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;",
  subpixelAntialiased: "-webkit-font-smoothing: auto;-moz-osx-font-smoothing: auto;",
  underline: "text-decoration-line: underline;",
  overline: "text-decoration-line: overline;",
  lineThrough: "text-decoration-line: line-through;",
  noUnderline: "text-decoration-line: none;",
  uppercase: "text-transform: uppercase;",
  lowercase: "text-transform: lowercase;",
  capitalize: "text-transform: capitalize;",
  normalcase: "text-transform: none;",
  shadow:	"box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
  rounded: "border-radius: 5px;",
  grow:	"flex-grow: 1;",
  grow0:	"flex-grow: 0;",
  shrink:	"flex-shrink: 1;",
  shrink0:	"flex-shrink: 0;",
}



const getValueClass = (str) => {
    if(str.includes("{") || str.includes("}")) {
      if(str.includes("@media")){
        let breakpoint = str.split("-")[1].replaceAll("{", "")
        return Theme.breakPoints[breakpoint] + "{"
      }
      return str
    }
  
    if(str.includes(":")){
      let [property, value] = str.split(':');
      return Dictionary[property] + value.replaceAll('_', ' ') + ';'
    }else{
    
      let negativo = ""
      if(str.startsWith("-")) negativo = "-"
      let res = str.split("-").filter( str => str != "")
     
      if(res.length === 1 ) return classUnit[res[0]] || ""
      else if ( res.length > 1 && allClass.hasOwnProperty(res[0]) ) {
        let value = negativo + res.pop()
        let object = allClass
        for(let i = 0; i <= res.length -1; i++) object[res[i]] && (object = object[res[i]])
        return object(value)
      }
      else{
        
        let object = classes
        for(let i = 0; i <= res.length -1; i++) {
          if(object[res[i]]) object = object[res[i]]
          else{
            console.warn(str +" does not exits")
            return ""
          }
        }
        return object
      }
    }
  }

  export default getValueClass

  //indent