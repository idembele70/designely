import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  background-color:#F2F2F2;
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
  font-family:"Inter", "sans-serif";
  font-style:normal;
  font-weight:600;
  line-height:1.2;
}
h5 {
  font-family: "Inter", "sans-serif";
  font-style:normal;
  font-weight:600;
  line-height:1.2;
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
  font-size: 1.875rem;
  font-family: "Inter", "sans-serif";
  font-style:normal;
  font-weight:600;
  line-height:1.2;
}
`;

export default GlobalStyle;