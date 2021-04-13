import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetaDataQuery = () => {
  const { site, } = useStaticQuery(graphql`
    query SITE_METADATA_QUERY {
      site {
        siteMetadata {
          author
          description
          generator
          title
          url
        }
      }
    }
  `);

  return site.siteMetadata;
};