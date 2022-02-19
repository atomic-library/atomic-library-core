import {Theme} from '../Theme'

const getValueTheme = (value) => {
    const props = Theme.props
    
    if (value[0] === "[" ) { // [prop1.prop2]
        let subString = value.slice(1, -1); //prop1.prop2
        let res = subString.split("."); // ["prop1", "prop2"]
        if(res.length === 1){
          value = props[res[0]]; 
        }else if(res.length === 2){
          value = props[res[0]][res[1]]; //theme["prop1"]["prop2"]
        }else if(res.length === 3){
          value = props[res[0]][res[1]][res[2]];
        }else if(res.length === 4){
          value = props[res[0]][res[1]][res[2]][res[3]];
        }else if (res.length === 5){
          value = props[res[0]][res[1]][res[2]][res[3]][res[4]];
        }else if (res.length === 6){
          value = props[res[0]][res[1]][res[2]][res[3]][res[4]][res[5]];
        }
        return  value
    }else {
        return value
    }
}
export default getValueTheme