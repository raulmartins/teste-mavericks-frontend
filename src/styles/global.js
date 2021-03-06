import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    height: 100vh;
    background: #E5E9EF;
    text-rendering:optimizeLegibility !important;
    -webkit-font-smoothing:antialiased !important;
  }

`

export default globalStyle
