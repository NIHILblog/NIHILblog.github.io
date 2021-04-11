import AppLayout from '@layouts/AppLayout';
import React from 'react';

const siteData = {
  pageName: '에러 404',
  pageDescription: '에러 페이지입니다.',
};

const ErrorPage = () => {
  return (
    <>
      <AppLayout {...siteData}>
        <h2>에러</h2>
        <p>페이지를 찾을 수 없습니다.</p>
      </AppLayout>
    </>
  );
};

export default ErrorPage;