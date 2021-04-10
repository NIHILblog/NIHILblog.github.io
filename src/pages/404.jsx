import AppLayout from '@components/AppLayout';
import React from 'react';


const ErrorPage = () => {
  return (
    <>
      <AppLayout pageName={'에러 404'}>
        <h2>에러</h2>
        <p>페이지를 찾을 수 없습니다.</p>
      </AppLayout>
    </>
  );
};

export default ErrorPage;