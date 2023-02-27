import {classes} from "./classes"
import colors from "./colors"
//init Theme
let Theme  = {
   screens:{
      sm: '@media (min-width: 640px)',
      md: '@media (min-width: 768px)',
      lg: '@media (min-width: 1024px)',
      xl: '@media (min-width: 1280px)',
      "2xl": '@media (min-width: 1536px) ',
   },
   sizes: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1536px',
      prose: "65ch",
      fluid: '100%'
   },
   spacing:{
      px: "1px", 
      auto: "auto", 
      full: "100%",
      none: "none"
   },
   fractions:{
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%;",
      "2/4": "50%;",
      "3/4": "75%;",
      "1/5": "20%;",
      "2/5": "40%;",
      "3/5": "60%;",
      "4/5": "80%;",
      "1/6": "16.666667%;",
      "2/6": "33.333333%;",
      "3/6": "50%;",
      "4/6": "66.666667%;",
      "5/6": "83.333333%;",
      "1/12": "8.333333%;",
      "2/12": "16.666667%;",
      "3/12": "25%;",
      "4/12": "33.333333%;",
      "5/12": "41.666667%;",
      "6/12": "50%;",
      "7/12": "58.333333%;",
      "8/12": "66.666667%;",
      "9/12": "75%;",
      "10/12": "83.333333%;",
      "11/12": "91.666667%;",
      "full": "100%",
   },
   colors: colors,
   sections: {
      none: "none",
      auto: "auto"
   },
   time:{
      "75": "75",
      "100": "100", 
      "150": "150",
      "200": "200",
      "300": "300",
      "500": "500",
      "700": "700",
      "1000": "1000"
   },
   scale:{
      "0":"0",
      "50":".5",
      "75":".75",
      "90":".9",
      "95":".95",
      "100":"1",
      "105":"1.05",
      "110":"1.1",
      "125":"1.25",
      "150":"1.5",
      "200": "2"
   },
   shadow:{
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "0 0 #0000",
      0: '',
      1: '0px 2px 1px -1px rgb(0 0 0 / 5%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
      2: '0px 3px 1px -2px rgb(0 0 0 /5%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
      3: '0px 3px 3px -2px rgb(0 0 0 / 5%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
      4: '0px 2px 4px -1px rgb(0 0 0 / 5%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
      5: '0px 3px 5px -1px rgb(0 0 0 / 5%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)',
      6: '0px 3px 5px -1px rgb(0 0 0 / 5%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)',
      7: '0px 4px 5px -2px rgb(0 0 0 / 5%), 0px 7px 10px 1px rgb(0 0 0 / 14%), 0px 2px 16px 1px rgb(0 0 0 / 12%)',
      8: '0px 5px 5px -3px rgb(0 0 0 / 5%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',
      9: '0px 5px 6px -3px rgb(0 0 0 / 5%), 0px 9px 12px 1px rgb(0 0 0 / 14%), 0px 3px 16px 2px rgb(0 0 0 / 12%)',
      10: '0px 6px 6px -3px rgb(0 0 0 / 5%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)',
      11: '0px 6px 7px -4px rgb(0 0 0 / 5%), 0px 11px 15px 1px rgb(0 0 0 / 14%), 0px 4px 20px 3px rgb(0 0 0 / 12%)',
      12: '0px 7px 8px -4px rgb(0 0 0 / 5%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)',
      13: '0px 7px 8px -4px rgb(0 0 0 / 5%), 0px 13px 19px 2px rgb(0 0 0 / 14%), 0px 5px 24px 4px rgb(0 0 0 / 12%)',
      14: '0px 7px 9px -4px rgb(0 0 0 / 20%), 0px 14px 21px 2px rgb(0 0 0 / 14%), 0px 5px 26px 4px rgb(0 0 0 / 12%)',
      15: '0px 8px 9px -5px rgb(0 0 0 / 5%), 0px 15px 22px 2px rgb(0 0 0 / 14%), 0px 6px 28px 5px rgb(0 0 0 / 12%)',
      16: '0px 8px 10px -5px rgb(0 0 0 / 5%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%)',
      17: '0px 8px 11px -5px rgb(0 0 0 / 5%), 0px 17px 26px 2px rgb(0 0 0 / 14%), 0px 6px 32px 5px rgb(0 0 0 / 12%)',
      18: '0px 9px 11px -5px rgb(0 0 0 / 5%), 0px 18px 28px 2px rgb(0 0 0 / 14%), 0px 7px 34px 6px rgb(0 0 0 / 12%)',
      19: '0px 9px 12px -6px rgb(0 0 0 / 5%), 0px 19px 29px 2px rgb(0 0 0 / 14%), 0px 7px 36px 6px rgb(0 0 0 / 12%)',
      20: '0px 10px 13px -6px rgb(0 0 0 / 5%), 0px 20px 31px 3px rgb(0 0 0 / 14%), 0px 8px 38px 7px rgb(0 0 0 / 12%)',
      21: '0px 10px 13px -6px rgb(0 0 0 / 5%), 0px 21px 33px 3px rgb(0 0 0 / 14%), 0px 8px 40px 7px rgb(0 0 0 / 12%)',
      22: '0px 10px 14px -6px rgb(0 0 0 / 5%), 0px 22px 35px 3px rgb(0 0 0 / 14%), 0px 8px 42px 7px rgb(0 0 0 / 12%)',
      23: '0px 11px 14px -7px rgb(0 0 0 / 5%), 0px 23px 36px 3px rgb(0 0 0 / 14%), 0px 9px 44px 8px rgb(0 0 0 / 12%)',
      24: '0px 11px 15px -7px rgb(0 0 0 / 5%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)',
      default: '0px 3px 1px -2px rgb(0 0 0 /5%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%;',
   },
   opacity:{
      0: "0",
      5: "0.05",
      10: "0.1",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      40: "0.4",
      50: "0.5",
      60: "0.6",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      90: "0.9",
      95: "0.95",
      100: "1",
   },
   pixelScale:{
      none: "none",
      auto: "auto"
   },
   listOfClasses: [],
   variants: {},
   classes: classes,
   classList: {}
}

//filling spacing
for(let i = 0; i <= 9; i++){
   Theme.spacing[i] = i + "rem";
   Theme.spacing[i + ".1"] = i + ".125rem"
   Theme.spacing[i + ".2"] = i + ".25rem"
   Theme.spacing[i + ".3"] = i + ".375rem"
   Theme.spacing[i + ".4"] = i + ".5rem"
   Theme.spacing[i + ".5"] = i + ".625rem"
   Theme.spacing[i + ".6"] = i + ".75rem"
   Theme.spacing[i + ".7"] = i + ".875rem"
}
for(let i = 10; i <= 80; i++) Theme.spacing[i] = i + "rem"
//filling sections
for(let i = 1; i <= 360; i++) Theme.sections[i] = String(i)
for(let i = 1; i <= 100; i++) Theme.pixelScale[i] = String(i)
//function for changing Theme
const createTheme  = (theme = false) => {
   if(theme ){
      if(theme.screens) Theme.screens = theme.screens
      if(theme.sizes) Theme.sizes = theme.sizes
      if(theme.spacing) Theme.spacing = theme.spacing
      if(theme.colors) Theme.colors = theme.colors
      if(theme.variants) Theme.variants = theme.variants
      if(theme.fractions) Theme.fractions = theme.fractions
      if(theme.sections) Theme.sections = theme.sections
      if(theme.time) Theme.time = theme.time
      if(theme.scale) Theme.scale = theme.scale
      if(theme.shadow) Theme.shadow = theme.shadow
      if(theme.classes) Theme.classes = theme.classes
      if(theme.opacity) Theme.opacity = theme.opacity
      if(theme.pixelScale) Theme.pixelScale = theme.pixelScale
      if(theme.extend){
         if(theme.extend.screens) Theme.screens = Object.assign(Theme.screens, theme.extend.screens)
         if(theme.extend.sizes) Theme.sizes = Object.assign(Theme.sizes, theme.extend.sizes)
         if(theme.extend.spacing) Theme.spacing = Object.assign(Theme.spacing, theme.extend.spacing)
         if(theme.extend.colors) Theme.colors = Object.assign(Theme.colors, theme.extend.colors)
         if(theme.extend.variants) Theme.variants = Object.assign(Theme.variants, theme.extend.variants)
         if(theme.extend.fractions) Theme.fractions = Object.assign(Theme.fractions, theme.extend.fractions)
         if(theme.extend.sections) Theme.sections = Object.assign(Theme.sections, theme.extend.sections)
         if(theme.extend.time) Theme.time = Object.assign(Theme.time, theme.extend.time)
         if(theme.extend.scale) Theme.scale = Object.assign(Theme.scale, theme.extend.scale)
         if(theme.extend.shadow) Theme.shadow = Object.assign(Theme.shadow, theme.extend.shadow)
         if(theme.extend.classes) Theme.classes = Object.assign(Theme.classes, theme.extend.classes)
         if(theme.extend.opacity) Theme.opacity = Object.assign(Theme.opacity, theme.extend.opacity)
         if(theme.extend.pixelScale) Theme.pixelScale = Object.assign(Theme.pixelScale, theme.extend.pixelScale)
      }
   }
}

//exports
export { Theme, createTheme}
