import React from 'react';
import { useSiteMetaDataQuery } from '@hooks/useQuery';

const HeaderContainer = () => {
  const { title, description, } = useSiteMetaDataQuery();
  return (
    <>
      <header>
        <p id='blog-name'>{title}</p>
        <p>{description}</p>
      </header>
    </>
  );
};

export default HeaderContainer;