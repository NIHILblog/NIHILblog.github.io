import React from 'react';
import { MDXProvider } from '@mdx-js/react';
require('prismjs/themes/prism-tomorrow.css');
require('prismjs/plugins/line-numbers/prism-line-numbers.css');
import {
  H1, H2, H3, H4, P, Image, A, Strike, Strong, Q,
  Code, Message, Em, Ol, Ul, Pre
} from '@components/PostComponents';

const components = {
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  inlineCode: props => <Code {...props} />,
  p: props => <P {...props} />,
  img: props => <Image {...props} />,
  a: props => <A {...props} />,
  del: props => <Strike {...props} />,
  strong: props => <Strong {...props} />,
  em: props => <Em {...props} />,
  ol: props => <Ol {...props} />,
  ul: props => <Ul {...props} />,
  pre: props => <Pre {...props} />,
  A,
  Q,
  Message,
};

export const wrapRootElement = ({ element, }) => {
  return (
    <>
      <MDXProvider components={{ ...components, }}>
        {element}
      </MDXProvider>
    </>
  );
};