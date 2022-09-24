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
    text: {
        left: "text-align: left;",
        center: "text-align: center;",
        right: "text-align: right;",
        justify: "text-align: justify;",
        start: "text-align: start;",
        end: "text-align: end;",

        truncate: "overflow: hidden; text-overflow: ellipsis;white-space: nowrap;",
        ellipsis: "text-overflow: ellipsis;",
        clip: "text-overflow: clip;",
        xs: "font-size: 0.75rem;line-height: 1rem;",
        sm: "font-size: 0.875rem;line-height: 1.25rem;",
        base: "font-size: 1rem;line-height: 1.5rem;",
        lg: "font-size: 1.125rem;line-height: 1.75rem;",
        xl: "font-size: 1.25rem;line-height: 1.75rem;",
        "2xl": "font-size: 1.5rem;line-height: 2rem;",
        "3xl": "font-size: 1.875rem;line-height: 2.25rem;",
        "4xl": "font-size: 2.25rem;line-height: 2.5rem;",
        "5xl": "font-size: 3rem;line-height: 1;",
        "6xl": "font-size: 3.75rem;line-height: 1;",
        "7xl": "font-size: 4.5rem;line-height: 1;",
        "8xl": "font-size: 6rem;line-height: 1;",
        "9xl": "font-size: 8rem; line-height: 1;",
        
    },
    underlineOffset: { auto: "text-underline-offset: auto;" },
    align: {
        baseline: "vertical-align: baseline;",
        top: "vertical-align: top;",
        middle: "vertical-align: middle;",
        bottom: "vertical-align: bottom;",
        sub: "vertical-align: sub;",
        super: "vertical-align: super;",
        text: {
            top: "vertical-align: text-top;",
            bottom: "vertical-align: text-bottom;"
        }
    },
    list: {
        inside: "list-style-position: inside;",
        outside: "list-style-position: outside;",
        none: "list-style-type: none;",
        disc: "list-style-type: disc;",
        decimal: "list-style-type: decimal;"
    },
    decoration: {
        fromFont: "text-decoration-thickness: from-font;",
        auto: "text-decoration-thickness: auto;"
    },
    //whitespace cursor  place-content place-items place-self resize user-select pointer-events float clear  will-change
    break: {
        normal: "overflow-wrap: normal;word-break: normal;",
        words: "overflow-wrap: break-word;",
        all: "word-break: break-all;",
        after: {avoid: { page: "break-after: avoid-page;" }},
        before: {avoid: {page: "break-before: avoid-page;"}},
        inside: {
            auto: "break-inside: auto;",
            avoid: "break-inside: avoid;",
            avoidPage: "break-inside: avoid-page;",
            avoidColumn: "break-inside: avoid-column;",
        }

    },
    content: {
        none: "content: none;",
        center: "align-content: center;",
        start: "align-content: flex-start;",
        end: "align-content: flex-end;",
        between: "align-content: space-between;",
        around: "align-content: space-around;",
        evenly: "align-content: space-evenly;",
            },
    leading:{
        none: "line-height: 1;",
        tight: "line-height: 1.25;",
        snug: "line-height: 1.375;",
        normal: "line-height: 1.5;",
        relaxed: "line-height: 1.625;",
        loose: "line-height: 2;"
    },
    tracking:{
        tighter: "letter-spacing: -0.05em;",
        tight: "letter-spacing: -0.025em;",
        normal: "letter-spacing: 0em;",
        wide: "letter-spacing: -0.05em;",
        wider: "letter-spacing: 0.05em;",
        tighter: "letter-spacing: -0.05em;",
        widest: "letter-spacing: 0.1em;"
    },
    w: { screen: "width: 100vw;" },
    h: { screen: "height: 100vh;" },
    min: { w: { 0: "min-width: 0px;" }, h: { 0: "min-height: 0px;", screeen: "min-height: 100vh;" }},
    max:{
        w: {
            0:	"max-width: 0rem;",
            xs:	"max-width: 20rem;", 
            sm:	"max-width: 24rem;", 
            md:	"max-width: 28rem;", 
            lg:	"max-width: 32rem;", 
            xl:	"max-width: 36rem;", 
            "2xl":	"max-width: 42rem;", 
            "3xl":	"max-width: 48rem;", 
            "4xl":	"max-width: 56rem;", 
            "5xl":	"max-width: 64rem;",
            "6xl":	"max-width: 72rem;",
            "7xl":	"max-width: 80rem;",
            prose:	"max-width: 65ch;",
            screen: {
                sm:	"max-width: 640px;",
                md:	"max-width: 768px;",
                lg:	"max-width: 1024px;",
                xl:	"max-width: 1280px;",
                "2xl":	"max-width: 1536px;",
            }
        },
        h: { screen: "max-height: 100vh;" }
    },
    basis: { auto: "flex-basis: auto;" },
    flex: {//
        row: "flex-direction: row;",
        rowReverse:	"flex-direction: row-reverse;",
        col: "flex-direction: column;",
        colReverse:	"flex-direction: column-reverse;",
        wrap: "flex-wrap: wrap;",
        wrapReverse: "flex-wrap: wrap-reverse;",
        nowrap: "flex-wrap: nowrap;",
        1: "flex: 1 1 0%;",
        auto: "flex: 1 1 auto;",
        initial: "flex: 0 1 auto;",
        none: "flex: none;",
    },
    order: {
        first: "order: -9999;",
        last: "order: 9999;",
        none: "order: 0;",
    },
    
    inline: {
        block: "display: inline-block;",
        flex: "display: inline-flex;",
        grid: "display: inline-grid;",
        table:	"display: inline-table;"
    },
    table:{
        caption: "display: table-caption;",
        cell: "display: table-cell;",
        column: "display: table-column;",
        // column-group	display: table-column-group;
        // footer-group	display: table-footer-group;
        // header-group	display: table-header-group;
        row: {group: "display: table-row-group;"},
        row: "display: table-row;",
    },    
    flow: {root: "display: flow-root;"},    
    
    list: {item: "display: list-item;"},
    grid: {
        cols: { none: "grid-template-columns: none;" },
        rows: { none: "grid-template-rows: none;" },
        flow: {
            row:	"grid-auto-flow: row;",
            col:	"grid-auto-flow: column;",
            dense:	"grid-auto-flow: dense;",
            rowDense:	"grid-auto-flow: row dense;",
            colDense:	"grid-auto-flow: column dense;",
        }
    },
    col: {
        auto: "grid-column: auto;",
        span: { full: "grid-column: 1 / -1;" },
        start: { auto: "grid-column-start: auto;" },
        end: { auto: "grid-column-end: auto;" }
    },
    row: {
        auto: "grid-row: auto;",
        span: { full: "grid-row: 1 / -1;" },
        start: { auto: "grid-row-start: auto;" },
        end: { auto: "grid-row-end: auto;" }
    },
    bg: {
        fixed: "background-attachment: fixed;",
        local: "background-attachment: local;",
        scroll: "background-attachment: scroll;",
        cilp: {
            border: "background-clip: border-box;",
            padding: "background-clip: padding-box;",
            content: "background-clip: content-box;",
            text: "background-clip: text;",
        },
        origin: {
            border: "background-origin: border-box;",
            padding: "background-origin: padding-box;",
            content: "background-origin: content-box;",
        },
        //
        bottom: "background-position: bottom;",
        center: "background-position: center;",
        left: "background-position: left;",
        leftBottom: "background-position: left bottom;",
        leftTop: "background-position: left top;",
        right: "background-position: right;",
        rightBottom: "background-position: right bottom;",
        rightTop: "background-position: right top;",
        top: "background-position: top;",
        //
        auto: "background-size: auto;",
        cover: "background-size: cover;",
        contain: "background-size: contain;",
        blend: {
            normal: "background-blend-mode: normal;",
            multiply: "background-blend-mode: multiply;",
            screen: "background-blend-mode: screen;",
            overlay: "background-blend-mode: overlay;",
            darken: "background-blend-mode: darken;",
            lighten:	"background-blend-mode: lighten;",
            // color-dodge: "background-blend-mode: color-dodge;",
            // color-burn: "background-blend-mode: color-burn;",
            hard: {light: "background-blend-mode: hard-light;"},
            soft: {light: "background-blend-mode: soft-light;"},
            difference: "background-blend-mode: difference;",
            exclusion: "background-blend-mode: exclusion;",
            hue: "background-blend-mode: hue;",
            saturation: "background-blend-mode: saturation;",
            color: "background-blend-mode: color;",
            luminosity: "background-blend-mode: luminosity;",
        }   
    },
    auto: {
        cols: {fr: "grid-auto-columns: minmax(0, 1fr);"},
        rows: {fr: "grid-auto-rows: minmax(0, 1fr);"}
    },
 
    justify: {
        start: "justify-content: flex-start;",
        end: "justify-content: flex-end;",
        center: "justify-content: center;",
        between: "justify-content: space-between;",
        around: "justify-content: space-around;",
        evenly: "justify-content: space-evenly;",
        items: {
            start: "justify-items: start;",
            end: "justify-items: end;",
            center: "justify-items: center;",
            stretch: "justify-items: stretch;",
        },
        self: {
            auto: "justify-self: auto;",
            start: "justify-self: start;",
            end: "justify-self: end;",
            center: "justify-self: center;",
            stretch: "justify-self: stretch;",
        }
    },
    items: {
        start: "align-items: flex-start;",
        end: "align-items: flex-end;",
        center: "align-items: center;",
        baseline: "align-items: baseline;",
        stretch: "align-items: stretch;",
    },
    self: {
        auto: "align-self: auto;",
        start: "align-self: flex-start;",
        end: "align-self: flex-end;",
        center: "align-self: center;",
        stretch: "align-self: stretch;",
        baseline: "align-self: baseline;",
    },
    aspect: {
        auto: "aspect-ratio: auto;",
        square: "aspect-ratio: 1 / 1;",
        video: "aspect-ratio: 16 / 9;",
    },
    border: {
        // x: {},
        // y: {},
        collapse: "border-collapse: collapse;",
        separate: "border-collapse: separate",
        spacing: { x: {}, y: {} }
    },
    outline:{
        none: "outline: 2px solid transparent;outline-offset: 2px;",
        offset: {}
    },
    
    z: {
        index: {
            0: "z-index: 0;",
            10: "z-index: 10;",
            20: "z-index: 20;",
            30: "z-index: 30;",
            40: "z-index: 40;",
            50: "z-index: 50;",
            auto: "z-index: auto;",
        }
    },
    table: { auto: "table-layout: auto;", fixed: "table-layout: fixed;"},
    transition:{
        none: "transition-property: none;",
        all: "transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;",
        base: "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;",
        colors:	"transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;",
        opacity: "transition-property: opacity;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;",
        shadow: "transition-property: box-shadow;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;",
        transform: "transition-property: transform;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;",
    },
    ease: {
        linear: "transition-timing-function: linear;",
        in: "transition-timing-function: cubic-bezier(0.4, 0, 1, 1);",
        out: "transition-timing-function: cubic-bezier(0, 0, 0.2, 1);",
        inOut: "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);",
    },
    origin: {
        center: "transform-origin: center;",
        top: "transform-origin: top;",
        topRight: "transform-origin: top right;",
        right: "transform-origin: right;",
        bottomRight: "transform-origin: bottom right;",
        bottom: "transform-origin: bottom;",
        bottomLeft: "transform-origin: bottom left;",
        left: "transform-origin: left;",
        topLeft: "transform-origin: top left;",
    },
    sr:{ only: "position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0, 0, 0, 0);white-space: nowrap;border-width: 0;" },
    not: { sr: { only: "position: static;width: auto;height: auto;padding: 0;margin: 0;overflow: visible;clip: auto;white-space: normal;" } },
    accent: {},//------
    appearance:{none: "appearance: none;"},
    caret: {},
    scroll: {auto: "scroll-behavior: auto;", smooth: "scroll-behavior: smooth;" },
    snap: {
        start: "scroll-snap-align: start;",
        end: "scroll-snap-align: end;",
        center: "scroll-snap-align: center;",
        normal: "scroll-snap-stop: normal;",
        always: "scroll-snap-stop: always;",
        none: 	"scroll-snap-type: none;",
        // x: 	"scroll-snap-type: x var(--tw-scroll-snap-strictness);",
        // y: 	"scroll-snap-type: y var(--tw-scroll-snap-strictness);",
        // both: 	"scroll-snap-type: both var(--tw-scroll-snap-strictness);",
        // mandatory: 	"--tw-scroll-snap-strictness: mandatory;",
        // proximity: 	"--tw-scroll-snap-strictness: proximity;",
        align: {none: "scroll-snap-align: none;"}
    },
    touch: {
        auto: "touch-action: auto;",
        none: "touch-action: none;",
        pan: {
            x: "touch-action: pan-x;",
            left: "touch-action: pan-left;",
            right: "touch-action: pan-right;",
            y: "touch-action: pan-y;",
            up: "touch-action: pan-up;",
            down: "touch-action: pan-down;",
        },
        pinch: {zoom: "touch-action: pinch-zoom;"},
        manipulation: "touch-action: manipulation;",
    },
    box: {
        decoration: {
            clone: "box-decoration-break: clone;",
            slice: "box-decoration-break: slice;",
        },
        border: "box-sizing: border-box;",
        content: "box-sizing: content-box;",
    },
    
    object: {
        contain: "object-fit: contain;",
        cover: "object-fit: cover;",
        fill: "object-fit: fill;",
        none: "object-fit: none;",
        scale: {down: "object-fit: scale-down;"}
    },

    opacity: {
        0: "opacity: 0;",
        5: "opacity: 0.05;",
        10: "opacity: 0.1;",
        20: "opacity: 0.2;",
        25: "opacity: 0.25;",
        30: "opacity: 0.3;",
        40: "opacity: 0.4;",
        50: "opacity: 0.5;",
        60: "opacity: 0.6;",
        70: "opacity: 0.7;",
        75: "opacity: 0.75;",
        80: "opacity: 0.8;",
        90: "opacity: 0.9;",
        95: "opacity: 0.95;",
        100: "opacity: 1;",
    },
    shadow: {
        sm: "box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);",
        md: "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
        lg: "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);",
        xl: "box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);",
        "2xl": "box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);",
        inner: "box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);",
        none: "box-shadow: 0 0 #0000;",
        0: '',
        1: 'box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 5%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);',
        2: 'box-shadow: 0px 3px 1px -2px rgb(0 0 0 /5%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);',
        3: 'box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 5%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);',
        4: 'box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 5%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);',
        5: 'box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 5%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);',
        6: 'box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 5%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);',
        7: 'box-shadow: 0px 4px 5px -2px rgb(0 0 0 / 5%), 0px 7px 10px 1px rgb(0 0 0 / 14%), 0px 2px 16px 1px rgb(0 0 0 / 12%);',
        8: 'box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 5%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);',
        9: 'box-shadow: 0px 5px 6px -3px rgb(0 0 0 / 5%), 0px 9px 12px 1px rgb(0 0 0 / 14%), 0px 3px 16px 2px rgb(0 0 0 / 12%);',
        10: 'box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 5%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);',
        11: 'box-shadow: 0px 6px 7px -4px rgb(0 0 0 / 5%), 0px 11px 15px 1px rgb(0 0 0 / 14%), 0px 4px 20px 3px rgb(0 0 0 / 12%);',
        12: 'box-shadow: 0px 7px 8px -4px rgb(0 0 0 / 5%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%);',
        13: 'box-shadow: 0px 7px 8px -4px rgb(0 0 0 / 5%), 0px 13px 19px 2px rgb(0 0 0 / 14%), 0px 5px 24px 4px rgb(0 0 0 / 12%);',
        14: 'box-shadow: 0px 7px 9px -4px rgb(0 0 0 / 20%), 0px 14px 21px 2px rgb(0 0 0 / 14%), 0px 5px 26px 4px rgb(0 0 0 / 12%);',
        15: 'box-shadow: 0px 8px 9px -5px rgb(0 0 0 / 5%), 0px 15px 22px 2px rgb(0 0 0 / 14%), 0px 6px 28px 5px rgb(0 0 0 / 12%);',
        16: 'box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 5%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%);',
        17: 'box-shadow: 0px 8px 11px -5px rgb(0 0 0 / 5%), 0px 17px 26px 2px rgb(0 0 0 / 14%), 0px 6px 32px 5px rgb(0 0 0 / 12%);',
        18: 'box-shadow: 0px 9px 11px -5px rgb(0 0 0 / 5%), 0px 18px 28px 2px rgb(0 0 0 / 14%), 0px 7px 34px 6px rgb(0 0 0 / 12%);',
        19: 'box-shadow: 0px 9px 12px -6px rgb(0 0 0 / 5%), 0px 19px 29px 2px rgb(0 0 0 / 14%), 0px 7px 36px 6px rgb(0 0 0 / 12%);',
        20: 'box-shadow: 0px 10px 13px -6px rgb(0 0 0 / 5%), 0px 20px 31px 3px rgb(0 0 0 / 14%), 0px 8px 38px 7px rgb(0 0 0 / 12%);',
        21: 'box-shadow: 0px 10px 13px -6px rgb(0 0 0 / 5%), 0px 21px 33px 3px rgb(0 0 0 / 14%), 0px 8px 40px 7px rgb(0 0 0 / 12%);',
        22: 'box-shadow: 0px 10px 14px -6px rgb(0 0 0 / 5%), 0px 22px 35px 3px rgb(0 0 0 / 14%), 0px 8px 42px 7px rgb(0 0 0 / 12%);',
        23: 'box-shadow: 0px 11px 14px -7px rgb(0 0 0 / 5%), 0px 23px 36px 3px rgb(0 0 0 / 14%), 0px 9px 44px 8px rgb(0 0 0 / 12%);',
        24: 'box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 5%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);',
        default: 'box-shadow: 0px 3px 1px -2px rgb(0 0 0 /5%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%;)'
     },
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