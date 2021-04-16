import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const PreContainer = styled.pre`
  text-align: left;
  margin-bottom: 20px;
  padding: 30px 5px 5px 5px;
  overflow: scroll;
  border-radius: 10px;
  position: relative;
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNumber = styled.span`
  color: #eeeeee80;
  margin-right: 10px;
  padding: 2px 15px 2px 0px;
  text-align: right;
  user-select: none;
  display: table-cell;
`;

export const LineContent = styled.span`
  display: table-cell;
`;

export const LanguageLabel = ({ codeLang, children, }) => {
  let color = [];

  if (codeLang === 'TEXT') {
    color = [ '#888888', '#ffffff', ];
  } else if (codeLang === 'HTML') {
    color = [ '#f47933', '#ffffff', ];
  } else if (codeLang === 'CSS') {
    color = [ '#007bc9', '#ffffff', ];
  } else if (codeLang === 'JS') {
    color = [ '#f7df1e', '#333333', ];
  } else if (codeLang === 'JSX') {
    color = [ '#61dafb', '#ffffff', ];
  } else {
    color = [ '#888888', '#ffffff', ];
  }

  const style = css`
    margin-top: 20px;
    padding: 5px 10px;
    background-color: ${color[0]};
    color: ${color[1]};
    text-align: center;
    border-radius: 0px 0px 10px 10px;
    width: 80px;
    box-sizing: border-box;
    font-size: small;
    position: relative;
    left: 15px;
    top: 29px;
    z-index: 9;
  `;

  return (
    <>
      <div css={style}>{children}</div>
    </>
  );
};

export const CopyCode = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #ffffff40;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  color: #ffffff90;
  transition: all, 0.3s;

  &:hover {
    background-color: #ffffff70;
    color: #ffffff;
    transition: all, 0.3s;
  }
`;