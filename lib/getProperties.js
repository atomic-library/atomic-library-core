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
const getGradient = (gradient = false) => gradient && (
    gradient.length >= 3 ? 
      "background: linear-gradient(" + gradient[2] + "deg," +  gradient[0] + " 0%," + gradient[1] + " 100%);"
        : 
      "background: linear-gradient(to right, " + gradient[0] + " 0%," + gradient[1] + " 100%);"
    )
function getProperties({
  size, rounded, fullRounded, raised, variants,
  flex, inlineFlex, y, x, center, flexColumn,
  flexColumnReverse, flexRow, flexRowReverse, flexWrap,
  grid, cols, rows, areas, insertStyleBefore,
  myStyle, superStyle, insertStyle, contextStyle, gradient,
  ...rest
}) {
  let res = ''
  let resVariants = ''
    
  if (variants)
    variants.forEach((variant) => (resVariants += getValueVariants(variant)))

    res += `
      box-sizing: border-box;
    ${insertStyleBefore ? insertStyleBefore : ''};
    ${resVariants ? resVariants : '' };
    ${size ? 'max-width:' + Theme.maxWidths[size] + ';': ''}
    ${rounded ? 'border-radius: 5px;' : fullRounded ? 'border-radius: 100px;' : '' }
    ${raised ? 'box-shadow: 3px 3px 5px #ccc;' : ''}
    ${gradient ? getGradient(gradient) : ''}
    ${y ? 'align-items: ' + getValueTheme(y) + ';': ''}
    ${x && grid ? ('justify-items: ' + getValueTheme(x) + ';') : x ? ('justify-content: ' + getValueTheme(x) + ';') : ''}
    ${raised ? 'box-shadow: 3px 3px 5px #ccc;' : ''}
`
  if (flex || inlineFlex) {
    res += `
        ${flex ? 'display: flex;' : ''}
        ${inlineFlex ? 'display: inline-flex;' : ''}
        ${flexWrap ? 'flex-wrap: wrap;' : ''}
        ${center ? 'align-items: center; justify-content: center;' : ''}
    
        flex-direction: ${
          flexColumn ? 'column' : 
          flexColumnReverse ? 'column-reverse' : 
          flexRow ? 'row' : 
          flexRowReverse ? 'row-reverse' : ''
        };
    `
  }

  if (grid) {
    res += 'display: grid;'
    if (cols) res += `grid-template-columns: ${getValueTheme(cols)};`
    else res += 'grid-template-columns: repeat(2, 1fr);'
    if (rows) res += `grid-template-rows: ${getValueTheme(rows)} ;`
    if (areas) res += `grid-template-areas: ${getValueTheme(areas)};`
    if (center) res += 'align-items: center; justify-items: center;'
  }

let specialProps = {}
  Object.keys(rest).forEach((key) => Dictionary.hasOwnProperty(key) ? specialProps[key] = rest[key] : '') 

  return res += `
${customizer(specialProps)}
${contextStyle ? customizer(contextStyle) : ''}
${myStyle ? customizer(myStyle) : ''}
${superStyle ? customizer(superStyle) : ''}
${insertStyle ? insertStyle : ''}
`}
export { getValueVariants }
export default getProperties