import { Theme, getValueClass} from './main'
const {screens} = Theme

const includeClass = (single, values) => {
  let str = ""
  let originalClass = single.replace("@", ".") + "{"
  let index = values.indexOf(originalClass)  + 1
     
  if(index){
    let opened = 1
    while(opened !== 0){
      if(values[index].includes("{")) opened++
      else if(values[index].includes("}")) opened--
      else str += " " + values[index]
      index++
    }
  }
  return getValueClasses(str)
}

const getValueClasses = (str) => {
  if(typeof str === "string"){
    let res = ""
    let pureArr = str.match(/<PURE>[^<PURE>]*<\/PURE>/g)
    let values = str.trim().replaceAll(/<PURE>[^<PURE>]*<\/PURE>/g, "ATM-PURE").split(/\s+/g)
    let counter = 0;

    for(let single of values){
      if(single === "ATM-PURE"){ res += pureArr[counter].replaceAll(/(<PURE>|<\/PURE>)/g, ""); counter++ }
      // else if(single.includes("{") || single.includes("}")) res += getValueClass(single) + " "
      else if(single.startsWith("!")) {
        let obj = Theme.variants
        for(let e of single.slice(1).split('-')) obj = obj[e]
        res += getValueClasses(obj)
      }
      else if(single.startsWith("@")) res += includeClass(single, values)
      else if(single.includes("|")) {
        let e = single.split("|")
        if(e.length === 2){
          if(screens.hasOwnProperty(e[0])) res += screens[e[0]] + '{' + getValueClass(e[1]) + '}'
          else res += e[0].replaceAll('_', ' ') + '{' + getValueClass(e[1]) + '}' 
        }
        else if(e.length === 3 && screens.hasOwnProperty(e[0])){
          res += screens[e[0]] + '{' + e[1].replaceAll('_', ' ') + '{' + getValueClass(e[2]) + '}}'
        }
      }
      else res += getValueClass(single) + " "
    }

    return res
  }
}

export default getValueClasses