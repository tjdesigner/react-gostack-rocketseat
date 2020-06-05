import {createGlobalStyle} from 'styled-components';

import gitHubBackground from './../assets/imgs/github-bg.svg'
import { shade } from 'polished';

export var colors = {
  'success':"#04d361",
  'danger':"#eb3535",
  'warning': '#ffc107',
  'primary': '#0c2c3b',
  'secondary': '#348eb9',
  'tertiary':'#607d8b',
  'light': '#d9e9f0'
  }

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: ${colors.primary} url(${gitHubBackground}) no-repeat 70% top;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font-size: 16px;
  font-family: roboto, sans-serif;
}

button {
  cursor: pointer;
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

`;
