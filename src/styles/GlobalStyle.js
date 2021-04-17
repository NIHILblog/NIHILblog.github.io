import { css } from '@emotion/react';

const size = {
  7: '32pt',
  6: '22pt',
  5: '18pt',
  4: '16pt',
  3: '14pt',
  2: '12pt',
  '1.5': '11pt',
  1: '10pt',
};

export default css`
  @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

  @font-face {
    font-family: 'CascadiaCode';
    src: url('https://nihilblog.github.io/blog/fonts/CascadiaCode.eot');
    src:
      url('https://nihilblog.github.io/blog/fonts/CascadiaCode.eot?#iefix') format('embedded-opentype'),
      url('https://nihilblog.github.io/blog/fonts/CascadiaCode.woff2') format('woff2'),
      url('https://nihilblog.github.io/blog/fonts/CascadiaCode.svg#CascadiaCode') format('svg'),
      url('https://nihilblog.github.io/blog/fonts/CascadiaCode.ttf') format('truetype'),
      url('https://nihilblog.github.io/blog/fonts/CascadiaCode.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    padding: 0px;
    margin: 0px;
    font-family: 'Noto Sans CJK KR', sans-serif;
  }

  body {
    background-color: #cccccc;
    & main {padding: 0px 20px;}
  }

  h1 {font-size: 2em;}
  ul {list-style: none;}
  a {text-decoration: none;}
  
  /* 미디어 쿼리 */
  @media (min-width: 1px) and (max-width: 600px) {
    /* 레이아웃 */
    body main {max-width: 100%;}

    /* 일반 텍스트 */
    #blog-header .small-text,
    #blog-footer .small-text,
    #blog-menu a,
    #blog-message p,
    #total-posts p,
    #blog-post-list .list-item .list-content .info-name,
    #blog-post-list .list-item .list-content .list-description,
    #blog-post-list .list-item .list-content .info-time,
    #blog-post-list .list-item .list-content .info-category,
    #blog-post-list .list-item .list-content .info-tag,
    #blog-info-page .block-content,
    #post-list-page .page-link,
    #post-list-page span,
    #blog-categories-page #item-list-name p,
    #blog-categories-page #item-list .list-item,
    #blog-tags-page #item-list-name p,
    #blog-tags-page #item-list .list-item,
    #blog-category-page #category-post-count p,
    #blog-category-page #category-post-list .list-item .list-content .info-name,
    #blog-category-page #category-post-list .list-item .list-content .list-description,
    #blog-category-page #category-post-list .list-item .list-content .info-time,
    #blog-category-page #category-post-list .list-item .list-content .info-category,
    #blog-category-page #category-post-list .list-item .list-content .info-tag,
    #blog-tag-page #tag-post-count p,
    #blog-tag-page #tag-post-list .list-item .list-content .info-name,
    #blog-tag-page #tag-post-list .list-item .list-content .list-description,
    #blog-tag-page #tag-post-list .list-item .list-content .info-time,
    #blog-tag-page #tag-post-list .list-item .list-content .info-category,
    #blog-tag-page #tag-post-list .list-item .list-content .info-tag,
    #post-content .post-paragraph,
    #post-metadata .content-data .item-name,
    #post-metadata .content-data time,
    #post-metadata .content-data .list-item,
    #post-content .Message-blue,
    #post-content .Message-red,
    #post-content .Message-green,
    #post-content .Message-yellow,
    #post-navigation .nav-button .nav-link,
    #post-navigation .nav-button span,
    #post-content .post-unordered-list,
    #post-content .post-ordered-list,
    .gatsby-highlight pre[class*="language-"] code[class*="language-"] span,
    .gatsby-highlight pre[class*="language-"] code[class*="language-"],
    .gatsby-highlight pre[class*="language-"],
    .gatsby-highlight,
    .gatsby-highlight button,
    #blog-error-page p,
    #blog-footer a {font-size: ${size[1]};}

    /* 제목 텍스트 */
    #blog-message h2,
    #blog-info-page .block-title,
    #blog-categories-page #item-list-name h2,
    #blog-tags-page #item-list-name h2,
    #blog-category-page #category-post-count h2,
    #blog-tag-page #tag-post-count h2,
    #blog-post-page #content-title,
    #post-content .post-heading-2,
    #blog-error-page h2,
    #total-posts h2 {font-size: ${size[4]};}

    #blog-category-page #category-post-list .list-item .list-title,
    #blog-tag-page #tag-post-list .list-item .list-title,
    #post-content .post-heading-3,
    #post-content .post-heading-4,
    #post-content .post-heading-5,
    #blog-post-list .list-item .list-title {font-size: ${size[3]}}

    /* 큰 텍스트 */
    #more-posts {font-size: ${size[5]}}
  }

  @media (min-width: 601px) and (max-width: 800px) {
    /* 레이아웃 */
    body main {max-width: 100%;}

    /* 일반 텍스트 */
    #blog-header .small-text,
    #blog-footer .small-text,
    #blog-menu a,
    #blog-message p,
    #total-posts p,
    #blog-post-list .list-item .list-content .info-name,
    #blog-post-list .list-item .list-content .list-description,
    #blog-post-list .list-item .list-content .info-time,
    #blog-post-list .list-item .list-content .info-category,
    #blog-post-list .list-item .list-content .info-tag,
    #blog-info-page .block-content,
    #post-list-page .page-link,
    #post-list-page span,
    #blog-categories-page #item-list-name p,
    #blog-categories-page #item-list .list-item,
    #blog-tags-page #item-list-name p,
    #blog-tags-page #item-list .list-item,
    #blog-category-page #category-post-count p,
    #blog-category-page #category-post-list .list-item .list-content .info-name,
    #blog-category-page #category-post-list .list-item .list-content .list-description,
    #blog-category-page #category-post-list .list-item .list-content .info-time,
    #blog-category-page #category-post-list .list-item .list-content .info-category,
    #blog-category-page #category-post-list .list-item .list-content .info-tag,
    #blog-tag-page #tag-post-count p,
    #blog-tag-page #tag-post-list .list-item .list-content .info-name,
    #blog-tag-page #tag-post-list .list-item .list-content .list-description,
    #blog-tag-page #tag-post-list .list-item .list-content .info-time,
    #blog-tag-page #tag-post-list .list-item .list-content .info-category,
    #blog-tag-page #tag-post-list .list-item .list-content .info-tag,
    #post-content .post-paragraph,
    #post-metadata .content-data .item-name,
    #post-metadata .content-data time,
    #post-metadata .content-data .list-item,
    #post-content .Message-blue,
    #post-content .Message-red,
    #post-content .Message-green,
    #post-content .Message-yellow,
    #post-navigation .nav-button .nav-link,
    #post-navigation .nav-button span,
    #post-content .post-unordered-list,
    #post-content .post-ordered-list,
    .gatsby-highlight pre[class*="language-"] code[class*="language-"] span,
    .gatsby-highlight pre[class*="language-"] code[class*="language-"],
    .gatsby-highlight pre[class*="language-"],
    .gatsby-highlight,
    .gatsby-highlight button,
    #blog-error-page p,
    #blog-footer a {font-size: ${size[2]};}

    /* 제목 텍스트 */
    #blog-message h2,
    #blog-info-page .block-title,
    #blog-categories-page #item-list-name h2,
    #blog-tags-page #item-list-name h2,
    #blog-category-page #category-post-count h2,
    #blog-tag-page #tag-post-count h2,
    #blog-post-page #content-title,
    #post-content .post-heading-2,
    #blog-error-page h2,
    #total-posts h2 {font-size: ${size[5]};}

    #blog-category-page #category-post-list .list-item .list-title,
    #blog-tag-page #tag-post-list .list-item .list-title,
    #post-content .post-heading-3,
    #post-content .post-heading-4,
    #post-content .post-heading-5,
    #blog-post-list .list-item .list-title {font-size: ${size[4]}}

    /* 큰 텍스트 */
    #more-posts {font-size: ${size[6]}}
  }

  @media (min-width: 801px) {
    /* 레이아웃 */
    body main {
      max-width: 960px;
      margin: 0px auto;
    }

    /* 일반 텍스트 */
    #blog-header .small-text,
    #blog-footer .small-text,
    #blog-menu a,
    #blog-message p,
    #total-posts p,
    #blog-post-list .list-item .list-content .info-name,
    #blog-post-list .list-item .list-content .list-description,
    #blog-post-list .list-item .list-content .info-time,
    #blog-post-list .list-item .list-content .info-category,
    #blog-post-list .list-item .list-content .info-tag,
    #blog-info-page .block-content,
    #post-list-page .page-link,
    #post-list-page span,
    #blog-categories-page #item-list-name p,
    #blog-categories-page #item-list .list-item,
    #blog-tags-page #item-list-name p,
    #blog-tags-page #item-list .list-item,
    #blog-category-page #category-post-count p,
    #blog-category-page #category-post-list .list-item .list-content .info-name,
    #blog-category-page #category-post-list .list-item .list-content .list-description,
    #blog-category-page #category-post-list .list-item .list-content .info-time,
    #blog-category-page #category-post-list .list-item .list-content .info-category,
    #blog-category-page #category-post-list .list-item .list-content .info-tag,
    #blog-tag-page #tag-post-count p,
    #blog-tag-page #tag-post-list .list-item .list-content .info-name,
    #blog-tag-page #tag-post-list .list-item .list-content .list-description,
    #blog-tag-page #tag-post-list .list-item .list-content .info-time,
    #blog-tag-page #tag-post-list .list-item .list-content .info-category,
    #blog-tag-page #tag-post-list .list-item .list-content .info-tag,
    #post-content .post-paragraph,
    #post-metadata .content-data .item-name,
    #post-metadata .content-data time,
    #post-metadata .content-data .list-item,
    #post-content .Message-blue,
    #post-content .Message-red,
    #post-content .Message-green,
    #post-content .Message-yellow,
    #post-navigation .nav-button .nav-link,
    #post-navigation .nav-button span,
    #post-content .post-unordered-list,
    #post-content .post-ordered-list,
    .gatsby-highlight pre[class*="language-"] code[class*="language-"] span,
    .gatsby-highlight pre[class*="language-"] code[class*="language-"],
    .gatsby-highlight pre[class*="language-"],
    .gatsby-highlight,
    .gatsby-highlight button,
    #blog-error-page p,
    #blog-footer a {font-size: ${size[3]};}

    /* 제목 텍스트 */
    #blog-message h2,
    #blog-info-page .block-title,
    #blog-categories-page #item-list-name h2,
    #blog-tags-page #item-list-name h2,
    #blog-category-page #category-post-count h2,
    #blog-tag-page #tag-post-count h2,
    #blog-post-page #content-title,
    #post-content .post-heading-2,
    #blog-error-page h2,
    #total-posts h2 {font-size: ${size[6]};}

    #blog-category-page #category-post-list .list-item .list-title,
    #blog-tag-page #tag-post-list .list-item .list-title,
    #post-content .post-heading-3,
    #post-content .post-heading-4,
    #post-content .post-heading-5,
    #blog-post-list .list-item .list-title {font-size: ${size[5]}}

    /* 큰 텍스트 */
    #more-posts {font-size: ${size[6]}}
  }
`;