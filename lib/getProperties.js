import { Theme } from './Theme'
import Dictionary from './Dictionary'
import customizer, { getValueTheme } from './customizer'
import Colors from './Colors'
import classes, {scaleStyles,
  scaleTime,
  scaleScale,
  scale2,
  scaleContent,
  scalePositions,
  scaleBreak,
  scaleFractions,
  scale360} from './classes'

function getValueVariants(value) {
  const variants = Theme.variants
  let res = value.split('.')
  if (res.length === 1) return variants[res[0]]
  else if (res.length === 2) return variants[res[0]][res[1]]
  else if (res.length === 3) return variants[res[0]][res[1]][res[2]]
  else if (res.length === 4) return variants[res[0]][res[1]][res[2]][res[3]]
  else if (res.length === 5) return variants[res[0]][res[1]][res[2]][res[3]][res[4]]
  else if (res.length === 5) return variants[res[0]][res[1]][res[2]][res[3]][res[4]][res[5]]
}



const classColors = {
    text: "color: ",
    bg: "background-color:",
    decoration: "text-decoration-color: ",
    border: "border-color:",
    divide: "border-color:" ,
    outline: "outline-color:",
    stroke: "stroke:",
    fill: "fill:",
    accent: "accent-color:",
    caret: "caret-color:",
}


const getValues = (str) => {
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
    let res = str.split("-")

    if(Colors.hasOwnProperty(res[1])) return classColors[res[0]] + Colors[res[1]] + ";"

    if (res.length === 1) return classes[res[0]] || ""
    else if (res.length === 2) return classes[res[0]][res[1]] || ""
    else if (res.length === 3) return classes[res[0]][res[1]][res[2]] || ""
    else if (res.length === 4) return classes[res[0]][res[1]][res[2]][res[3]] || ""
    else if (res.length === 5) return classes[res[0]][res[1]][res[2]][res[3]][res[4]] || ""
    else if (res.length === 5) return classes[res[0]][res[1]][res[2]][res[3]][res[4]][res[5]] || ""
  }
}




const getValueClasses = (str) => {
  if(typeof str === "string"){
    let result = ""
    let values = str.trim().split(/\s+/g)
    
    for(let single of values){
      if(single.includes("|")){
        let elements = single.split("|")
        if(elements.length === 2){
          result += elements[0].replaceAll('_', ' ') + '{' + getValues(elements[1]) + '}'
        }
        else if(elements.length === 3){
          if(Theme.breakPoints.hasOwnProperty(elements[0])){
             result += Theme.breakPoints[elements[0]] + '{' + elements[1].replaceAll('_', ' ') + '{' + getValues(elements[2]) + '}}'
          }
        }
      }else result += getValues(single) + " "
    }
    return result
  }
}


function getProperties({
  hover,
  active,
  focus,
  shading,
  variants,
  x,
  raised,
  insertStyleBefore,
  myStyle,
  superStyle,
  insertStyle,
  contextStyle,
  insertHover,
  insertActive,
  insertFocus,
  atomicClass,
  box,
  ...rest
}) {
  const staticProps = {
    rounded: 'border-radius: 5px;',
    fullRounded: 'border-radius: 150px;',
    flowColumn: rest.grid
      ? 'grid-auto-flow: column;'
      : 'flex-direction: column;',
    flowRow: rest.grid ? 'grid-auto-flow: row;' : 'flex-direction: row;',
    flowColumnReverse: 'flex-direction: column-reverse;',
    flowRowReverse: 'flex-direction: row-reverse;',
    flexWrap: 'flex-wrap: wrap;',
    grid: 'display: grid; grid-template-columns: 1fr 1fr;',
    flex: 'display: flex;',
    inlineBlock: 'display: inline-block;',
    inlineFlex: 'display: inline-flex;',
    cols: rest.cols && `grid-template-columns: ${getValueTheme(rest.cols)};`,
    rows: rest.rows && `grid-template-rows: ${getValueTheme(rest.rows)} ;`,
    areas: rest.areas && `grid-template-areas: ${getValueTheme(rest.areas)};`,
    center: rest.grid
      ? 'align-items: center; justify-items: center;'
      : 'align-items: center; justify-content: center;',
    y: rest.y && `align-items: ${getValueTheme(rest.y)} ;`,
    size: `max-width: ${Theme.maxWidths[rest.size]};`,

  }

  let specialProps = {}
  Object.keys(rest).forEach((key) => Dictionary.hasOwnProperty(key) && (specialProps[key] = rest[key]))

  let boxRes = ""
  if(box){
    let props = ['width:', 'height:', 'padding: ', 'margin:', 'border-radius:', 'display:', 'background:', 'color:']
    let values = box.trim().split(' ')
    for(let i = 0; i < values.length; i++){
        if(values[i] !== '*') boxRes += props[i] + values[i].replaceAll('_', ' ') + ';';
    }
  }
  let raisedRes = ""
  if(raised){
    
  }
    //--------------
   
     
  return `
    box-sizing: border-box;
    ${insertStyleBefore ? insertStyleBefore : ''};
    ${contextStyle ? customizer(contextStyle) : ''}

    ${ variants ? variants.reduce((prev, variant) => (prev += getValueVariants(variant)),''): ''};
    ${Object.entries(staticProps).reduce((prev, [key, value]) => (rest[key] ? (prev += value) : prev),'')};
    ${x && rest.grid ? 'justify-items: ' + getValueTheme(x) + ';' : ''}
    ${x && !rest.grid ? 'justify-content: ' + getValueTheme(x) + ';' : ''}
    ${shading ? (typeof shading === 'boolean' ? 'box-shadow :' + Theme.shading.default + ';' : 'box-shadow :' +Theme.shading[shading]) + ';' : ''}
    
    ${boxRes}
    ${raisedRes}
    ${atomicClass ? getValueClasses(atomicClass) : ''};
    ${customizer(specialProps)};
    ${myStyle ? customizer(myStyle) : ''}
    ${hover ? ':hover {' + customizer(hover) + '}' : ''}
    ${active ? ':active {' + customizer(active) + '}' : ''}
    ${focus ? ':focus {' + customizer(focus) + '}' : ''}
    ${superStyle ? customizer(superStyle) : ''}
    ${insertStyle ? insertStyle : ''}
    ${insertHover ? ':hover {' + insertHover + '}' : ''}
    ${insertActive ? ':active {' + insertActive + '}' : ''}
    ${insertFocus ? ':focus {' + insertFocus + '}' : ''}
`
}
export { getValueVariants, getValueClasses }
export default getProperties