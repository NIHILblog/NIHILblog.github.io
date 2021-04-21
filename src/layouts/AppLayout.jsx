import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FooterContainer from '@components/FooterContainer';
import { useSiteMetaDataQuery } from '@hooks/useSiteMetaDataQuery';
import HeaderContainer from '@components/HeaderContainer';
import { Global } from '@emotion/react';
import GlobalStyle from '@styles/GlobalStyle';
import NavContainer from '@components/NavContainer';
import BlogPageContainer from '@components/BlogPageContainer';
import Prism from 'prismjs';

const AppLayout = ({ children, pageName, pageDescription, pageKeywords, pageUrl, pageType, pageImage, }) => {
  useEffect(() => {
    Prism.highlightAll();
  });
  
  const { title, generator, author, url, description, keywords, siteImage, } = useSiteMetaDataQuery();
  const siteData = {};

  if (pageDescription === '') {
    siteData.description = description;
    siteData.keywords = keywords;
    siteData.image = siteImage;
  } else {
    siteData.description = pageDescription ? pageDescription : description;
    siteData.keywords = pageKeywords ? pageKeywords : keywords;
    siteData.image = pageImage ? pageImage : siteImage;
  }

  return (
    <>
      <Global styles={GlobalStyle} />
      {/* head 태그 수정 */}
      <Helmet>
        {/* 기본 메타태그 */}
        <title>{ `${pageName}` } - { title }</title>
        <meta name='description' content={siteData.description} />
        <meta name='author' content={author} />
        <meta name='generator' content={generator} />
        <meta name='keywords' content={siteData.keywords} />

        {/* 파비콘 */}
        <link rel='shortcut icon' href='/blog/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/blog/favicon.ico' type='image/x-icon' />

        {/* 폰트 어썸 */}
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.1/css/all.css' integrity='sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp'
          crossOrigin='anonymous'
        />

        {/* 오픈그래프 */}
        <meta property='og:site_name' content={title} />
        <meta property='og:type' content={pageType} />
        <meta property='og:title' content={pageName} />
        <meta property='og:description' content={siteData.description} />
        <meta property='og:image' content={siteData.image} />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:url' content={`${url}${pageUrl}`} />

        {/* 트위터 카드 */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={`@${author}`} />
        <meta name='twitter:title' content={`${pageName} - ${title}`} />
        <meta name='twitter:creator' content={`@${author}`} />
        <meta name='twitter:description' content={siteData.description} />
        <meta name='twitter:image' content={siteData.image} />

        {/* 검색등록 */}
        <meta name='google-site-verification' content='iIK1QMzAYU9YHlIbkvglYdu5GF4WsxIBaV_geNrPVMI' />
        <meta name='naver-site-verification' content='f01c4552dd70d2dbfddcc7400b30371edf57a16d' />
      </Helmet>

      {/* 헤더 */}
      <HeaderContainer />
      <NavContainer />

      {/* 메인 */}
      <BlogPageContainer>
        { children }
      </BlogPageContainer>

      {/* 푸터 */}
      <FooterContainer />
    </>
  );
};

export default AppLayout;