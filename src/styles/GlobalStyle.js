import { css } from '@emotion/react';

const size = {
  7: '32pt',
  6: '20pt',
  5: '18pt',
  4: '16pt',
  3: '14pt',
  2: '12pt',
  1: '10pt',
};

export default css`
  @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

  * {
    padding: 0px;
    margin: 0px;
    font-family: 'Noto Sans CJK KR', sans-serif;
  }

  body {
    background-color: #dddddd;

    & main {
      padding: 0px 20px;
    }
  }

  h1 {
    font-size: 2em;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  
  /* 미디어 쿼리 */
  @media (min-width: 1px) and (max-width: 600px) {
    body main {max-width: 100%;}
    #blog-header .small-text,
    #blog-footer .small-text {font-size: ${size[1]};}
    #blog-menu a,
    #blog-footer a {font-size: ${size[1]};}
    #blog-index-page 
  }

  @media (min-width: 601px) and (max-width: 1000px) {
    body main {max-width: 100%;}
    #blog-header .small-text,
    #blog-footer .small-text {font-size: ${size[3]};}
    #blog-menu a,
    #blog-footer a {font-size: ${size[3]};}
  }

  @media (min-width: 1001px) {
    body main {
      max-width: 960px;
      margin: 0px auto;
    }
    #blog-header .small-text,
    #blog-footer .small-text {font-size: ${size[3]};}
    #blog-menu a,
    #blog-footer a {font-size: ${size[3]};}
  }
`;