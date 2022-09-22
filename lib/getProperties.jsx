import {getValueClasses, Theme} from './main'

const getProperties = ({ atmPure, atmClass, areas, size, contextStyle }) => {
    return `
        box-sizing: border-box;
        ${contextStyle ? getValueClasses(contextStyle) : ''}
        ${atmPure ? atmPure : ""}
        ${areas ? `grid-template-areas: ${areas};` : ""}
        ${size ? `max-width: ${Theme.maxWidths[size]};` : ""}
        ${atmClass ? getValueClasses(atmClass) : ""}
    `
}

export default getProperties