import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  H, P, Image, A, Strike, Strong, Q, Code, Message, Em,
  Ol, Ul, Pre, Score, Gray, Quote, Bold, Details, Youtube, Spoiler,
  Dl, Kbd, Char, NoteTop, NoteBottom
} from '@components/PostComponents';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-highlight/prism-line-highlight.css';

const components = {
  h1: props => <H type='1' {...props} />,
  h2: props => <H type='2' {...props} />,
  h3: props => <H type='3' {...props} />,
  h4: props => <H type='4' {...props} />,
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
  Score,
  Gray,
  Quote,
  Bold,
  Details,
  Youtube,
  Spoiler,
  Dl,
  Kbd,
  Char,
  NoteTop,
  NoteBottom,
};

export const wrapRootElement = ({ element, }) => { return (
    <>
      <MDXProvider components={{ ...components, }}>
        {element}
      </MDXProvider>
    </>
  );
};