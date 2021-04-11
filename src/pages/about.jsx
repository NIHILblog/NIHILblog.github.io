import React from 'react';
import { useSiteMetaDataQuery } from '@hooks/useQuery';
import AppLayout from '@layouts/AppLayout';

const siteData = {
  pageName: '블로그 정보',
  pageDescription: '블로그에 대한 정보를 제공하는 페이지입니다.',
  pageKeywords: '블로그, 정보',
};

const AboutPage = () => {
  const { title, } = useSiteMetaDataQuery();

  return (
    <>
      <AppLayout {...siteData}>
        <h1>{title}에 대해</h1>
        <p>이 곳은 그냥 연습용으로 만든 블로그입니다!</p>
      </AppLayout>
    </>
  );
};

export default AboutPage;