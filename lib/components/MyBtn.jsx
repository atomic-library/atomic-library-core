//-----------------IMPORTS---------------
import React from 'react';
import styled from "styled-components"
import {customizer, MyThemeColors as colors}  from "../main";
import getProperties from '../getProperties'
import {useComponentContext} from '../AtomicContext'

//---------------END_IMPORTS---------------

const sizes = {
  smFont: "0.8125rem",
  smPadding: "8px 12px ",
  smMargin: "10px",
  mdFont: "0.875rem",
  mdPadding: "10px 20px ",
  mdMargin: "10px ",
  lgFont: " 0.9375rem",
  lgPadding: "12px 28px ",
  lgMargin: "10px "
};

let colorMain = type => type ? colors[type].main : colors.primary.main
let colorLighter = (type) => type ? colors[type].lighter : colors.primary.lighter
let colorText = (type) => type === "light" ? colors.text.main : colors.text.white;
let colorRaised = (type) => type ? colors[type].light : colors.primary.light
let colorDisable = colors.disabled.main

//------------STYLED_COMPONENTS---------------
const Button = styled.button`
  /* static */
    cursor: pointer;
    transition: 0.1s;
    border: none;
    :hover{transition: 0.1s}
    :active{transition: 0.1s}

   /* dinamyc */
  ${({insertStyleBefore})=> insertStyleBefore && insertStyleBefore}

  ${({ size })=>size ? 
      `
        font-family:${sizes[size + 'Font']};
        padding:${sizes[size + 'Padding']};
        margin:${sizes[size + 'Margin']}; 
      ` 
    : 
      `
        font-family:${sizes.mdFont};
        padding:${sizes.mdPadding};
        margin:${sizes.mdMargin}; 
      `} 

 
  /* primary */
  ${({primary, type}) => primary && (`
    background: ${colorMain(type)};
    color: ${colorText(type)};
  `)} 

  /* ghost */
  ${({ghost, type}) => ghost && (`
    background: none;
    color ${colorMain(type)};
    border: 1px solid ${colorMain(type)};
    :hover{
      background: ${colorLighter(type)};
    }
  `)}
  /* smooth */
  ${({smooth, type}) => smooth && (
    `background: ${colorLighter(type)};
    color ${colorMain(type)};`
    )}
  /* text */
  ${({text, type}) => text && ( 
    `background: none;
    color ${colorMain(type)};
    :hover{background: ${colorLighter(type)};}`
    )}

   ${({ raisedColor, type}) => raisedColor && (
     "box-shadow: 3px 3px 5px " +  colorRaised(type) + ";" +
      ":hover { box-shadow: 1px 1px 5px " + colorRaised(type) + "}" +
      ":active { box-shadow: none }"
    )}

   ${({ raised}) => raised && (
     "box-shadow: 3px 3px 5px #ccc;" +
      ":hover { box-shadow: 1px 1px 5px #ccc }" +
      ":active { box-shadow: none }"
    )}

  ${({size, type, ...rest})=>getProperties({size: false, ...rest})}

  /* disabled */
  ${({disabled, ghost}) => disabled && customizer({
      c: colorDisable, cursor: 'no-drop',bxSw: 'none',
      bg: colors.disabled.lighter,
      ':hover': {bg: colors.disabled.lighter, bxSw: 'none'},
      b: ghost ? '1px solid' + colors.disabled.main : 'none',
  })}

  ${({myDisabled, disabled}) => disabled && customizer(myDisabled)}
`;
//----------END_STYLED_COMPONENTS----------
export default function MyBtn({className, myRef, children, ...rest}) {
  const {...props} = useComponentContext() || false
  return <Button {...props} {...rest} ref={myRef} className={className} >{children}</Button>
}
