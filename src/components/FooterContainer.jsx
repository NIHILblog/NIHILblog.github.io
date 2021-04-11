import React from 'react';
import siteData from '@data/siteData';

const FooterContainer = () => {
  return (
    <>
      <footer>
        <ul>
          <li id='link-email'>
            <a href='mailto:nihil_ncunia@naver.com' target='_blank' rel='noreferrer noopener'>이메일</a>
          </li>
          <li id='link-instagram'>
            <a href='https://www.instagram.com/nihil_illust/' target='_blank' rel='noreferrer noopener'>인스타그램</a>
          </li>
        </ul>
        <small>{ siteData.year }. NIHILncunia.</small>
      </footer>
    </>
  );
};

export default FooterContainer;