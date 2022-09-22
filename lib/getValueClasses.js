import { Theme, getValueClass, getValueVariants } from './main'

const includeClass = (single, values) => {
  let str = ""
  let originalClass = "." + single.replace("@", "") + "{"
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

const includeVariant = single => getValueClasses( getValueVariants( single.replace("!", "") ) )

const classWithSelectors = (single) => {
  let elements = single.split("|")
  if(elements.length === 2){
    if(Theme.breakPoints.hasOwnProperty(elements[0])) return Theme.breakPoints[elements[0]] + '{' + getValueClass(elements[1]) + '}'
    else return elements[0].replaceAll('_', ' ') + '{' + getValueClass(elements[1]) + '}' 
  }
  else if(elements.length === 3){
    if(Theme.breakPoints.hasOwnProperty(elements[0])){
       return Theme.breakPoints[elements[0]] + '{' + elements[1].replaceAll('_', ' ') + '{' + getValueClass(elements[2]) + '}}'
    }
  }
}

const getValueClasses = (str) => {
  if(typeof str === "string"){
    let res = ""
    let pureArr = str.match(/<PURE>[^<PURE>]*<\/PURE>/g)
    let values = str.trim().replaceAll(/<PURE>[^<PURE>]*<\/PURE>/g, "ATM-PURE").split(/\s+/g)
    let counter = 0;

    for(let single of values){
      if(single === "ATM-PURE"){ res += pureArr[counter].replaceAll(/(<PURE>|<\/PURE>)/g, ""); counter++ }
      else if(single.startsWith("!")) res += includeVariant(single)
      else if(single.startsWith("@")) res += includeClass(single, values)
      else if(single.includes("|")) res += classWithSelectors(single)
      else res += getValueClass(single) + " "
    }
    return res
  }
}

export default getValueClasses