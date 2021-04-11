import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import NavContainer from '@components/NavContainer';
import FooterContainer from '@components/FooterContainer';
import { useSiteMetaDataQuery } from '@hooks/useQuery';
import HeaderContainer from '@components/HeaderContainer';

const AppLayout = ({ children, pageName, pageDescription, pageKeywords, }) => {
  const { title, generator, author, } = useSiteMetaDataQuery();

  return (
    <>
      {/* head 태그 수정 */}
      <Helmet>
        <title>{ `${pageName}` } - { title }</title>
        <meta name='description' content={pageDescription} />
        <meta name='author' content={author} />
        <meta name='generator' content={generator} />
        <meta name='keywords' content={pageKeywords} />
      </Helmet>

      {/* 헤더 */}
      <HeaderContainer />
      <NavContainer />

      {/* 메인 */}
      <main>
        { children }
      </main>

      {/* 푸터 */}
      <FooterContainer />
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string.isRequired,
  pageDescription: PropTypes.string.isRequired,
  pageKeywords: PropTypes.string.isRequired,
};

export default AppLayout;