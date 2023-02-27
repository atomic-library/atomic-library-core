let scaleStyles = { "solid": "solid", "dashed": "dashed", "dotted": "dotted", "double": "double", "hidden": "hidden", "wavy": "wavy", "none": "none"}
let scaleContent = { min:"min-content", max:"max-content", fit: "fit-content", auto: "auto", full: "100%", none: "none" }
let scaleBreak = {auto: "auto", avoid: "avoid", all: "all", page: "page", left: "left", righ: "right", column: "column"}

const classes = {
    //aspect-ratio
    "aspect-auto": "aspect-ratio: auto;",
    "aspect-square": "aspect-ratio: 1 / 1;",
    "aspect-video": "aspect-ratio: 16 / 9;",
    //container - not necessary
    //columns - gvc - to check ----------------->
    //break after - before - inside - to check ----------------->
    //box decoration
    "box-decoration-clone": "box-decoration-break: clone;",
    "box-decoration-slice": "box-decoration-break: slice;",
    //box-sizing
    "box-border": "box-sizing: border-box;",
    "box-content": "box-sizing: content-box;",
    //display
    "block":	"display: block;",
    "inline-block":	"display: inline-block;",
    "inline":	"display: inline;",
    "flex":	"display: flex;",
    "inline-flex":	"display: inline-flex;",
    "table":	"display: table;",
    "inline-table":	"display: inline-table;",
    "table-caption":	"display: table-caption;",
    "table-cell":	"display: table-cell;",
    "table-column":	"display: table-column;",
    "table-column-group":	"display: table-column-group;",
    "table-footer-group":	"display: table-footer-group;",
    "table-header-group":	"display: table-header-group;",
    "table-row-group":	"display: table-row-group;",
    "table-row":	"display: table-row;",
    "flow-root":	"display: flow-root;",
    "grid":	"display: grid;",
    "inline-grid":	"display: inline-grid;",
    "contents":	"display: contents;",
    "list-item":	"display: list-item;",
    "hidden":	"display: none;",

    //clear - dictionary
    //isolate
    "isolate": "isolation: isolate;",
    "isolation-auto": "isolation: auto;",
    //object-fit
    "object-contain": "object-fit: contain;",
    "object-cover": "object-fit: cover;",
    "object-fill": "object-fit: fill;",
    "object-none": "object-fit: none;",
    "object-scale-down": "object-fit: scale-down;",
    //object-position
    "object-bottom":	"object-position: bottom;",
    "object-top":	"object-position: top;",
    "object-left":	"object-position: left;",
    "object-right":	"object-position: right;",

    "object-center":	"object-position: center;",
    
    "object-left-bottom":	"object-position: left bottom;",
    "object-left-top":	"object-position: left top;",
    
    "object-right-bottom":	"object-position: right bottom;",
    "object-right-top":	"object-position: right top;",
    
    //overflow - not necessary
    //over-scroll - not necesary
    //position
    static: "position: static;",
    fixed: "position: fixed;",
    absolute: "position: absolute;",
    relative: "position: relative;",
    sticky: "position: sticky;",
    // top, bottom, right, left - gvc
    //visibility
    visible: "visibility: visible;",
    invisible: "visibility: hidden;",
    collapse:	"visibility: collapse;",
    //z-index
    "z-index-0": "z-index: 0;",
    "z-index-10": "z-index: 10;",
    "z-index-20": "z-index: 20;",
    "z-index-30": "z-index: 30;",
    "z-index-40": "z-index: 40;",
    "z-index-50": "z-index: 50;",
    "z-index-auto": "z-index: auto;",
    //-----------------------------------
    //basis - gvc
    //flex-directions
    "flex-row": "flex-direction: row;",
    "flex-row-reverse":	"flex-direction: row-reverse;",
    "flex-col": "flex-direction: column;",
    "flex-col-reverse":	"flex-direction: column-reverse;",
    //flex-wrap
    "flex-wrap": "flex-wrap: wrap;",
    "flex-wrap-reverse": "flex-wrap: wrap-reverse;",
    "flex-nowrap": "flex-wrap: nowrap;",
    //flex
    "flex-1": "flex: 1 1 0%;",
    "flex-auto": "flex: 1 1 auto;",
    "flex-initial": "flex: 0 1 auto;",
    "flex-none": "flex: none;",
    //flex-grow
    grow:	"flex-grow: 1;",
    "grow-0":	"flex-grow: 0;",
    //flex-shrink
    shrink:	"flex-shrink: 1;",
    "shrink-0":	"flex-shrink: 0;",
    //order - gvc
    "order-first": "order: -9999;",
    "order-last": "order: 9999;",
    "order-none": "order: 0;",
    //grid-template-colums - gvc
    //grid-auto-flow
    "grid-cols-none": "grid-template-columns: none;",
    "grid-rows-none": "grid-template-rows: none;",  
    "grid-flow-row":	"grid-auto-flow: row;",
    "grid-flow-col":	"grid-auto-flow: column;",
    "grid-flow-dense":	"grid-auto-flow: dense;",
    "grid-flow-row-dense":	"grid-auto-flow: row dense;",
    "grid-flow-col-dense":	"grid-auto-flow: column dense;", 
    //grid-auto - gvc
    "auto-cols-fr":	"grid-auto-columns: minmax(0, 1fr); ",
    "auto-rows-fr":	"grid-auto-rows: minmax(0, 1fr);",

    "col-span-full": "grid-column: 1 / -1;",
    "row-span-full": "grid-row: 1 / -1;" ,
    //gap -gvc
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
    //align-content
    "content-none": "content: none;",
    "content-center": "align-content: center;",
    "content-start": "align-content: flex-start;",
    "content-end": "align-content: flex-end;",
    "content-between": "align-content: space-between;",
    "content-around": "align-content: space-around;",
    "content-evenly": "align-content: space-evenly;",
    // //items
    "items-start": "align-items: flex-start;",
    "items-end": "align-items: flex-end;",
    "items-center": "align-items: center;",
    "items-baseline": "align-items: baseline;",
    "items-stretch": "align-items: stretch;",
    // //self
    "self-auto": "align-self: auto;",
    "self-start": "align-self: flex-start;",
    "self-end": "align-self: flex-end;",
    "self-center": "align-self: center;",
    "self-stretch": "align-self: stretch;",
    "self-baseline": "align-self: baseline;",
    //place-content
    "place-content-center":	"place-content: center;",
    "place-content-start":	"place-content: start;",
    "place-content-end":	"place-content: end;",
    "place-content-between":	"place-content: space-between;",
    "place-content-around":	"place-content: space-around;",
    "place-content-evenly":	"place-content: space-evenly;",
    "place-content-baseline":	"place-content: baseline;",
    "place-content-stretch":	"place-content: stretch;",
    //place-items
    "place-items-start":	"place-items: start;",
    "place-items-end":	"place-items: end;",
    "place-items-center":	"place-items: center;",
    "place-items-baseline":	"place-items: baseline;",
    "place-items-stretch":	"place-items: stretch;",
    //place-self
    "place-self-auto":	"place-self: auto;",
    "place-self-start":	"place-self: start;",
    "place-self-end":	"place-self: end;",
    "place-self-center":	"place-self: center;",
    "place-self-stretch":	"place-self: stretch;",
    //---------------
    "w-screen": "width: 100vw;",
    "h-screen": "height: 100vh;",
    "min-h-screeen": "min-height: 100vh;",
    "max-h-screen": "max-height: 100vh;",
    //---------------
    //font-family - not necessary - to check
    //text
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
    antialiased: "-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;",
    "subpixel-antialiased": "-webkit-font-smoothing: auto;-moz-osx-font-smoothing: auto;",
    italic: "font-style: italic;",
    "not-italic": "font-style: normal;",
    //font-weight - not necessary
    "normal-nums":	"font-variant-numeric: normal;",
    "ordinal":	"font-variant-numeric: ordinal;",
    "slashed-zero":	"font-variant-numeric: slashed-zero;",
    "lining-nums":	"font-variant-numeric: lining-nums;",
    "oldstyle-nums":	"font-variant-numeric: oldstyle-nums;",
    "proportional-nums":	"font-variant-numeric: proportional-nums;",
    "tabular-nums":	"font-variant-numeric: tabular-nums;",
    "diagonal-fractions":	"font-variant-numeric: diagonal-fractions;",
    "stacked-fractions":	"font-variant-numeric: stacked-fractions;",
    //tracking - dictionaryleading: line-height - gvc
    //list
    "list-inside": "list-style-position: inside;",
    "list-outside": "list-style-position: outside;",
    "list-none": "list-style-type: none;",
    "list-disc": "list-style-type: disc;",
    "list-decimal": "list-style-type: decimal;",
    //text-align: text - dictionary
    //text-color gvc
    underline: "text-decoration-line: underline;",
    overline: "text-decoration-line: overline;",
    "line-through": "text-decoration-line: line-through;",
    "no-underline": "text-decoration-line: none;",
    //text decoration color - gvc
    "decoration-from-font":	"text-decoration-thickness: from-font;",
    uppercase: "text-transform: uppercase;",
    lowercase: "text-transform: lowercase;",
    capitalize: "text-transform: capitalize;",
    "normal-case": "text-transform: none;",

    "text-truncate": "overflow: hidden; text-overflow: ellipsis;white-space: nowrap;",
    "text-ellipsis": "text-overflow: ellipsis;",
    "text-clip": "text-overflow: clip;",
    //align - dictionary - vertical-align // white-space dictionary

    "break-normal":	"overflow-wrap: normal; word-break: normal;",
    "break-words":	"overflow-wrap: break-word;",
    "break-all":	"word-break: break-all;",
    "break-keep":	"word-break: keep-all;",
    //-----------------------------
    "bg-fixed": "background-attachment: fixed;",
    "bg-local": "background-attachment: local;",
    "bg-scroll": "background-attachment: scroll;",

    "bg-clip-border": "background-clip: border-box;",
    "bg-clip-padding": "background-clip: padding-box;",
    "bg-clip-content": "background-clip: content-box;",
    "bg-clip-text": "background-clip: text;",

    "bg-origin-border": "background-origin: border-box;",
    "bg-origin-padding": "background-origin: padding-box;",
    "bg-origin-content": "background-origin: content-box;",

    "bg-bottom": "background-position: bottom;", //----------------------------position scale
    "bg-top": "background-position: top;",
    "bg-left": "background-position: left;",
    "bg-center": "background-position: center;",
    "bg-right": "background-position: right;",
    
    "bg-left-bottom": "background-position: left bottom;",
    "bg-left-top": "background-position: left top;",

    "bg-right-bottom": "background-position: right bottom;",
    "bg-right-top": "background-position: right top;",
    

    "bg-repeat":	"background-repeat: repeat;",
    "bg-no-repeat":	"background-repeat: no-repeat;",
    "bg-repeat-x":	"background-repeat: repeat-x;",
    "bg-repeat-y":	"background-repeat: repeat-y;",
    "bg-repeat-round":	"background-repeat: round;",
    "bg-repeat-space":	"background-repeat: space;",

    "bg-auto": "background-size: auto;",
    "bg-cover": "background-size: cover;",
    "bg-contain": "background-size: contain;",

    //bg-image - missing 
    //Gradient Color Stops - missing
    //------------------------------
    //border ------------------>
    rounded: "border-radius: 5px;",
    "rounded-full": "border-radius: 999px ;",
    //divide - gvc
    //outline - gvc
    "outline":	"outline-style: solid;",
    border: "border: 1px solid #ccc;",
    //ring - missing
    //----------------------------
    "shadow-inner":	"box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);",
    shadow:	"box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
    
    //box-shadow color - missing //opacity - gvc //mix-blend-normal - dictionary //background-blend-mode - dictionary
    
    //filters
    // blur-none:	filter: blur(0); - gvc
    "grayscale-0":	"filter: grayscale(0);",
    "grayscale":	"filter: grayscale(100%);",
    "invert-0":	"filter: invert(0);",
    "invert":	"filter: invert(100%);",
    "sepia-0":	"filter: sepia(0);",
    "sepia":	"filter: sepia(100%);",

    // backdrop-blur-none: backdrop-filter: blur(0);

    "backdrop-grayscale-0":	"backdrop-filter: grayscale(0);",
    "backdrop-grayscale":	"backdrop-filter: grayscale(100%);",

    "backdrop-invert-0":	"backdrop-filter: invert(0);",
    "backdrop-invert":	"backdrop-filter: invert(100%);",

    "backdrop-sepia-0":	"backdrop-filter: sepia(0);",
    "backdrop-sepia":	"backdrop-filter: sepia(100%);",

    // backdrop-opacity: backdrop-filter: opacity(0.1); gvc
    //border
    "border-collapse": "border-collapse: collapse;",
    "border-separate": "border-collapse: separate",
    //border-spacing - missing
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
    "origin-top": "transform-origin: top;", 
    "origin-right": "transform-origin: right;",
    "origin-bottom": "transform-origin: bottom;",
    "origin-left": "transform-origin: left;",

    "origin-center": "transform-origin: center;",
    
    "origin-top-right": "transform-origin: top right;",
    "origin-top-left": "transform-origin: top left;",

    "origin-bottom-right": "transform-origin: bottom right;",
    "origin-bottom-left": "transform-origin: bottom left;",
    "sr-only": "position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0, 0, 0, 0);white-space: nowrap;border-width: 0;" ,
    "not-sr-only": "position: static;width: auto;height: auto;padding: 0;margin: 0;overflow: visible;clip: auto;white-space: normal;",
    // accent - caret - gvc
    "appearance-none": "appearance: none;",
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
    //snap type missing
    "snap-align-none": "scroll-snap-align: none;",
    //touch
    "touch-auto":	"touch-action: auto;",
    "touch-none":	"touch-action: none;",
    "touch-pan-x":	"touch-action: pan-x;",
    "touch-pan-left":	"touch-action: pan-left;",
    "touch-pan-right":	"touch-action: pan-right;",
    "touch-pan-y":	"touch-action: pan-y;",
    "touch-pan-up":	"touch-action: pan-up;",
    "touch-pan-down":	"touch-action: pan-down;",
    "touch-pinch-zoom":	"touch-action: pinch-zoom;",
    "touch-manipulation":	"touch-action: manipulation;",

    "pointer-events-none":	"pointer-events: none;",
    "pointer-events-auto":	"pointer-events: auto;",

    "resize-none":	"resize: none;",
    "resize-y":	"resize: vertical;",
    "resize-x":	"resize: horizontal;",
    "resize":	"resize: both;",

    "stroke-0":	"stroke-width: 0;",
    "stroke-1":	"stroke-width: 1;",
    "stroke-2":	"stroke-width: 2;",
    }

const scales = { scaleStyles, scaleContent, scaleBreak }
export {scales, classes}

//underline - thickness : scalepx //animations// space-y-reverse divide-y-reverse

