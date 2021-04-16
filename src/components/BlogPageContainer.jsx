import React from 'react';
import pageStyle from '@styles/PageStyle';
import { A } from '@components/PostComponents';

const BlogPageContainer = ({ children, }) => {
  return (
    <>
      <main id='blog-content' css={pageStyle}>
        <section id='blog-message'>
          <h2><i className='fas fa-comments' /> 니힐 블로그에 오신 것을 환영합니다!</h2>
          <p>
            니힐 블로그는 프로그래밍, 일본어, 게임 관련된 컨텐츠를 다루는 블로그입니다. 이 블로그에 대한 자세한 소개는 <A href='/about/' type='blog'>블로그 소개</A>페이지에서 하고 있습니다.
          </p>
        </section>
        { children }
      </main>
    </>
  );
};

export default BlogPageContainer;