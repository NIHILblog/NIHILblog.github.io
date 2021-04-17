import AppLayout from '@layouts/AppLayout';
import React from 'react';

const siteData = {
  pageName: '에러 404',
  pageUrl: '/404',
  pageType: 'website',
};

const ErrorPage = () => {
  return (
    <>
      <AppLayout {...siteData}>
        <div id='blog-error-page'>
          <h2>에러 404</h2>
          <img src='/images/error-image.png' alt='' />
          <p>
            <span>페이지를 찾을 수 없습니다.</span>
          </p>
        </div>
      </AppLayout>
    </>
  );
};

export default ErrorPage;