import { CSSObject, css } from "styled-components";

// Breakpoints Defined By using MUI's
export function XXLDown(props: CSSObject) {
  return css`
  @media only screen and ( max-width: 1920px){
    ${props}
  }
  `
}
export function XLDown(props: CSSObject) {
  return css`
  @media only screen and ( max-width: 1536px){
    ${props}
  }
  `
}
export function LGDown(props: CSSObject) {
  return css`
  @media only screen and ( max-width: 1200px){
    ${props}
  }
  `
}
export function MDDown(props: CSSObject) {
  return css`
  @media only screen and ( max-width: 992px){
    ${props}
  }
  `
}
export function XSDown(props: CSSObject) {
  return css`
  @media only screen and ( max-width: 576px){
    ${props}
  }
  `
}

