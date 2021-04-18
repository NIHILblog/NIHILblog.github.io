import React from 'react';
import { A } from '@components/PostComponents';
import { css, Global } from '@emotion/react';
import size from '@data/size';

const BlogMessage = ({ top = 0, bottom = 30, }) => {
  const style = css`
    margin: ${top}px 0px ${bottom}px 0px;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px -4px #333333;
    transition: all 0.3s;

    & > h2 {
      background-color: #333333;
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 20px;
      color: #ffffff;
      font-weight: 500;
      letter-spacing: -1px;
      transition: all 0.3s;

      &:before {
        content: '\\f086';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free';
        margin-right: 10px;
      }
    }

    & > p {
      letter-spacing: -1px;
      text-align: justify;
      color: #333333;
      font-weight: 500;
      transition: all 0.3s;
      text-indent: 10px;
      line-height: 1.8;
    }
  `;

  const fontSize = css`
    @media (min-width: 1px) and (max-width: 600px) {
      #blog-message h2 {font-size: ${size[4]};}
      #blog-message p {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      #blog-message h2 {font-size: ${size[5]};}
      #blog-message p {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      #blog-message h2 {font-size: ${size[6]};}
      #blog-message p {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <Global styles={fontSize} />
      <section id='blog-message' css={style}>
        <h2>니힐 블로그에 오신 것을 환영합니다!</h2>
        <p>
          니힐 블로그는 프로그래밍, 일본어, 게임 관련된 컨텐츠를 다루는 블로그입니다. 이 블로그에 대한 자세한 소개는 <A href='/about/' type='blog'>블로그 소개</A>페이지에서 하고 있습니다.
        </p>
      </section>
    </>
  );
};

export default BlogMessage;