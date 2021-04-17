import { css } from '@emotion/react';

export default css`
  /* 블로그 안내문 */
  & > #blog-message {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px -4px #333333;
    margin-bottom: 50px;
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
    }

    & > p {
      text-align: justify;
      letter-spacing: -1px;
      color: #333333;
      font-weight: 500;
      transition: all 0.3s;
      text-indent: 10px;
    }
  }
  
  /* 컨텐츠 블럭 */
  & > #blog-index-page #blog-post-list #total-posts,
  & > #blog-index-page #blog-post-list .list-item,
  & > #post-list-page #blog-post-list #total-posts,
  & > #post-list-page #blog-post-list .list-item,
  & > #blog-categories-page #items-preview,
  & > #blog-tags-page #items-preview,
  & > #blog-tag-page #tag-post-count,
  & > #blog-category-page #category-post-count,
  & > #blog-category-page #category-post-list .list-item,
  & > #blog-tag-page #tag-post-list .list-item,
  & > #blog-post-page,
  & > #post-navigation,
  & > #blog-error-page,
  & > #blog-info-page .info-block {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px -4px #333333;
    transition: all 0.3s;
  }

  /* 포스트 리스트 제목 */
  & > #blog-index-page #blog-post-list,
  & > #post-list-page #blog-post-list,
  & > #blog-tag-page #tag-post-list,
  & > #blog-category-page #category-post-list {
    & > #total-posts {
      margin-bottom: 30px;

      & > h2 {
        background-color: #333333;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 20px;
        color: #ffffff;
        font-weight: 500;
        letter-spacing: -1px;
        transition: all 0.3s;
      }

      & > p {
        letter-spacing: -1px;
        text-align: justify;
        color: #333333;
        font-weight: 500;
        transition: all 0.3s;
      }
    }
    
    /* 포스트 리스트 */
    & > .list-item {
      margin-bottom: 30px;
      padding-bottom: 7px;

      &:nth-last-of-type(1) {
        margin-bottom: 0px;
      }

      /* 포스트 리스트 포스트 이름 */
      & > .list-title {
        margin-bottom: 10px;

        & > a {
          display: block;
          font-weight: 500;
          color: #555555;
          border: 2px solid #555555;
          padding: 5px 10px;
          border-radius: 10px;
          transition: all 0.3s;
          letter-spacing: -1px;
          text-align: justify;

          &:hover {
            transition: all 0.3s;
            background-color: #333333;
            border: 2px solid #333333;
            color: #ffffff;
          }
        }
      }

      /* 포스트 리스트 데이터 */
      & > .list-content {
        & > .content-info {
          text-align: justify;
          margin-top: 5px;

          & > .info-name {
            display: inline-block;
            border-radius: 10px;
            color: #f54747;
            font-weight: 900;
            margin-right: 5px;
            margin-bottom: 3px;
            margin-top: 2px;
            transition: all 0.3s;
          }

          & > .info-time,
          & > .list-description {
            color: #333333;
            letter-spacing: -1px;
            font-weight: 500;
            transition: all 0.3s;
          }

          & > .info-tag,
          & > .info-category {
            letter-spacing: -1px;
            color: #555555;
            padding: 0px 10px;
            border-radius: 50px;
            border: 2px solid #555555;
            margin-right: 5px;
            margin-bottom: 3px;
            transition: all 0.3s;
            font-weight: 500;
            display: inline-block;

            &:hover {
              color: #ffffff;
              background-color: #333333;
              border: 2px solid #333333;
              transition: all 0.3s;
            }
          }
        }
      }
    }

    /* 포스트 목록으로 */
    & > #more-posts {
      text-align: center;
      margin-top: 50px;

      & > a {
        background-color: #333333;
        color: #ffffff;
        padding: 10px 20px;
        border-radius: 50px;
        box-shadow: 0px 0px 10px -4px #333333;
        transition: all 0.3s;

        &:hover {
          transition: all 0.3s;
          background-color: #ffffff;
          color: #333333;
        }
      }
    }
  }

  /* 페이징 */
  & > #post-list-page {
    & > .Paginator {
      text-align: center;
      margin-top: 50px;
      margin-bottom: 50px;

      & > span,
      & > .page-link {
        background-color: #ffffff;
        padding: 5px 10px;
        box-shadow: 0px 0px 10px -4px #333333;
        margin: 3px;
        border-radius: 50px;
        font-weight: 500;
      }

      & > .page-link {
        color: #333333;
        display: inline-block;
        transition: all 0.3s;

        &:hover {
          color: #ffffff;
          background-color: #333333;
          transition: all 0.3s;
        }
      }

      & > .page-link[aria-current=page] {
        color: #ffffff;
        background-color: #333333;
      }

      & > span {
        background-color: #eeeeee;
        color: #888888;
        transition: all 0.3s;
      }
    }
  }

  /* 태그, 카테고리 목록 */
  & > #blog-categories-page #items-preview,
  & > #blog-tags-page #items-preview {
    background-color: #ffffff;
    padding: 10px 7px 7px 7px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px -4px #333333;

    & > #item-list-name {
      margin-bottom: 20px;

      & > h2 {
        background-color: #333333;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 20px;
        color: #ffffff;
        font-weight: 500;
        letter-spacing: -1px;
        margin-right: 3px;
        margin-left: 3px;
        transition: all 0.3s;
      }

      & > p {
        letter-spacing: -1px;
        text-align: justify;
        color: #333333;
        font-weight: 500;
        margin-right: 3px;
        margin-left: 3px;
        transition: all 0.3s;
      }
    }

    & > #item-list {
      & > .list-item {
        width: calc(33.33% - 6px);
        display: inline-block;
        box-sizing: border-box;
        text-align: center;
        border: 2px solid #555555;
        padding: 5px 10px;
        border-radius: 50px;
        font-weight: 500;
        color: #555555;
        margin: 3px;
        transition: all 0.3s;

        &:hover {
          background-color: #333333;
          border: 2px solid #333333;
          color: #ffffff;
          transition: all 0.3s;
        }
      }
    }
  }

  /* 태그, 카테고리 개별 페이지 제목 */
  & > #blog-tag-page #tag-post-count,
  & > #blog-category-page #category-post-count {
    margin-bottom: 20px;

    & > h2 {
      background-color: #333333;
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 20px;
      color: #ffffff;
      font-weight: 500;
      letter-spacing: -1px;
      transition: all 0.3s;
    }

    & > p {
      text-align: justify;
      font-weight: 500;
      letter-spacing: -1px;
      transition: all 0.3s;
      color: #333333;
    }
  }

  /* 포스트 페이지 */
  & > #blog-post-page {
    margin-bottom: 30px;

    & > #post-metadata {
      margin-bottom: 40px;
      letter-spacing: -1px;

      & > #content-title {
        background-color: #333333;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 20px;
        color: #ffffff;
        font-weight: 500;
        letter-spacing: -1px;
        transition: all 0.3s;
      }

      & > .content-data {
        margin-top: 5px;

        & > .item-name {
          display: inline-block;
          border-radius: 10px;
          color: #f54747;
          font-weight: 900;
          margin-right: 10px;
          margin-bottom: 3px;
          margin-top: 2px;
          transition: all 0.3s;
        }

        & .list-item {
          letter-spacing: -1px;
          color: #555555;
          padding: 0px 10px;
          border-radius: 50px;
          border: 2px solid #555555;
          margin-right: 5px;
          transition: all 0.3s;
          font-weight: 500;

          &:hover {
            color: #ffffff;
            background-color: #333333;
            border: 2px solid #333333;
            transition: all 0.3s;
          }
        }
      }
    }

    & > hr {
      border: none;
      border-bottom: 3px dotted #888888;
      margin: 60px 0px;
    }
  }

  & > #post-navigation {
    & > .nav-button {
      &:nth-of-type(1) {
        margin-bottom: 5px;

        & > a {
          display: block;
          border: 2px solid #555555;
          color: #555555;
          padding: 10px;
          font-weight: 500;
          border-radius: 10px;
          text-align: left;
          transition: all 0.3s;

          &:hover {
            color: #ffffff;
            background-color: #333333;
            border: 2px solid #333333;
            transition: all 0.3s;

            & > span {
              color: #333333;
              background-color: #ffffff;
            }
          }

          & > span {
            color: #ffffff;
            background-color: #555555;
            border-radius: 10px;
            padding: 0px 10px;
            margin-right: 5px;
            transition: all 0.3s;

            &:before {
              content: '\\f359';
              font-family: 'Font Awesome 5 Free';
              font-weight: 900;
              margin-right: 5px;
            }
          }
        }

        & > .message {
          display: block;
          border: 2px solid #55555550;
          color: #55555550;
          padding: 10px;
          font-weight: 500;
          border-radius: 10px;
          text-align: left;
          transition: all 0.3s;

          & > span {
            color: #ffffffb0;
            background-color: #55555550;
            border-radius: 10px;
            padding: 0px 10px;
            margin-left: 5px;
            transition: all 0.3s;

            &:before {
              content: '\\f359';
              font-family: 'Font Awesome 5 Free';
              font-weight: 900;
              margin-right: 5px;
            }
          }
        }
      }

      &:nth-of-type(2) {
        & > a {
          display: block;
          border: 2px solid #555555;
          color: #555555;
          padding: 10px;
          font-weight: 500;
          border-radius: 10px;
          text-align: right;
          transition: all 0.3s;

          &:hover {
            color: #ffffff;
            background-color: #333333;
            border: 2px solid #333333;
            transition: all 0.3s;

            & > span {
              color: #333333;
              background-color: #ffffff;
            }
          }

          & > span {
            color: #ffffff;
            background-color: #555555;
            border-radius: 10px;
            padding: 0px 10px;
            margin-left: 5px;
            transition: all 0.3s;

            &:after {
              content: '\\f35a';
              font-family: 'Font Awesome 5 Free';
              font-weight: 900;
              margin-left: 5px;
            }
          }
        }

        & > .message {
          display: block;
          border: 2px solid #55555550;
          color: #55555550;
          padding: 10px;
          font-weight: 500;
          border-radius: 10px;
          text-align: right;
          transition: all 0.3s;

          & > span {
            color: #ffffffb0;
            background-color: #55555550;
            border-radius: 10px;
            padding: 0px 10px;
            margin-left: 5px;
            transition: all 0.3s;

            &:after {
              content: '\\f35a';
              font-family: 'Font Awesome 5 Free';
              font-weight: 900;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }

  /* 소개 페이지 */
  & > #blog-info-page .info-block {
    margin-bottom: 30px;

    & > .block-title {
      background-color: #333333;
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 20px;
      color: #ffffff;
      font-weight: 500;
      letter-spacing: -1px;
      transition: all 0.3s;
    }

    & > .block-content {
      letter-spacing: -1px;
      color: #333333;
      margin-top: 20px;
      text-align: justify;
      font-weight: 500;
      transition: all 0.3s;
      text-indent: 10px;
    }
  }

  /* 에러 페이지 */
  & > #blog-error-page {
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
        content: '\\f00d';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free';
        margin-right: 10px;
      }
    }

    & > img {
      border-radius: 100%;
      display: block;
      max-width: 50%;
      margin: 0px auto;
    }

    & > p {
      letter-spacing: -1px;
      color: #333333;
      margin-top: 20px;
      text-align: center;
      font-weight: 900;
      transition: all 0.3s;

      & > span {
        font-size: 150%;
      }
    }
  }
`;