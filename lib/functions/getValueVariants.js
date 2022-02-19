import {Theme} from '../Theme'

const getValueVariants = (value) => {
        const variants = Theme.variants

        let res = value.split("."); 
        if(res.length === 1){
          value = variants[res[0]]; 
        }else if(res.length === 2){
          value = variants[res[0]][res[1]]; 
        }else if(res.length === 3){
          value = variants[res[0]][res[1]][res[2]];
        }else if(res.length === 4){
          value = variants[res[0]][res[1]][res[2]][res[3]];
        }else if (res.length === 5){
          value = variants[res[0]][res[1]][res[2]][res[3]][res[4]];
        }else if (res.length === 6){
          value = variants[res[0]][res[1]][res[2]][res[3]][res[4]][res[5]];
        }
        return  value
}
export default getValueVariants