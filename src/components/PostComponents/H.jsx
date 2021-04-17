import { css } from '@emotion/react';
import React from 'react';

export const H = ({ children, top = 40, bottom = 40, type = '1', }) => {
  const typePadding = {};

  switch (type) {
    case '1':
      typePadding.topDown = 10;
      typePadding.backColor = '#333333';
      typePadding.spanSize = 100;
      break;
    case '2':
      typePadding.topDown = 8;
      typePadding.backColor = '#555555';
      typePadding.spanSize = 100;
      break;
    case '3':
      typePadding.topDown = 6;
      typePadding.backColor = '#777777';
      typePadding.spanSize = 90;
      break;
    case '4':
      typePadding.topDown = 4;
      typePadding.backColor = '#999999';
      typePadding.spanSize = 80;
      break;
  }

  const style = css`
    font-weight: 500;
    color: #ffffff;
    background-color: ${typePadding.backColor};
    padding: ${typePadding.topDown}px 10px;
    border-radius: 10px;
    margin: ${top}px 0px ${bottom}px 0px;
    transition: all 0.3s;

    & > span {
      font-size: ${typePadding.spanSize}%;
    }

    &:before {
      content: '\\f27a';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
      margin-right: 5px;
    }
  `;

  return (
    <>
      <h2 className='post-heading-2' css={style}>
        <span>{children}</span>
      </h2>
    </>
  );
};