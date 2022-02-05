import {getValueTheme} from '../functions'

const getGrid = ({
    grid, x, y, center, gap, cols, rows, areas
}) => {
    if(grid){
        if(x) x = getValueTheme(x)
        if(y) y = getValueTheme(y)
        if(gap) gap = getValueTheme(gap)
        if(cols) cols = getValueTheme(cols)
        if(rows) rows = getValueTheme(rows)
        if(areas) areas = getValueTheme(areas)
        return `
        display: grid;
        ${y && 'align-items: ' + y };
        ${x && 'justify-items: ' + x };
        ${center && 'align-items: center; justify-items: center;' };
    
        ${gap && 'grid-gap: ' + gap };
        ${cols ? 'grid-template-columns:' + cols : 'grid-template-columns: repeat(2, 1fr)'};
        ${rows && 'grid-template-rows: ' + rows };
        ${areas && 'grid-template-areas: ' + areas};
    `
    }
}
export default getGrid