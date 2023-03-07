import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin:0;
}
* {
  box-sizing: border-box;
  margin:0;
}
h1 {
  font-family:"Inter", "sans-serif";
  font-weight:600;
  font-style:normal;
  line-height: 1.2;
}
h3 {
  font-family:"Jost", "sans-serif";
  font-weight:600;
  line-height:1.2;
}
h4 {
  font-family:"Jost", "sans-serif";
  font-weight:600;
  line-height:1.2;
}
h5 {
  font-family: "Jost", "sans-serif";
  font-weight:400;
  line-height:1.5;
}
a {
  font-family: "Inter", "sans-serif";
  text-decoration: none;
  font-weight: 500;
  font-style:normal;
  line-height: 1.2;
  font-size: 1.5625rem;
}
p {
  font-size:1rem;
  font-family: "Open Sans", "sans-serif";
  font-weight:400;
  line-height:1.5;
}
`;

export default GlobalStyle;