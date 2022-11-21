let scaleStyles = { "solid": "solid", "dashed": "dashed", "dotted": "dotted", "double": "double", "hidden": "hidden", "wavy": "wavy", "none": "none"}
let scaleTime ={"75": "75", "100": "100", "150": "150", "200": "200", "300": "300", "500": "500", "700": "700", "1000": "1000"}
let scaleScale = {"0":"0", ".5":".5", ".75":".75", ".9":".9", ".95":".95", "1":"1", "1.05":"1.05", "1.1":"1.1", "1.25":"1.25", "1.5":"1.5"}
let scale2 = {px: "1px", auto: "auto", full: "100%",}
let scaleContent = { min:"min-content", max:"max-content", fit: "fit-content", auto: "auto", full: "100%", none: "none" }
let scalePositions = {top: "top", bottom: "bottom", left:"left" , right: "right"}
let scaleBreak = {auto: "auto", avoid: "avoid", all: "all", page: "page", left: "left", righ: "right", column: "column"}
let counter = 0
let counter2 = 0

for(let i = 0; i <= 100; i++){
    scale2[i] = String(counter + "." + counter2 + "rem")
    scale2[i + ".5"] = String(counter + "." + (counter2 + 125) + "rem")
    if(counter2 === 75) {
        counter++
        counter2 = 0
    }else counter2 += 25
}
//negativo
for(let i = 0; i <= 100; i++){
    scale2["-" + i] = String("-" + counter + "." + counter2 + "rem")
    scale2["-" + i + ".5"] = String("-" + counter + "." + (counter2 + 125) + "rem")
    if(counter2 === 75) {
        counter++
        counter2 = 0
    }else counter2 += 25
}

let scaleFractions = {
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

}

let scale360 = {}
for(let i = 1; i <= 360; i++) scale360[i] = String(i)
//negativo
for(let i = 1; i <= 360; i++) scale360["-" + i] = String("-" + i)

const classes = {
    flex: "display: flex;",
    grid: "display: grid;",
    table: "display: table;",
    inline:	"display: inline;",
    border: "border: 1px solid #ccc;",
    isolate: "isolation: isolate;",
    isolationAuto: "isolation: auto;",
    static: "position: static;",
    fixed: "position: fixed;",
    absolute: "position: absolute;",
    relative: "position: relative;",
    sticky: "position: sticky;",
    visible: "visibility: visible;",
    invisible: "visibility: hidden;",
    hidden:	"display: none;",
    italic: "font-style: italic;",
    notItalic: "font-style: normal;",//
    antialiased: "-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;",
    subpixelAntialiased: "-webkit-font-smoothing: auto;-moz-osx-font-smoothing: auto;",
    underline: "text-decoration-line: underline;",
    overline: "text-decoration-line: overline;",
    lineThrough: "text-decoration-line: line-through;",
    noUnderline: "text-decoration-line: none;",
    uppercase: "text-transform: uppercase;",
    lowercase: "text-transform: lowercase;",
    capitalize: "text-transform: capitalize;",
    normalcase: "text-transform: none;",
    shadow:	"box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
    rounded: "border-radius: 5px;",
    grow:	"flex-grow: 1;",
    grow0:	"flex-grow: 0;",
    shrink:	"flex-shrink: 1;",
    shrink0:	"flex-shrink: 0;",


    //text
    "text-left": "text-align: left;",
    "text-center": "text-align: center;",
    "text-right": "text-align: right;",
    "text-justify": "text-align: justify;",
    "text-start": "text-align: start;",
    "text-end": "text-align: end;",

    "text-truncate": "overflow: hidden; text-overflow: ellipsis;white-space: nowrap;",
    "text-ellipsis": "text-overflow: ellipsis;",
    "text-clip": "text-overflow: clip;",
    "text-xs": "font-size: 0.75rem;line-height: 1rem;",
    "text-sm": "font-size: 0.875rem;line-height: 1.25rem;",
    "text-base": "font-size: 1rem;line-height: 1.5rem;",
    "text-lg": "font-size: 1.125rem;line-height: 1.75rem;",
    "text-xl": "font-size: 1.25rem;line-height: 1.75rem;",
    "text-2xl": "font-size: 1.5rem;line-height: 2rem;",
    "text-3xl": "font-size: 1.875rem;line-height: 2.25rem;",
    "text-4xl": "font-size: 2.25rem;line-height: 2.5rem;",
    "text-5xl": "font-size: 3rem;line-height: 1;",
    "text-6xl": "font-size: 3.75rem;line-height: 1;",
    "text-7xl": "font-size: 4.5rem;line-height: 1;",
    "text-8xl": "font-size: 6rem;line-height: 1;",
    "text-9xl": "font-size: 8rem; line-height: 1;",


    "underlineOffset-auto": "text-underline-offset: auto;",

    "align-baseline": "vertical-align: baseline;",
    "align-top": "vertical-align: top;",
    "align-middle": "vertical-align: middle;",
    "align-bottom": "vertical-align: bottom;",
    "align-sub": "vertical-align: sub;",
    "align-super": "vertical-align: super;",
        
    "align-text-top": "vertical-align: text-top;",
    "align-text-bottom": "vertical-align: text-bottom;", 
    //list
    "list-inside": "list-style-position: inside;",
    "list-outside": "list-style-position: outside;",
    "list-none": "list-style-type: none;",
    "list-disc": "list-style-type: disc;",
    "list-decimal": "list-style-type: decimal;",
    "list-item": "display: list-item;",
  
  
    "decoration-fromFont": "text-decoration-thickness: from-font;",
    "decoration-auto": "text-decoration-thickness: auto;",
  
    //whitespace cursor  place-content place-items place-self resize user-select pointer-events float clear  will-change

    //break
    "break-normal": "overflow-wrap: normal;word-break: normal;",
    "break-words": "overflow-wrap: break-word;",
    "break-all": "word-break: break-all;",
    "break-after-avoid-page": "break-after: avoid-page;" ,
    "break-before-avoid-page": "break-before: avoid-page;",
    "break-inside-auto": "break-inside: auto;",
    "break-inside-avoid": "break-inside: avoid;",
    "break-inside-avoidPage": "break-inside: avoid-page;",
    "break-inside-avoidColumn": "break-inside: avoid-column;",
    //content
    "content-none": "content: none;",
    "content-center": "align-content: center;",
    "content-start": "align-content: flex-start;",
    "content-end": "align-content: flex-end;",
    "content-between": "align-content: space-between;",
    "content-around": "align-content: space-around;",
    "content-evenly": "align-content: space-evenly;",
    //leading
    "leading-none": "line-height: 1;",
    "leading-tight": "line-height: 1.25;",
    "leading-snug": "line-height: 1.375;",
    "leading-normal": "line-height: 1.5;",
    "leading-relaxed": "line-height: 1.625;",
    "leading-loose": "line-height: 2;",
    //tracking
    "tracking-tighter": "letter-spacing: -0.05em;",
    "tracking-tight": "letter-spacing: -0.025em;",
    "tracking-normal": "letter-spacing: 0em;",
    "tracking-wide": "letter-spacing: -0.05em;",
    "tracking-wider": "letter-spacing: 0.05em;",
    "tracking-tighter": "letter-spacing: -0.05em;",
    "tracking-widest": "letter-spacing: 0.1em;",
    //h W
    "w-screen": "width: 100vw;",
    "h-screen": "height: 100vh;",

    "min-w-0": "min-width: 0px;", 
    "min-h-0": "min-height: 0px;", 
    "min-h-screeen": "min-height: 100vh;",

    "max-w-0":	"max-width: 0rem;",
    "max-w-xs":	"max-width: 20rem;", 
    "max-w-sm":	"max-width: 24rem;", 
    "max-w-md":	"max-width: 28rem;", 
    "max-w-lg":	"max-width: 32rem;", 
    "max-w-xl":	"max-width: 36rem;",

    "max-w-2xl":	"max-width: 42rem;", 
    "max-w-3xl":	"max-width: 48rem;", 
    "max-w-4xl":	"max-width: 56rem;", 
    "max-w-5xl":	"max-width: 64rem;",
    "max-w-6xl":	"max-width: 72rem;",
    "max-w-7xl":	"max-width: 80rem;",

    "max-w-prose":	"max-width: 65ch;",
    "max-w-screen-sm":	"max-width: 640px;",
    "max-w-screen-md":	"max-width: 768px;",
    "max-w-screen-lg":	"max-width: 1024px;",
    "max-w-screen-xl":	"max-width: 1280px;",
    "max-w-screen-2xl":	"max-width: 1536px;",

    "max-h-screen": "max-height: 100vh;",
    
    

    "basis-auto": "flex-basis: auto;",
    //flex
    "flex-row": "flex-direction: row;",
    "flex-row-reverse":	"flex-direction: row-reverse;",
    "flex-col": "flex-direction: column;",
    "flex-col-reverse":	"flex-direction: column-reverse;",
    "flex-wrap": "flex-wrap: wrap;",
    "flex-wrap-reverse": "flex-wrap: wrap-reverse;",
    "flex-nowrap": "flex-wrap: nowrap;",
    "flex-1": "flex: 1 1 0%;",
    "flex-auto": "flex: 1 1 auto;",
    "flex-initial": "flex: 0 1 auto;",
    "flex-none": "flex: none;",
    //order
    "order-first": "order: -9999;",
    "order-last": "order: 9999;",
    "order-none": "order: 0;",
    //inline
    "inline-block": "display: inline-block;",
    "inline-flex": "display: inline-flex;",
    "inline-grid": "display: inline-grid;",
    "inline-table":	"display: inline-table;",
    //table
    "table-caption": "display: table-caption;",
    "table-cell": "display: table-cell;",
    "table-column": "display: table-column;",
    // column-group	display: table-column-group;
    // footer-group	display: table-footer-group;
    // header-group	display: table-header-group;
    "table-row-group": "display: table-row-group;",
    "table-row": "display: table-row;",
    //flow 
    "flow-root": "display: flow-root;",
    //grid
    "grid-cols-none": "grid-template-columns: none;",
    "grid-rows-none": "grid-template-rows: none;",  
    "grid-flow-row":	"grid-auto-flow: row;",
    "grid-flow-col":	"grid-auto-flow: column;",
    "grid-flow-dense":	"grid-auto-flow: dense;",
    "grid-flow-row-dense":	"grid-auto-flow: row dense;",
    "grid-flow-col-dense":	"grid-auto-flow: column dense;",  
    "col-auto": "grid-column: auto;",
    "col-span-full": "grid-column: 1 / -1;",
    "col-start-auto": "grid-column-start: auto;",
    "col-end-auto": "grid-column-end: auto;",
    "row-auto": "grid-row: auto;",
    "row-span-full": "grid-row: 1 / -1;" ,
    "row-start-auto": "grid-row-start: auto;" ,
    "row-end-auto": "grid-row-end: auto;",
    //bg
    "bg-fixed": "background-attachment: fixed;",
    "bg-local": "background-attachment: local;",
    "bg-scroll": "background-attachment: scroll;",
    "bg-bottom": "background-position: bottom;",
    "bg-center": "background-position: center;",
    "bg-left": "background-position: left;",
    "bg-left-bottom": "background-position: left bottom;",
    "bg-left-top": "background-position: left top;",
    "bg-right": "background-position: right;",
    "bg-right-bottom": "background-position: right bottom;",
    "bg-right-top": "background-position: right top;",
    "bg-top": "background-position: top;",
    //
    "bg-auto": "background-size: auto;",
    "bg-cover": "background-size: cover;",
    "bg-contain": "background-size: contain;",

    "bg-clip-border": "background-clip: border-box;",
    "bg-clip-padding": "background-clip: padding-box;",
    "bg-clip-content": "background-clip: content-box;",
    "bg-clip-text": "background-clip: text;",

    "bg-origin-border": "background-origin: border-box;",
    "bg-origin-padding": "background-origin: padding-box;",
    "bg-origin-content": "background-origin: content-box;",

    "bg-blend-normal": "background-blend-mode: normal;",
    "bg-blend-multiply": "background-blend-mode: multiply;",
    "bg-blend-screen": "background-blend-mode: screen;",
    "bg-blend-overlay": "background-blend-mode: overlay;",
    "bg-blend-darken": "background-blend-mode: darken;",
    "bg-blend-lighten":	"background-blend-mode: lighten;",
    // color-dodge: "background-blend-mode: color-dodge;",
    // color-burn: "background-blend-mode: color-burn;",
    "hard-light": "background-blend-mode: hard-light;",
    "soft-light": "background-blend-mode: soft-light;",
    "bg-blend-difference": "background-blend-mode: difference;",
    "bg-blend-exclusion": "background-blend-mode: exclusion;",
    "bg-blend-hue": "background-blend-mode: hue;",
    "bg-blend-saturation": "background-blend-mode: saturation;",
    "bg-blend-color": "background-blend-mode: color;",
    "bg-blend-luminosity": "background-blend-mode: luminosity;",
    //auto
    "auto-cols-fr": "grid-auto-columns: minmax(0, 1fr);",
    "auto-rows-fr": "grid-auto-rows: minmax(0, 1fr);",
    
    //justify
    "justify-start": "justify-content: flex-start;",
    "justify-end": "justify-content: flex-end;",
    "justify-center": "justify-content: center;",
    "justify-between": "justify-content: space-between;",
    "justify-around": "justify-content: space-around;",
    "justify-evenly": "justify-content: space-evenly;",

    "justify-items-start": "justify-items: start;",
    "justify-items-end": "justify-items: end;",
    "justify-items-center": "justify-items: center;",
    "justify-items-stretch": "justify-items: stretch;",

    "justify-self-auto": "justify-self: auto;",
    "justify-self-start": "justify-self: start;",
    "justify-self-end": "justify-self: end;",
    "justify-self-center": "justify-self: center;",
    "justify-self-stretch": "justify-self: stretch;",
    //items
    "items-start": "align-items: flex-start;",
    "items-end": "align-items: flex-end;",
    "items-center": "align-items: center;",
    "items-baseline": "align-items: baseline;",
    "items-stretch": "align-items: stretch;",
    //self
    "self-auto": "align-self: auto;",
    "self-start": "align-self: flex-start;",
    "self-end": "align-self: flex-end;",
    "self-center": "align-self: center;",
    "self-stretch": "align-self: stretch;",
    "self-baseline": "align-self: baseline;",
    //aspect
    "aspect-auto": "aspect-ratio: auto;",
    "aspect-square": "aspect-ratio: 1 / 1;",
    "aspect-video": "aspect-ratio: 16 / 9;",
    //border
    "border-collapse": "border-collapse: collapse;",
    "border-separate": "border-collapse: separate",
        //border{ spacing: { x: {}, y: {} } }
    //outline
    "outline-none": "outline: 2px solid transparent;outline-offset: 2px;",
    //outline offset: {}
    
    "z-index-0": "z-index: 0;",
    "z-index-10": "z-index: 10;",
    "z-index-20": "z-index: 20;",
    "z-index-30": "z-index: 30;",
    "z-index-40": "z-index: 40;",
    "z-index-50": "z-index: 50;",
    "z-index-auto": "z-index: auto;",

    "table-auto": "table-layout: auto;", 
    "table-fixed": "table-layout: fixed;",
    //transition
    "transition-none": "transition-property: none;",
    "transition-all": "transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;",
    "transition-base": "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;",
    "transition-colors":	"transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;",
    "transition-opacity": "transition-property: opacity;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;",
    "transition-shadow": "transition-property: box-shadow;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;",
    "transition-transform": "transition-property: transform;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;",
    //time functions
    "ease-linear": "transition-timing-function: linear;",
    "ease-in": "transition-timing-function: cubic-bezier(0.4, 0, 1, 1);",
    "ease-out": "transition-timing-function: cubic-bezier(0, 0, 0.2, 1);",
    "ease-in-out": "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);",
    //origin
    "origin-center": "transform-origin: center;",
    "origin-top": "transform-origin: top;",
    "origin-top-right": "transform-origin: top right;",
    "origin-right": "transform-origin: right;",
    "origin-bottom-right": "transform-origin: bottom right;",
    "origin-bottom": "transform-origin: bottom;",
    "origin-bottom-left": "transform-origin: bottom left;",
    "origin-left": "transform-origin: left;",
    "origin-top-left": "transform-origin: top left;",

    "sr-only": "position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0, 0, 0, 0);white-space: nowrap;border-width: 0;" ,
    "not-sr-only": "position: static;width: auto;height: auto;padding: 0;margin: 0;overflow: visible;clip: auto;white-space: normal;",
    // accent: {},//------
    "appearance-none": "appearance: none;",
    // caret: {},
    //scroll
    "scroll-auto": "scroll-behavior: auto;", 
    "scroll-smooth": "scroll-behavior: smooth;",
    //snap scroll
    "snap-start": "scroll-snap-align: start;",
    "snap-end": "scroll-snap-align: end;",
    "snap-center": "scroll-snap-align: center;",
    "snap-normal": "scroll-snap-stop: normal;",
    "snap-always": "scroll-snap-stop: always;",
    "snap-none": 	"scroll-snap-type: none;",
    // x: 	"scroll-snap-type: x var(--tw-scroll-snap-strictness);",
    // y: 	"scroll-snap-type: y var(--tw-scroll-snap-strictness);",
    // both: 	"scroll-snap-type: both var(--tw-scroll-snap-strictness);",
    // mandatory: 	"--tw-scroll-snap-strictness: mandatory;",
    // proximity: 	"--tw-scroll-snap-strictness: proximity;",
    "snap-align-none": "scroll-snap-align: none;",
    //touch
    "touch-auto": "touch-action: auto;",
    "touch-none": "touch-action: none;",
    "touch-manipulation": "touch-action: manipulation;",
    "touch-pan-x": "touch-action: pan-x;",
    "touch-pan-left": "touch-action: pan-left;",
    "touch-pan-right": "touch-action: pan-right;",
    "touch-pan-y": "touch-action: pan-y;",
    "touch-pan-up": "touch-action: pan-up;",
    "touch-pan-down": "touch-action: pan-down;",
    "touch-pinch-zoom": "touch-action: pinch-zoom;",

    //box
    "box-decoration-clone": "box-decoration-break: clone;",
    "box-decoration-slice": "box-decoration-break: slice;",
    "box-border": "box-sizing: border-box;",
    "box-content": "box-sizing: content-box;",
    //object
    "object-contain": "object-fit: contain;",
    "object-cover": "object-fit: cover;",
    "object-fill": "object-fit: fill;",
    "object-none": "object-fit: none;",
    "object-scale-down": "object-fit: scale-down;",
    //opacity
    "opacity-0": "opacity: 0;",
    "opacity-5": "opacity: 0.05;",
    "opacity-10": "opacity: 0.1;",
    "opacity-20": "opacity: 0.2;",
    "opacity-25": "opacity: 0.25;",
    "opacity-30": "opacity: 0.3;",
    "opacity-40": "opacity: 0.4;",
    "opacity-50": "opacity: 0.5;",
    "opacity-60": "opacity: 0.6;",
    "opacity-70": "opacity: 0.7;",
    "opacity-75": "opacity: 0.75;",
    "opacity-80": "opacity: 0.8;",
    "opacity-90": "opacity: 0.9;",
    "opacity-95": "opacity: 0.95;",
    "opacity-100": "opacity: 1;",
    //shadow
    "shadow-sm": "box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);",
    "shadow-md": "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
    "shadow-lg": "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);",
    "shadow-xl": "box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);",
    "shadow-2xl": "box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);",
    "shadow-inner": "box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);",
    "shadow-none": "box-shadow: 0 0 #0000;",
    "shadow-0": '',
    "shadow-1": 'box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 5%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);',
    "shadow-2": 'box-shadow: 0px 3px 1px -2px rgb(0 0 0 /5%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);',
    "shadow-3": 'box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 5%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);',
    "shadow-4": 'box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 5%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);',
    "shadow-5": 'box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 5%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);',
    "shadow-6": 'box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 5%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);',
    "shadow-7": 'box-shadow: 0px 4px 5px -2px rgb(0 0 0 / 5%), 0px 7px 10px 1px rgb(0 0 0 / 14%), 0px 2px 16px 1px rgb(0 0 0 / 12%);',
    "shadow-8": 'box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 5%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);',
    "shadow-9": 'box-shadow: 0px 5px 6px -3px rgb(0 0 0 / 5%), 0px 9px 12px 1px rgb(0 0 0 / 14%), 0px 3px 16px 2px rgb(0 0 0 / 12%);',
    "shadow-10": 'box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 5%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);',
    "shadow-11": 'box-shadow: 0px 6px 7px -4px rgb(0 0 0 / 5%), 0px 11px 15px 1px rgb(0 0 0 / 14%), 0px 4px 20px 3px rgb(0 0 0 / 12%);',
    "shadow-12": 'box-shadow: 0px 7px 8px -4px rgb(0 0 0 / 5%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%);',
    "shadow-13": 'box-shadow: 0px 7px 8px -4px rgb(0 0 0 / 5%), 0px 13px 19px 2px rgb(0 0 0 / 14%), 0px 5px 24px 4px rgb(0 0 0 / 12%);',
    "shadow-14": 'box-shadow: 0px 7px 9px -4px rgb(0 0 0 / 20%), 0px 14px 21px 2px rgb(0 0 0 / 14%), 0px 5px 26px 4px rgb(0 0 0 / 12%);',
    "shadow-15": 'box-shadow: 0px 8px 9px -5px rgb(0 0 0 / 5%), 0px 15px 22px 2px rgb(0 0 0 / 14%), 0px 6px 28px 5px rgb(0 0 0 / 12%);',
    "shadow-16": 'box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 5%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%);',
    "shadow-17": 'box-shadow: 0px 8px 11px -5px rgb(0 0 0 / 5%), 0px 17px 26px 2px rgb(0 0 0 / 14%), 0px 6px 32px 5px rgb(0 0 0 / 12%);',
    "shadow-18": 'box-shadow: 0px 9px 11px -5px rgb(0 0 0 / 5%), 0px 18px 28px 2px rgb(0 0 0 / 14%), 0px 7px 34px 6px rgb(0 0 0 / 12%);',
    "shadow-19": 'box-shadow: 0px 9px 12px -6px rgb(0 0 0 / 5%), 0px 19px 29px 2px rgb(0 0 0 / 14%), 0px 7px 36px 6px rgb(0 0 0 / 12%);',
    "shadow-20": 'box-shadow: 0px 10px 13px -6px rgb(0 0 0 / 5%), 0px 20px 31px 3px rgb(0 0 0 / 14%), 0px 8px 38px 7px rgb(0 0 0 / 12%);',
    "shadow-21": 'box-shadow: 0px 10px 13px -6px rgb(0 0 0 / 5%), 0px 21px 33px 3px rgb(0 0 0 / 14%), 0px 8px 40px 7px rgb(0 0 0 / 12%);',
    "shadow-22": 'box-shadow: 0px 10px 14px -6px rgb(0 0 0 / 5%), 0px 22px 35px 3px rgb(0 0 0 / 14%), 0px 8px 42px 7px rgb(0 0 0 / 12%);',
    "shadow-23": 'box-shadow: 0px 11px 14px -7px rgb(0 0 0 / 5%), 0px 23px 36px 3px rgb(0 0 0 / 14%), 0px 9px 44px 8px rgb(0 0 0 / 12%);',
    "shadow-24": 'box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 5%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);',
    "shadow-default": 'box-shadow: 0px 3px 1px -2px rgb(0 0 0 /5%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%;)'
}
 
export { scaleStyles, scaleTime, scaleScale, scale2, scaleContent, scalePositions, scaleBreak, scaleFractions, scale360 }
export default classes
//animations
// divide-y-reverse > * + *	--tw-divide-y-reverse: 1;
// divide-x-reverse > * + *	--tw-divide-x-reverse: 1;}


    // font: {
    //     thin:	"font-weight: 100;",
    //     extralight:	"font-weight: 200;",
    //     light:	"font-weight: 300;",
    //     normal:	"font-weight: 400;",
    //     medium:	"font-weight: 500;",
    //     semibold:	"font-weight: 600;",
    //     bold:	"font-weight: 700;",
    //     extrabold:	"font-weight: 800;",
    //     black:	"font-weight: 900;",
    // },
    // classes.border.spacing[key] = "column-gap: " + value + ";"
    // classes.border.spacing.x[key] = "column-gap: " + value + ";"
    // classes.border.spacing.y[key] = "row-gap:" + value + ";"