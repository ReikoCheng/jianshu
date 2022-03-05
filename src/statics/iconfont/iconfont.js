import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'iconfont';  
    src: url('//at.alicdn.com/t/font_3004057_o81q9lb8wi.woff2?t=1639540665019') format('woff2'),
         url('//at.alicdn.com/t/font_3004057_o81q9lb8wi.woff?t=1639540665019') format('woff'),
         url('//at.alicdn.com/t/font_3004057_o81q9lb8wi.ttf?t=1639540665019') format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
