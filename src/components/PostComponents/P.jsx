import React from 'react';
import { css } from '@emotion/react';

export const P = ({ children, top = 20, bottom = 20, }) => {
  const style = css`
    text-align: justify;
    line-height: 1.8;
    margin: ${top}px 0px ${bottom}px 0px;
    text-indent: 10px;
    letter-spacing: -1px;
    color: #333333;
    font-weight: 500;
    transition: all 0.3s;
  `;
  return (
    <>
      <p className='post-paragraph' css={style}>{children}</p>
    </>
  );
};