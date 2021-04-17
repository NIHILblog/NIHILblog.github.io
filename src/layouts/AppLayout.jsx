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

  console.log(siteData.image);

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