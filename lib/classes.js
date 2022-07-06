import Colors from "./Colors"
let scaleStyles = [ "solid", "dashed", "dotted", "double", "hidden", "wavy", "none"]
let scaleTime = ["75", "100", "150", "200", "300", "500", "700", "1000"] 
let scaleScale = ["0", ".5", ".75", ".9", ".95", "1", "1.05", "1.1", "1.25", "1.5"]
let scale2 = {px: "1px"}
let scaleContent = { min:"min-content", max:"max-content", fit: "fit-content", auto: "auto", full: "100%", none: "none" }
let scalePositions = ["top", "bottom", "left", "right"]
let scaleBreak = ["auto", "avoid", "all", "page", "left", "right", "column"]
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
    "full": "100%"
}
let scale360 = {}
for(let i = 1; i <= 360; i++) scale360[i] = String(i)

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
    indent: {},
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

    underline: "text-decoration-line: underline;",
    overline: "text-decoration-line: overline;",
    lineThrough: "text-decoration-line: line-through;",
    noUnderline: "text-decoration-line: none;",
    uppercase: "text-transform: uppercase;",
    lowercase: "text-transform: lowercase;",
    capitalize: "text-transform: capitalize;",
    normalcase: "text-transform: none;",

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
    //
    normalNums:	"font-variant-numeric: normal;",
    ordinal:	"font-variant-numeric: ordinal;",
    slashedZero:	"font-variant-numeric: slashed-zero;",
    liningNums:	"font-variant-numeric: lining-nums;",
    oldstyleNums:	"font-variant-numeric: oldstyle-nums;",
    proportionalNums:	"font-variant-numeric: proportional-nums;",
    tabularNums:	"font-variant-numeric: tabular-nums;",
    diagonalFractions:	"font-variant-numeric: diagonal-fractions;",
    stackedFractions:	"font-variant-numeric: stacked-fractions;",
    font: {
        thin:	"font-weight: 100;",
        extralight:	"font-weight: 200;",
        light:	"font-weight: 300;",
        normal:	"font-weight: 400;",
        medium:	"font-weight: 500;",
        semibold:	"font-weight: 600;",
        bold:	"font-weight: 700;",
        extrabold:	"font-weight: 800;",
        black:	"font-weight: 900;",
    },
    italic: "font-style: italic;",
    notItalic: "font-style: normal;",//
    antialiased: "-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;",
    subpixelAntialiased: "-webkit-font-smoothing: auto;-moz-osx-font-smoothing: auto;",
    p:{}, px: {}, py: {}, pt: {}, pr: {}, pb: {}, pl: {},
    m:{}, mx: {}, my: {}, mt: {}, mr: {}, mb: {}, ml: {},
    space: {y: {},x: {}},
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
    grow:	"flex-grow: 1;",
    grow0:	"flex-grow: 0;",
    shrink:	"flex-shrink: 1;",
    shrink0:	"flex-shrink: 0;",
    order: {
        first: "order: -9999;",
        last: "order: 9999;",
        none: "order: 0;",
    },
    block:	"display: block;",
    inline: {
        block: "display: inline-block;",
        flex: "display: inline-flex;",
        grid: "display: inline-grid;",
        table:	"display: inline-table;"
    },
    
    // inline:	"display: inline;",
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
    // table	display: table;
    
    flow: {root: "display: flow-root;"},
 
    // grid	display: grid;
    
    contents: "display: contents;",
    list: {item: "display: list-item;"},
  
    hidden:	"display: none;",
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
    },
    auto: {
        cols: {fr: "grid-auto-columns: minmax(0, 1fr);"},
        rows: {fr: "grid-auto-rows: minmax(0, 1fr);"}
    },
    gap: { x: {}, y: {} },
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
        x: {},
        y: {},
        base: "border: 1px solid #ccc;",
        collapse: "border-collapse: collapse;",
        separate: "border-collapse: separate",
        spacing: { x: {}, y: {} }
    },
    divide:{ x: {}, y: {} },
    outline:{
        none: "outline: 2px solid transparent;outline-offset: 2px;",
        offset: {}
    },
    static: "position: static;",
    fixed: "position: fixed;",
    absolute: "position: absolute;",
    relative: "position: relative;",
    sticky: "position: sticky;",

    visible: "visibility: visible;",
    invisible: "visibility: hidden;",
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
    duration: {},
    ease: {
        linear: "transition-timing-function: linear;",
        in: "transition-timing-function: cubic-bezier(0.4, 0, 1, 1);",
        out: "transition-timing-function: cubic-bezier(0, 0, 0.2, 1);",
        inOut: "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);",
    },
    delay: {},
    // animate: {
    //     none: "animation: none;",
    //     spin: ""
    // }
    scale: {x: {}, y: {}},
    translate: { x: {}, y: {} },
    skew: { x: {}, y: {} },
    rotate: {},
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
    fill: {},
    stroke: {},
    sr:{ only: "position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0, 0, 0, 0);white-space: nowrap;border-width: 0;" },
    not: { sr: { only: "position: static;width: auto;height: auto;padding: 0;margin: 0;overflow: visible;clip: auto;white-space: normal;" } },
    accent: {},
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
    isolate: "isolation: isolate;",
    isolationAuto: "isolation: auto;",
    object: {
        contain: "object-fit: contain;",
        cover: "object-fit: cover;",
        fill: "object-fit: fill;",
        none: "object-fit: none;",
        scale: {down: "object-fit: scale-down;"}
    },
    inset: { x: {}, y: {} },
    right: {}, left: {}, top: {}, bottom: {}, offset: {}

}
scaleBreak.forEach( e =>{
    classes.break.after[e] = "break-after:" + e + ";"
    classes.break.before[e] = "break-before:" + e + ";"
})

scaleTime.forEach( e => {
    classes.duration[e] = "transition-duration: " + e + "ms;"
    classes.delay[e] = "transition-delay: " + e + "ms;"
})
scaleScale.forEach( e => {
    classes.scale[e] = "transform: scale("+ e + ");"
    classes.scale.y[e] = "transform: scaleY("+ e + ");"
    classes.scale.x[e] = "transform: scaleX("+ e + ");"
})
scaleStyles.forEach(e => {
    classes.outline[e] = "outline-style:" + e + ";"
    classes.decoration[e] = "text-decoration-style: " + e + ";",
    classes.border[e] = "border-style:" + e + ";"
    classes.divide[e] = "border-style:" + e + ";"
})
Object.entries(scaleContent).forEach(([key, value]) => {
    classes.w[key] = "width: " + value + ";"
    classes.h[key] = "heigh: " + value + ";"
    classes.min.w[key] = "min-width: " + value + ";"
    classes.min.h[key] = "min-heigh: " + value + ";"
    classes.max.h[key] = "max-heigh: " + value + ";"
    classes.max.w[key] = "max-width: " + value + ";"
    classes.auto.cols[key] = "grid-auto-columns:" + value + ";"
    classes.auto.rows[key] = "grid-auto-rows:" + value + ";"
}) 
Object.entries(scale2).forEach(([key, value]) => {
    classes.indent[key] = "text-indent: " + value + ";"
    scalePositions.forEach( e => {
        classes["p" +  e.at(0)] = "padding-" + e + ":" + value + ";"
        classes["m" +  e.at(0)] = "margin-" + e + ":" + value + ";"
        classes[e] = e + ":" + value + ";"
    })
    classes.p[key] = "padding: " + value + ";"
    classes.py[key] = "padding-top: " + value + ";" +"padding-bottom: " + value + ";"
    classes.px[key] = "padding-left: " + value + ";" +"padding-right: " + value + ";"
    classes.m[key] = "margin: " + value + ";"
    classes.my[key] = "margin-top: " + value + ";" +"margin-bottom: " + value + ";"
    classes.mx[key] = "margin-left: " + value + ";" +"margin-right: " + value + ";"
    classes.space.x[key] = "margin-left: " + value + ";"
    classes.space.y[key] = "margin-top: " + value + ";"
    classes.w[key] = "width: " + value + ";"
    classes.h[key] = "height: " + value + ";"
    classes.max.h[key] = "max-height:" + value + ";"
    classes.basis[key] = "flex-basis:" + value + ";" 
    classes.gap[key] = "gap: " + value + ";"
    classes.gap.x[key] = "column-gap: " + value + ";"
    classes.gap.y[key] = "row-gap:" + value + ";"
    classes.translate.x[key] = "translateX(" + value + ");"
    classes.translate.y[key] = "translateY(" + value + ");"
    classes.inset[key] = "top: "+value+"px; right: "+value+"px; bottom: "+value+"px; left: "+value+"px;"
    classes.inset.y[key] = "top: "+value+"px; bottom: "+value+"px;"
    classes.inset.x[key] = "left: "+value+"px;right: "+value+"px;"
    classes.leading[key] = "line-height: " + value + ";"
    // classes.border.spacing[key] = "column-gap: " + value + ";"
    // classes.border.spacing.x[key] = "column-gap: " + value + ";"
    // classes.border.spacing.y[key] = "row-gap:" + value + ";"
})
Object.entries(scaleFractions).forEach(([key, value]) => {
    classes.w[key] = "width: " + value + ";"
    classes.h[key] = "height: " + value + ";"
    classes.basis[key] = "flex-basis:" + value + ";"
})
Object.entries(Colors).forEach(([key, value]) => {
    classes.text[key] = "color: " + value + ";"
    classes.bg[key] = "background-color:" + value + ";"
    classes.decoration[key] = "text-decoration-color: " + value + ";"
    classes.border[key] = "border-color:" + value + ";"
    classes.divide[key] = "border-color:" + value + ";",
    classes.outline[key] = "outline-color:" + value + ";"
    classes.stroke[key] = "stroke:" + value + ";"
    classes.fill[key] = "fill:" + value + ";"
    classes.accent[key] = "accent-color:" + value + ";"
    classes.caret[key] = "caret-color:" + value + ";"
})
Object.entries(scale360).forEach(([key, value]) => {
    classes.order[key] = "order:" + value + ";"
    classes.grid.cols[key] = "grid-template-columns: repeat(" + value + ", minmax(0, 1fr));"
    classes.grid.rows[key] = "grid-template-rows: repeat(" + value + ", minmax(0, 1fr));"
    classes.col.span[key] = "grid-column: span " + value +" / span " + value + ";"
    classes.col.start[key] = "grid-column-start:" + value +";"
    classes.col.end[key] = "grid-column-end:" + value +";"
    classes.row.span[key] = "grid-row: span " + value +" / span " + value + ";"
    classes.row.start[key] = "grid-row-start:" + value +";"
    classes.row.end[key] = "grid-row-end:" + value +";"
    classes.border[key] = "border-width:" + value + "px ;"
    classes.border.x[key] = "border-left-width: " + value + "px; border-right-width: " + value +"px;"
    classes.border.y[key] = "border-top-width: " + value + "px; border-bottom-width: " + value +"px;"
    classes.divide.x[key] = "border-right-width: " + value + "px; border-left-width: " + value + "px;"
    classes.divide.y[key] = "border-top-width: " + value + "px; border-bottom-width: " + value + "px;"
    classes.outline[key] = "outline-width:" + value + "px ;"
    classes.offset[key] = "outline-offset:" + value + "px ;"
    classes.stroke[key] = "stroke-width: "+value+";"
    classes.skew.x[key] = "transform: skewX(" + value + "deg);"
    classes.skew.y[key] = "transform: skewY(" + value + "deg);"
    classes.rotate[key] = "transform: rotate("+value+"deg);"
    classes.decoration[key] = "text-decoration-thickness: " + value + "px ;"
    classes.underlineOffset[key] = "text-underline-offset: " + value + "px ;"
})
export {
    scaleStyles,
scaleTime,
scaleScale,
scale2,
scaleContent,
scalePositions,
scaleBreak,
scaleFractions,
scale360
}
export default classes
// divide-y-reverse > * + *	--tw-divide-y-reverse: 1;
// divide-x-reverse > * + *	--tw-divide-x-reverse: 1;