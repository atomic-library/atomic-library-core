import Dictionary from "./Dictionary";
import { Theme } from "./Theme"

function getValueTheme (value) {
  const props = Theme.props
  if (value[0] === "[" ) {
      let res = value.slice(1, -1).split("."); 
      if(res.length === 1) return props[res[0]]
      else if(res.length === 2) return props[res[0]][res[1]]
      else if(res.length === 3) return props[res[0]][res[1]][res[2]]
      else if(res.length === 4) return props[res[0]][res[1]][res[2]][res[3]]
      else if(res.length === 5) return props[res[0]][res[1]][res[2]][res[3]][res[4]]
      else if(res.length === 5) return props[res[0]][res[1]][res[2]][res[3]][res[4]][res[5]]
  } else return value
}

function customizer(style) {
  let res = "";
  Object.entries(style).forEach(([k, v]) => 
    typeof v === "string" ? res += Dictionary[k] + getValueTheme(v) + ";" :
    typeof v === "object" && Object.entries(v).forEach(([sk, sv]) => k === "break" ? res += Theme.breakPoints[sk]+"{"+customizer(sv)+"}" : res += k+"{"+customizer(v)+"}")
  )
  return res}
export {getValueTheme}
export default customizer