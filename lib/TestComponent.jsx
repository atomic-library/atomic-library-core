import getValueClasses from "./getValueClasses"
import { useEffect } from "react"

const TestComponent = ({children, className = "", atmClass = "", ...rest}) => {
    
    let classes = atmClass.trim().split(/\s/g)


    useEffect(()=>{
        let head = document.getElementsByTagName("head")[0]
        let style = document.createElement("style")
        style.id = "atm-class-classes"
        style.innerHTML = ".card{ padding:10px; margin:10px; width: 100px  } .translate{ transform: translate(100) }"
        head.appendChild(style)
    },[])
    useEffect(()=>{
        let style = document.getElementById("atm-class-classes")
        style.innerHTML += `.bg-${atmClass}{ background: ${atmClass}; }`
    }, [atmClass])
    
    return (
        // <div className={`bg-${atmClass} card`} {...rest}>
        //     {children}
        // </div>
        <></>
    )
}
export default TestComponent