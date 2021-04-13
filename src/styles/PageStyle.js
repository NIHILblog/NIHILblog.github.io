import { css } from '@emotion/react';

export const indexPageStyle = css`
    & > #blog-message,
    & > #blog-post-list #total-posts,
    & > #blog-post-list .list-item {
      background-color: #ffffff;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px -4px #333333;
    }

    & > #blog-post-list #total-posts {
      margin-bottom: 20px;
    }

    & > #blog-message h2,
    & > #blog-post-list #total-posts h2 {
      background-color: #333333;
      padding: 5px 10px;
      border-radius: 10px;
      margin-bottom: 20px;
      color: #ffffff;
      font-weight: 500;
    }

    & > #blog-post-list {
      margin-top: 40px;

      & > .list-item {
        margin-bottom: 20px;
        padding-bottom: 7px;

        &:nth-last-of-type(1) {
          margin-bottom: 0px;
        }

        & > .list-title {
          margin-bottom: 10px;

          & > a {
            display: block;
            font-weight: 500;
            background-color: #f54747;
            color: #ffffff;
            border: 2px solid #f54747;
            padding: 5px 10px;
            border-radius: 10px;
            transition: all 0.3s;

            &:hover {
              transition: all 0.3s;
              background-color: #ffffff;
              font-weight: 900;
              color: #f54747;
            }
          }
        }

        & > .list-content {
          & > .content-info {
            line-height: 1.5;

            & > .info-name {
              display: inline-block;
              padding: 0px 5px;
              border-radius: 10px;
              border: 1px solid #f54747;
              color: #f54747;
              font-weight: 500;
              margin-right: 5px;
              margin-bottom: 3px;
            }

            & > .info-time,
            & > .list-description {
              color: #333333;
            }

            & > .info-time {
              font-weight: 900;
            }

            & > .info-category {
              font-weight: 900;
              margin-right: 10px;
              color: #333333;
            }
          }
        }
      }

      & > #more-posts {
        text-align: center;
        margin-top: 40px;

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
  `;

export const PostPageStyle = css``;

export const TagsCategoriesPageStyle = css``;

export const PostListPageStyle = css``;