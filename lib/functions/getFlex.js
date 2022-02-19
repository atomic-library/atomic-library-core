import {getValueTheme} from '../functions'

const getFlex = ({
    flex, inlineFlex, y, x, gap, center, flexColumn, flexColumnReverse, flexRow, flexRowReverse, wrap
}) => {
    if(flex || inlineFlex){
        if(x) x = getValueTheme(x)
        if(y) y = getValueTheme(y)
        if(gap) gap = getValueTheme(gap)

        return `
        ${flex && 'display: flex;'};
        ${inlineFlex && 'display: inline-flex;'};
        ${gap && 'grid-gap: ' + gap };
        ${y && 'align-items: ' + y };
        ${x && 'justify-content: ' + x };
        ${wrap && 'flex-wrap: wrap;'};
        ${center && 'align-items: center; justify-content: center;' };
    
        flex-direction: ${
            flexColumn ? 'column': 
            flexColumnReverse ? 'column-reverse' : 
            flexRow ? 'row':
            flexRowReverse ? 'row-reverse' : '' };
    `
    }
} 
export default getFlex