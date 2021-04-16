import React, { useState, useCallback } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { copyToClipboard } from '@utils/copy-to-clipboard';

export const H1 = ({ children, top = 40, bottom = 40, }) => {
  const style = css`
    font-weight: 500;
    color: #ffffff;
    background: #333333;
    padding: 10px;
    border-radius: 10px;
    margin: ${top}px 0px ${bottom}px 0px;
    transition: all 0.3s;

    &:before {
      content: '\\f27a';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
      margin-right: 5px;
    }
  `;

  return (
    <>
      <h2 className='post-heading-2' css={style}>{children}</h2>
    </>
  );
};

export const H2 = ({ children, top = 40, bottom = 40, }) => {
  const style = css`
    margin: ${top}px 0px ${bottom}px 0px;
    font-weight: 500;
    color: #ffffff;
    background: #555555;
    padding: 8px 10px;
    border-radius: 10px;
    transition: all 0.3s;

    &:before {
      content: '\\f27a';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
      margin-right: 5px;
    }
  `;

  return (
    <>
      <h3 className='post-heading-3' css={style}>{children}</h3>
    </>
  );
};

export const H3 = ({ children, top = 40, bottom = 40, }) => {
  const style = css`
    margin: ${top}px 0px ${bottom}px 0px;
    font-weight: 500;
    color: #ffffff;
    background: #777777;
    padding: 6px 10px;
    border-radius: 10px;
    transition: all 0.3s;

    & > span {
      font-size: 90%;
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
      <h4 className='post-heading-4' css={style}>
        <span>{children}</span>
      </h4>
    </>
  );
};

export const H4 = ({ children, top = 40, bottom = 40, }) => {
  const style = css`
    margin: ${top}px 0px ${bottom}px 0px;
    font-weight: 500;
    color: #ffffff;
    padding: 4px 10px;
    background-color: #999999;
    border-radius: 10px;
    transition: all 0.3s;

    & > span {
      font-size: 80%;
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
      <h5 className='post-heading-5' css={style}>
        <span>{children}</span>
      </h5>
    </>
  );
};

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

export const Code = ({ children, }) => {
  const style = css`
    padding: 0px 5px;
    border-radius: 5px;
    font-weight: 600;
    text-indent: 0px;
    border: 2px solid #888888;
    color: #ffffff;
    font-size: 90%;
    background-color: #333333;
    margin: 0px 2px;
    transition: all 0.3s;

    &:before {
      content: '\\f121';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
      margin-right: 5px;
      color: #888888;
    }
  `;

  return (
    <>
      <code css={style}>{children}</code>
    </>
  );
};

export const Image = ({ src, alt, top = 20, bottom = 20, }) => {
  const style = css`
    width: 100%;
    box-sizing: border-box;
    margin: ${top}px 0px ${bottom}px 0px;
    background-color: #333333;
    padding: 10px;
    border-radius: 10px;

    & > img {
      width: inherit;
      border-radius: 10px;
      display: block;
    }

    & > figcaption {
      margin-top: 5px;
      text-align: center;
      font-size: small;
      font-style: italic;
      color: #ffffff;
    }
  `;

  return (
    <>
      <figure css={style}>
        <img src={src} alt={alt} />
        <figcaption><i className='fas fa-image' />{alt}</figcaption>
      </figure>
    </>
  );
};

export const A = ({ children, href, type = 'blog', }) => {
  const typeColor = {};
  const typeProps = {};
  const icon = {};

  if (type === 'blog') {
    typeColor.color = '#218cd8';
    typeProps.href = href;
    icon.code = 'f0c1';
    icon.type = 'Free';
  } else if (type === 'normal') {
    typeColor.color = '#11b32c';
    typeProps.href = href;
    typeProps.rel = 'noreferrer noopener';
    icon.code = 'f360';
    icon.type = 'Free';
  } else {
    typeColor.color = '#c30505';
    typeProps.href = href;
    typeProps.rel = 'noreferrer noopener';
    icon.code = 'f167';
    icon.type = 'Brands';
  }

  const style = css`
    border: 2px solid ${typeColor.color};
    color: ${typeColor.color};
    padding: 0px 5px;
    border-radius: 5px;
    font-size: 90%;
    transition: all 0.3s;
    margin: 0px 2px;

    &:after {
      content: '\\${icon.code}';
      font-family: 'Font Awesome 5 ${icon.type}';
      font-weight: 900;
      margin-left: 5px;
    }

    &:hover {
      color: #ffffff;
      background-color: ${typeColor.color};
      transition: all 0.3s;
    }
  `;

  return (
    <>
      <a css={style} {...typeProps}>{children}</a>
    </>
  );
};

export const Strike = ({ children, }) => {
  const style = css`
    color: #999999;
    transition: all 0.3s;
  `;

  return (
    <>
      <s css={style}>{children}</s>
    </>
  );
};

export const Strong = ({ children, }) => {
  const style = css`
    font-weight: 900;
    color: #ff5b5b;
    transition: all 0.3s;
  `;

  return (
    <>
      <strong css={style}>{children}</strong>
    </>
  );
};

export const Q = ({ children, }) => {
  const style = css`
    padding: 0px 5px;
    background: #eeeeee;
    border: 2px solid #33333350;
    border-radius: 5px;
    color: #333333;
    font-size: 90%;
    margin: 0px 2px;
    transition: all 0.3s;

    & > .fa-quote-left,
    & > .fa-quote-right {
      text-indent: 0px;
    }

    &:before {
      content: '\\f10d';
      margin-right: 5px;
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
    }

    &:after {
      content: '\\f10e';
      margin-left: 5px;
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
    }
  `;

  return (
    <>
      <q css={style}>{children}</q>
    </>
  );
};

export const Message = ({ children, color, top = 20, bottom = 20, }) => {
  const colorType = {};

  if (color === 'red') {
    colorType.color = [ '#ff5b5b50', '#ff5b5b', '#ff5b5b50', ];
    colorType.icon = 'f057';
    colorType.word = '위험';
  } else if (color === 'blue') {
    colorType.color = [ '#3daeff50', '#0084e2', '#0084e250', ];
    colorType.icon = 'f059';
    colorType.word = '안내';
  } else if (color === 'yellow') {
    colorType.color = [ '#fff70c50', '#a39000', '#a3900050', ];
    colorType.icon = 'f06a';
    colorType.word = '주의';
  } else if (color === 'green') {
    colorType.color = [ '#11b32c50', '#05881b', '#05881b50', ];
    colorType.icon = 'f05a';
    colorType.word = '정보';
  }

  const style = css`
    padding: 10px;
    border-radius: 10px;
    margin: ${top}px 0px ${bottom}px 0px;
    font-size: 90%;
    background: ${colorType.color[0]};
    color: ${colorType.color[1]};
    border: 2px solid ${colorType.color[2]};

    & > p:nth-of-type(1) {
      font-size: 130%;
      font-weight: 900;
      text-align: left;
      margin-bottom: 10px;
      transition: all 0.3s;
      letter-spacing: -1px;

      &:before {
        content: '\\${colorType.icon}';
        font-weight: 900;
        margin-right: 5px;
        font-family: 'Font Awesome 5 Free';
      }
    }

    & > p:nth-of-type(2) {
      font-weight: 500;
      text-align: justify;
      transition: all 0.3s;
      letter-spacing: -1px;
      text-indent: 10px;

      & > a {
        color: ${colorType.color[1]};
        border: 2px solid ${colorType.color[1]};
        
        &:hover {
          color: #ffffff;
          background-color: ${colorType.color[1]};
        }
      }
    }
  `;

  return (
    <>
      <div className={`Message-${color}`} css={style}>
        <p>{colorType.word}</p>
        <p>{children}</p>
      </div>
    </>
  );
};

export const Em = ({ children, }) => {
  const style = css`
    margin-right: 4px;
    transition: all 0.3s;
  `;
  return (
    <>
      <em css={style}>{children}</em>
    </>
  );
};

export const Ul = ({ children, top = 20, bottom = 20, }) => {
  const style = css`
    margin: ${top}px 0px ${bottom}px 0px;
    padding: 7px 10px 7px 10px;
    border: 2px solid #33333330;
    background-color: #33333310;
    border-radius: 10px;
    color: #333333;
    letter-spacing: -1px;
    font-weight: 500;
    transition: all 0.3s;

    & > li {
      margin: 3px 0px;
      transition: all 0.3s;

      &:before {
        content: '\\f35a';
        font-family: 'Font Awesome 5 Free';
        margin-right: 5px;
        font-weight: 900;
      }

      & > ol {
        padding: 0px;
        border: none;
        border-radius: none;
        background-color: transparent;

        & > li {
          &:before {
            background: #555555;
            color: #ffffff;
            font-weight: 900;
            padding: 0px 5px;
            border-radius: 5px;
            font-size: 90%;
          }
        }
      }

      & > ul {
        padding: 0px;
        border: none;
        border-radius: none;
        background-color: transparent;

        & > li {
          &:before {
            content: '\\f35a';
            font-family: 'Font Awesome 5 Free';
            margin-right: 5px;
            font-weight: 500;
          }

          & > ol {
            & > li {
              &:before {
                background: #777777;
                color: #ffffff;
                font-weight: 900;
                padding: 0px 5px;
                border-radius: 5px;
                font-size: 90%;
              }
            }
          }

          & > ul {
            padding: 0px;
            border: none;
            border-radius: none;
            background-color: transparent;

            & > li {
              &:before {
                content: '\\f105';
                font-family: 'Font Awesome 5 Free';
                margin-right: 5px;
                font-weight: 900;
              }
            }
          }
        }
      }
    }

    & ul,
    & ol {
      margin: 0px 0px 0px 25px;
    }
  `;

  return (
    <>
      <ul className='post-unordered-list' css={style}>{children}</ul>
    </>
  );
};

export const Ol = ({ children, top = 20, bottom = 20, }) => {
  const style = css`
    margin: ${top}px 0px ${bottom}px 0px;
    transition: all 0.3s;
    padding: 7px 10px 7px 10px;
    list-style-type: none;
    counter-reset: number;
    border: 2px solid #33333330;
    background-color: #33333310;
    border-radius: 10px;
    font-weight: 500;
    color: #333333;

    & > li {
      margin: 3px 0px;
      transition: all 0.3s;

      &:before {
        background: #333333;
        color: #ffffff;
        font-weight: 900;
        padding: 0px 5px;
        border-radius: 5px;
        font-size: 90%;
      }

      & > ul {
        border: none;
        background-color: transparent;
        border-radius: none;
        padding: 0px;

        & > li {
          &:before {
            content: '\\f35a';
            font-family: 'Font Awesome 5 Free';
            margin-right: 5px;
            font-weight: 500;
          }
        }
      }

      & > ol {
        border: none;
        background-color: transparent;
        border-radius: none;
        padding: 0px;
        
        & > li {
          &:before {
            background: #555555;
            color: #ffffff;
            font-weight: 900;
            padding: 0px 5px;
            border-radius: 5px;
            font-size: 90%;
          }

          & > ul {
            & > li {
              &:before {
                content: '\\f105';
                font-family: 'Font Awesome 5 Free';
                margin-right: 5px;
                font-weight: 900;
              }
            }
          }

          & > ol {
            border: none;
            background-color: transparent;
            border-radius: none;
            padding: 0px;
            
            & > li {
              &:before {
                background: #777777;
                color: #ffffff;
                font-weight: 900;
                padding: 0px 5px;
                border-radius: 5px;
                font-size: 90%;
              }
            }
          }
        }
      }
    }

    & ol {
      list-style-type: none;
      counter-reset: number;
    }

    & ul,
    & ol {
      margin: 0px 0px 0px 25px;
    }

    & li {
      counter-increment: number;
      letter-spacing: -1px;

      &:before {
        content: counter(number) '.';
        margin-right: 5px;
      }
    }
  `;

  return (
    <>
      <ol className='post-ordered-list' css={style}>{children}</ol>
    </>
  );
};

export const Pre = ({ children, top = 20, bottom = 20, }) => {
  const [ word, setWord, ] = useState('복사');

  const codeLang = children.props.className;
  const codeContent = children.props.children;
  const matches = codeLang.match(/language-(?<lang>.*)/);
  const lang = (
    matches && matches.groups && matches.groups.lang
      ? matches.groups.lang
      : ''
  );
  const code = children.props.children.trim();
  const capitalizeLang = lang.toUpperCase();

  const onClickCopy = useCallback(() => {
    copyToClipboard(code);
    setWord('복사 완료');
  }, []);

  const onMouseLeaveCopy = useCallback(() => {
    setWord('복사');
  }, []);

  let color = [];

  switch (capitalizeLang) {
    case 'TEXT':
      color = [ '#888888', '#ffffff', ];
      break;
    case 'HTML':
      color = [ '#f47933', '#ffffff', ];
      break;
    case 'CSS':
      color = [ '#007bc9', '#ffffff', ];
      break;
    case 'JS':
    case 'JAVASCRIPT':
      color = [ '#f7df1e', '#333333', ];
      break;
    case 'JSX':
      color = [ '#61dafb', '#ffffff', ];
      break;
    default:
      color = [ '#888888', '#ffffff', ];
      break;
  }

  const style = css`
    position: relative;
    margin: ${top}px 0px ${bottom}px 0px;

    &:before {
      content: '\\f121  ${capitalizeLang}';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
      padding: 5px 10px;
      background-color: ${color[0]};
      color: ${color[1]};
      text-align: center;
      border-radius: 10px 0px 10px 0px;
      box-sizing: border-box;
      position: absolute;
    }

    & > pre[class*="language-"] {
      background-color: #333333;
      border: 5px solid ${color[0]};
      box-sizing: border-box;
      border-radius: 10px;
      padding: 40px 10px 10px 10px;

      font-family: 'CascadiaCode', 'Noto Sans CJK KR', sans-serif;
      font-weight: 400;

      & > code {
        font-family: 'CascadiaCode', 'Noto Sans CJK KR', sans-serif;
        font-weight: 400;

        & span {
          font-family: 'CascadiaCode', 'Noto Sans CJK KR', sans-serif;
          font-weight: 400;
        }
      }
    }
  `;

  return (
    <>
      <div className='gatsby-highlight' data-language={lang} css={style}>
        <CopyCode onClick={onClickCopy} onMouseLeave={onMouseLeaveCopy}>{word}</CopyCode>
        <pre className={codeLang}>
          <code className={codeLang}>{codeContent}</code>
        </pre>
      </div>
    </>
  );
};

export const CopyCode = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  color: #ffffff;
  font-weight: 500;
  border: 2px solid #ffffff;
  transition: all, 0.3s;
  background-color: transparent;

  &:before {
    content: '\\f24d';
    margin-right: 5px;
    font-weight: 900;
    font-family: 'Font Awesome 5 Free';
  }

  &:hover {
    background-color: #ffffff;
    color: #333333;
    transition: all, 0.3s;
  }
`;