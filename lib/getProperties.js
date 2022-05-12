import { Theme } from './Theme'
import Dictionary from './Dictionary'
import customizer, { getValueTheme } from './customizer'


const atomicClassProps ={
  width: 'width',
  w: 'width',
  height: 'height',
  h: 'height',
  margin: 'margin',
  m: 'margin',
  padding: 'padding',
  p: 'padding',
  background: 'background',
  bg: 'background',
  color: 'color',
  c: 'color',
  font: 'font',
  f: 'font',
  fm: 'family',
  border: 'border',
  b: 'border',
  radius: 'radius',
  rd: 'radius',
  grid: 'grid',
  g: 'grid',
  align: 'align',

  top: 'top',
  t: 'top',
  bottom: 'bottom',
  bm: 'bottom',
  left: 'left',
  l: 'left',
  right: 'right',
  r: 'right',

  size: 'size',
  sz: 'size',
  txt: 'text',

  display: 'display',
  d: 'display',
  transition: 'transition',
  tt: 'transition',
  transform: 'transform',
  tf: 'transform',
  image: 'image',
  img: 'image',
  shadow: 'shadow',
  sw: 'shadow',
  flex: 'flex',
  fx: 'flex',
  position: 'position',
  pt: 'position',
  object: 'object',
  obj: 'object',
  type: 'type',
  tp: 'type',
  style: 'style',
  clear: 'clear',
  clr: 'clear',
  columns: 'columns',
  cols: 'columns',
  column: 'column',
  col: 'column',
  content: 'content',
  cont: 'content',
  cursor: 'cursor',
  direction: 'direction',
  dit: 'direction',
  line: 'line',
  ln: 'line',
  min: 'min',
  mn: 'min',
  max: 'max',
  mx: 'max',
  of: 'overflow',
  x: 'x',
  y: 'y',
  z: 'z',
  index: 'index',
  idx: 'index',
  pointerEvents: 'pointer-vents',
  og: 'origin',
  delay: 'delay',
  property: 'property',
  prop: 'property',
  vertical: 'vertical',
  vt: 'vertical',
  visibility: 'visibility',
  v: 'visibility',
  mode: 'md',
  user: 'user',
  select: 'select',
  justify: 'justify',
  j: 'justify',
  rows: 'rows',
  areas: 'areas',
  items: 'items',
  it: 'items',
  float: 'float',
  auto: 'auto',
  wrap: 'wrap',
  shrink: 'shrink',
  variant: 'variant',
  vr: 'variant',
  filter: 'filter',
  baisis: 'baisis',
  flow: 'flow',
  decoration: 'decoration',
  rendering: 'rendering',
  timingFunction: 'timing-function',
  tmFunc: 'timing-function',
  func: 'timing-function',
  self: 'self',
  tracks: '',
  all: 'all',
  duration: 'duration',
  name: 'name',
  iteration: 'iteration',
  count: 'count',
  aspectRatio: 'aspec-ration',
  fill: 'fill',
  appearance: 'appearance',
  clip: 'clip',
  path: 'path',
  span: 'span',
  gap: 'gap',
  rule: 'rule',

  text: 'text-align',
  br: 'border-radius',
  fs: 'font-size',
  ff: 'font-family',
  fw: 'font-weight',
  jc: 'justify-content',
  ai: 'align-items',
}


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
const getGradient = (gradient = false) =>
  gradient &&
  (gradient.length >= 3
    ? 'background: linear-gradient(' +
      gradient[2] +
      'deg,' +
      gradient[0] +
      ' 0%,' +
      gradient[1] +
      ' 100%);'
    : 'background: linear-gradient(to right, ' +
      gradient[0] +
      ' 0%,' +
      gradient[1] +
      ' 100%);')

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
  
    //atomic class
  let atomicClasses
  let atomicClassRes = ''
  if(atomicClass){
    atomicClassRes = atomicClass.split(' ').reduce((prev, e)=>{

      let [propertys, value] = e.split(':')
      propertys = propertys.split('-')
      value = value.replaceAll('/s', ' ')
      let res = propertys.slice(1).reduce((prev, prop)=> prev += '-' + atomicClassProps[prop], atomicClassProps[propertys[0]] )
    
      return prev += res + ':' + value + ';'
    }, '')
  
  }
  console.log(atomicClassRes)
    // atomicClasses = atomicClass.split(' ')
    // atomicClasses.forEach((e)=>{
    //   let parts = e.split(':')
    //   let propertys = parts[0].split('-')
    //   let value = parts[1].replaceAll('/s', ' ')
    //   let resPropertys = atomicClassProps[propertys[0]]

    //   propertys = propertys.slice(1)
    //   if(propertys.length){
    //     propertys.forEach(e=>{
    //       resPropertys += '-' + atomicClassProps[e] 
    //     })
    //   }
      
      //atomicClassRes += resPropertys + ':' + value + ';'
  //   })
  // }

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
    
    ${atomicClassRes}
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