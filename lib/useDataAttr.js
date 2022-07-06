import {getValueClasses, getValueVariants} from "./getProperties"
import getProperties from "./getProperties"
import colors from './Colors'
import {useEffect, useState} from "react"
const useDataAttr = () => {
    const [update, setUpdate] = useState(false)
    
    
    useEffect(()=>{
        let elements = document.querySelectorAll("[data-class], [data-variants], [data-tailwind]")
       
        for(let element of elements){
            if(element.dataset.variants){
                let variants = element.dataset.variants.split(",")
                element.style.cssText = variants.reduce((prev, variant) => (prev += getValueVariants(variant)),'')
            }
            if(element.dataset.class){
                element.style.cssText += getValueClasses(element.dataset.class || "")
            }
        }
        setUpdate(!update)
    }, [])

  
    
}
export default useDataAttr