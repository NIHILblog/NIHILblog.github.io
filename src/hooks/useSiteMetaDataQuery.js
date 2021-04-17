import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetaDataQuery = () => {
  const { site, } = useStaticQuery(graphql`
    query SITE_METADATA_QUERY {
      site {
        siteMetadata {
          author
          generator
          description
          title
          url
          keywords
          siteImage
        }
      }
    }
  `);

  return site.siteMetadata;
};