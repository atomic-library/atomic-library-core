import {getValueClasses, Theme} from './main'

const getProperties = ({ atmPure, atmClass, areas, size, contextStyle, bgImg }) => {
    return `
        box-sizing: border-box;
        ${contextStyle ? getValueClasses(contextStyle) : ''}
        ${atmPure ? atmPure : ""}
        ${areas ? `grid-template-areas: ${areas};` : ""}
        ${size ? `max-width: ${Theme.maxWidths[size]};` : ""}
        ${bgImg ?  `baclground-image: ${bgImg};` : ""}
        ${atmClass ? getValueClasses(atmClass) : ""}
    `
}

export default getProperties