import { Theme } from './Theme'
import Dictionary from './Dictionary'
import customizer, { getValueTheme } from './customizer'

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

function getProperties({
  hover,
  active,
  focus,
  shading,
  variants,
  x,
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
    raised: `transition: box-shadow .2s; box-shadow:${Theme.shading.default}; :hover{transition: box-shadow .2s;box-shadow :${Theme.shading[4]};}`
  }

  let specialProps = {}
  Object.keys(rest).forEach((key) => Dictionary.hasOwnProperty(key) && (specialProps[key] = rest[key]))

  let boxRes = ""
  if(box){
    let props = ['width:', 'height:', 'padding: ', 'margin:', 'border-radius:', 'display:', 'background:', 'color:']
    let values = box.trim().split(' ')
    for(let i = 0; i < values.length; i++){
        if(values[i] !== '*') boxRes += props[i] + values[i].replaceAll('/s', ' ') + ';';
    }
  }
    //--------------
    const getValueClasses = (classes) => {
      if(typeof classes === 'string'){
        return classes.trim().split(/\s+/g).reduce((prev, e) => {
          let [property, value] = e.split(':');
          return prev += Dictionary[property] + value.replaceAll('/s', ' ') + ';'
        }, '')
      }
      else if(Array.isArray(classes)){

        return classes.reduce((prev, e) =>{
          let values = e.trim().split(' ')
          let res = ""
          if(Theme.breakPoints.hasOwnProperty(values[0])) res += Theme.breakPoints[values[0]] + '{'
          if(values[1] !== '*') res += values[1].replaceAll('/s', ' ') + '{'

          for(let i = 2; i < values.length; i++){
            let [property, value] = values[i].split(':');
            res += Dictionary[property] + value.replaceAll('/s', ' ') + ';'
          }

          if(values[1] !== '*') res += values[1] + '}'
          if(Theme.breakPoints.hasOwnProperty(values[0])) res +=  '}'
    
          return prev + res
        }, '')
      }
    } 
     
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
    ${atomicClass ? getValueClasses(atomicClass) : ''}
    ${customizer(specialProps)}
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
export { getValueVariants }
export default getProperties