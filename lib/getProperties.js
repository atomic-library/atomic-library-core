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
  else if (res.length === 5)
    return variants[res[0]][res[1]][res[2]][res[3]][res[4]]
  else if (res.length === 5)
    return variants[res[0]][res[1]][res[2]][res[3]][res[4]][res[5]]
}
const getGradient = (gradient = false) => gradient && (gradient.length >= 3
    ? 'background: linear-gradient(' +
      gradient[2] + 'deg,' +  gradient[0] +  ' 0%,' +  gradient[1] + ' 100%);'
    : 'background: linear-gradient(to right, ' + gradient[0] + ' 0%,' + gradient[1] +' 100%);')

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
  breakpoints,
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
    gradient: rest.gradient && getGradient(rest.gradient),
    size: `max-width: ${Theme.maxWidths[rest.size]};`,
  }

  let specialProps = {}
  Object.keys(rest).forEach(
    (key) => Dictionary.hasOwnProperty(key) && (specialProps[key] = rest[key])
  )
  
    //--------------
    const getValueClasses = (classes) => {
      classes = classes.trim().split(/\s+/g)
      let res = classes.reduce((prev, e) => {
        if(e.includes('{')){
          let styles = e.match(/{.*}/g)[0]
          let selector = e.replace(styles, '')
          styles = styles.slice(1,-1)

          if(styles.includes('{')){
            let subStyles = styles.match(/;.*{.*}/g)
            return prev
          }else {
            let subClasses = styles.split(';')
            return prev += selector + '{' + getValueClasses(subClasses.join(' ')) + '}'
          }
          return prev
        }else{
          let [property, value] = e.split(':')
          return prev += Dictionary[property] + value + ';'
        }
      }, '')
      return res
    }
    let breakRes = ''
  if(breakpoints){
    let points = breakpoints.trim().split(/\s+/g).reverse()
    breakRes = points.reduce((prev, point)=>{
      let values = point
        .match(/{.*}/g)[0]
        .slice(1,-1)
        .split(';')

      let res = getValues(values)
      let selector = point.split('{')[0]
      selector = Theme.breakPoints[selector]
      return prev += selector + '{' + res + '}'
    },'')
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
    
    ${atomicClass ? getValueClasses(atomicClass) : ''}
    ${breakRes}
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