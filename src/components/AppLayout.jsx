import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import NavBar from '@components/NavBar';

const AppLayout = ({ children, pageName, }) => {
  return (
    <>
      {/* head 태그 수정 */}
      <Helmet>
        <title>{ `${pageName}` } - 프로젝트 이름</title>
      </Helmet>

      {/* 헤더 */}
      <header>
        <h1>여기 제목</h1>
        <NavBar />
      </header>

      {/* 메인 */}
      <main>
        { children }
      </main>

      {/* 푸터 */}
      <footer>
        여기 푸터
      </footer>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.object.isRequired,
  pageName: PropTypes.string.isRequired,
};

export default AppLayout;