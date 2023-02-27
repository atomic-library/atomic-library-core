import {getValueClasses} from './main'

const getProperties = ({ atmClass, areas, bgImg }) => {
    return `
        ${areas ? `grid-template-areas: ${areas};` : ""}
        ${bgImg ?  `background-image: ${bgImg};` : ""}
        ${atmClass ? getValueClasses(atmClass) : ""}
    `
}

export default getProperties