import getValueClass from "./getValueClass"
import { Theme } from "./Theme"
import {useEffect, useState, useRef} from "react"

let classes = Theme.listOfClasses
let {screens} = Theme
let pseudoClassStructural = [
    ":root", ":empty", ":nth-child", ":nth-last-child", ":first-child",
     ":last-child", ":last-child", ":nth-of-type", ":nth-last-of-type", 
     ":first-of-type", ":last-of-type", ":only-of-type"
]
let psudostate = [
    ":any-link", ":link",":visited",":local-link",":target",":target-within",
    ":scope",":playing",":paused",":current",":past",":future",":autofill",
    ":enabled",":disabled", ":read-only", ":read-write",":placeholder-shown",
    ":default",":checked",":indeterminate",":blank",":valid",":invalid",
    ":in-range",":out-of-range",":required",":optional",":user-invalid",
    ":hover",":active",":focus",":focus-visible",":focus-within",
]
const ElementTest = ({children, className = "", atmClass = "", ...rest}) => {
    const [res, setRes] = useState(" ")
    const elementRef = useRef(null)

    function format(str = ""){
        let stack = ["element"]
        
        str = str.trim().split(/\s+/g).reduce((prev, curr)=>{
            if(curr.includes("!")){
                let obj = Theme.variants
                for(let e of curr.slice(1).split('-')) obj = obj[e]
                prev += obj
            }else prev += curr 
            return prev += " "
        }, "")
      
        str = str.trim().split(/\s+/g).reduce((prev, current)=>{
          if(current.includes("{")) {
            if(current.includes(","))  current = current.replaceAll(",", "," + stack.join('_').replaceAll(/_:/g, ':'))
            stack.push(current.slice(0,-1))
          }
          else if(current.includes("}")) stack.pop()
          else {
            let selector = stack.join('_').replaceAll(/_:/g, ':')
            if(prev.hasOwnProperty(selector)) prev[selector].push(current)
            else prev[selector] = [current]
          }
          return prev
        }, {})
    
        const includeClasses = (str) => {
            let flag = false
            Object.entries(str).map(([key, value])=>{
                value.forEach((curr, idx)=>{
                    if(curr.startsWith("@") && !curr.startsWith("@media")){
                        
                        let singleClass = curr.slice(1)
                        
                        let newValue = str["element_." + singleClass]
                        
                        str[key].splice(idx, 1, ...newValue)
                       flag = true
                    }
                })
            })

            if(flag) includeClasses(str)
        }
        includeClasses(str)
       
        return str
    }

    function getValueClasses(block, blockStyle, pseudoClass = ""){
        
         return block.reduce((prev, current)=>{
     
             let singleClass = "atm__" + ((pseudoClass ? (pseudoClass + "|") : "") + current).replaceAll(/[:"%!\.#|()]/g, "__")
             prev += singleClass + " ";
             if(classes.indexOf(singleClass) < 0) {
                 classes.push(singleClass) 
                 if(pseudoClass) current = pseudoClass + "|" + current
                 if(current.includes("|")){
                     let e = current.split("|")
                     if(e.length === 2 && screens.hasOwnProperty(e[0])) blockStyle.innerHTML +=  `${screens[e[0]]}{ .${singleClass}{ ${getValueClass(e[1])} } }` //screen
                     else if(e.length === 2) blockStyle.innerHTML += `.${singleClass + e[0]}{ ${getValueClass(e[1])} }`//psudostate
                     else if(e.length === 3 && screens.hasOwnProperty(e[0])) blockStyle.innerHTML += `${screens[e[0]]}{ .${singleClass + e[1]} { ${getValueClass(e[2])} } }` //screen and pseudostate
                 }
                 else blockStyle.innerHTML += "." + singleClass + "{" + getValueClass(current) + "}"
             }
             return prev
         }, "")
     
     }

    useEffect(()=>{
        if(atmClass==="") return;
        //adding style tag to head
        if(!document.getElementById("atm-style-block")){
            let style = document.createElement("style")
            style.id = "atm-style-block"
            document.getElementsByTagName("head")[0].appendChild(style)
        }
        //--------------------
        let blockStyle = document.getElementById("atm-style-block")
        let classList = ""
    
        Object.entries(format(atmClass)).map(([selector, block])=>{
            if(selector === "element") {
                
                classList += getValueClasses(block, blockStyle)
                
            }
            else if(selector.startsWith("element:")){
                let pseudoClass = selector.slice(7)
                classList += getValueClasses(block, blockStyle, pseudoClass)
            }
            else {
                selector = selector.replace("element", "").replaceAll("_", " ").trim()
                if(selector != ""){
                    let pseudoClass = ""
                    if(selector.includes(":")){
                        psudostate.forEach((e)=>{
                            if(selector.includes(e)){
                                selector = selector.replace(e,"")
                                pseudoClass = e
                            }
                        })
         
                    }
                 
                    let children = elementRef.current.querySelectorAll(selector)
                    let classes = getValueClasses(block, blockStyle, pseudoClass)
                    
                    for(let child of children){
                        child.className = child.className.replaceAll(/atm-[\S]*\s*/g, "") + " " + classes
                    }
                }
            }
        })
        
        setRes(classList)
    }, [atmClass])

    return (
        <div className={className + res} {...rest} ref={elementRef}>
            {children}
        </div>
    )
}
export default ElementTest

//solucion codigos en diferentes areas
// h1{
//     bg:red
//     span{
//         hola
//     }
//     c:blue
// }
//-----------
{/* <input type="email" />
        <input type="text" /> */}
//input[type="text"]{ rounded-full border-0 bg:#ccc p-0.2 m-0.4 }
//media variantes classes pseuelementos pseudoclasses selectores avanzados Functional pseudo-classes review pseudoclasses