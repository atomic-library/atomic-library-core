import { Theme } from './Theme'

function getValueVariants(value) {
    const variants = Theme.variants
    let res = value.split('-')
    
    if (res.length === 1) return variants[res[0]]
    else if (res.length === 2) return variants[res[0]][res[1]]
    else if (res.length === 3) return variants[res[0]][res[1]][res[2]]
    else if (res.length === 4) return variants[res[0]][res[1]][res[2]][res[3]]
    else if (res.length === 5) return variants[res[0]][res[1]][res[2]][res[3]][res[4]]
    else if (res.length === 5) return variants[res[0]][res[1]][res[2]][res[3]][res[4]][res[5]]
}

export default getValueVariants
  