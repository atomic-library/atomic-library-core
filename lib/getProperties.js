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
const getGradient = (gradient = false) => gradient && (
  gradient.length >= 3 ? "background: linear-gradient(" + gradient[2] + "deg," +  gradient[0] + " 0%," + gradient[1] + " 100%);" : 
  "background: linear-gradient(to right, " + gradient[0] + " 0%," + gradient[1] + " 100%);")
  
function getProperties({hover, active, focus, variants, x, insertStyleBefore, myStyle, superStyle, insertStyle, contextStyle, ...rest}) {
  const staticProps = {
    rounded: 'border-radius: 5px;',
    fullRounded: 'border-radius: 100px;',
    flowColumn: rest.grid ? 'grid-auto-flow: column;' : 'flex-direction: column;',
    flowRow: rest.grid ? 'grid-auto-flow: row;' : 'flex-direction: row;',
    flowColumnReverse: 'flex-direction: column-reverse;',
    flowRowReverse: 'flex-direction: row-reverse;',
    flexWrap: 'flex-wrap: wrap;',
    grid: 'display: grid;' + (!rest.cols && 'grid-template-columns: repeat(2, 1fr);'),
    flex: 'display: flex;',
    inlineFlex: 'display: inlineFlex;',
    cols: rest.grid  && `grid-template-columns: ${getValueTheme(rest.cols)};`,
    rows:  rest.rows && `grid-template-rows: ${getValueTheme(rest.rows)} ;`,
    areas:  rest.areas && `grid-template-areas: ${getValueTheme(rest.areas)};`,
    center:  rest.grid ? 'align-items: center; justify-items: center;' : 'align-items: center; justify-content: center;',
    y: rest.y && `align-items: ${getValueTheme(y)} ;`,
    raised: 'box-shadow: 3px 3px 5px #ccc;',
    gradient: getGradient(rest.gradient),
    size: `max-width: ${Theme.maxWidths[rest.size]};`,
  }
  
  let specialProps = {}
  Object.keys(rest).forEach(key => Dictionary.hasOwnProperty(key) && (specialProps[key] = rest[key]))

  return `
    box-sizing: border-box;
    ${insertStyleBefore ? insertStyleBefore : ''};
    ${variants ? variants.reduce((prev, variant) => prev += getValueVariants(variant) , '' ) : '' };
    ${!rest.grid && x ? ('justify-content:' + getValueTheme(x) + ';') : ''}
    ${rest.grid && x ? ('justify-items:' + getValueTheme(x) + ';') : ''}
    
    ${Object.entries(staticProps).reduce((prev, [key, value]) => rest[key] ? (prev += value) : prev , '')}
    ${customizer(specialProps)}
    ${contextStyle ? customizer(contextStyle) : ''}
    ${myStyle ? customizer(myStyle) : ''}
    ${hover && (':hover {' + customizer(hover) + '}')}
    ${active && (':active {' + customizer(active) + '}')}
    ${focus && (':focus {' + customizer(focus) + '}')}
    ${superStyle ? customizer(superStyle) : ''}
    ${insertStyle ? insertStyle : ''}
`}
export { getValueVariants }
export default getProperties