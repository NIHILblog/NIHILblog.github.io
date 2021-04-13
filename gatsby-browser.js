import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { PostH1, PostInlineCode, PostP, PostImage } from '@components/PostComponents';
import PrismPre from '@components/PrismPre';


const components = {
  h1: props => <PostH1 {...props} />,
  'p.inlineCode': props => <PostInlineCode {...props} />,
  pre: props => <PrismPre {...props} />,
  p: props => <PostP {...props} />,
  img: props => <PostImage {...props} />,
};

export const wrapRootElement = ({ element, }) => {
  return (
    <>
      <MDXProvider components={components}>
        {element}
      </MDXProvider>
    </>
  );
};