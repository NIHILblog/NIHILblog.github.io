import React, { useCallback, useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Theme from 'prism-react-renderer/themes/vsDark';
import { LineNumber, PreContainer, Line, LineContent, LanguageLabel, CopyCode } from '@components/PrismCustom';
import { copyToClipboard } from '@utils/copy-to-clipboard';

const PrismPre = (props) => {
  const [ word, setWord, ] = useState('복사');

  const className = props.children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  const lang = (
    matches && matches.groups && matches.groups.lang
      ? matches.groups.lang
      : ''
  );
  const code = props.children.props.children.trim();
  const capitalizeLang = lang.toUpperCase();

  const onClickCopy = useCallback(() => {
    copyToClipboard(code);
    setWord('복사 완료');
  }, []);

  const onMouseLeaveCopy = useCallback(() => {
    setWord('복사');
  }, []);

  return (
    <>
      <Highlight {...defaultProps} code={code} language={lang} theme={Theme}>
        {({ className, style, tokens, getLineProps, getTokenProps, }) => (
          <>
            <div className='code-highlight-block'>
              <LanguageLabel>{capitalizeLang}</LanguageLabel>
              <PreContainer className={className} style={style}>
                <CopyCode onClick={onClickCopy} onMouseLeave={onMouseLeaveCopy}>{word}</CopyCode>
                {tokens.map((line, i) => (
                  <Line key={i} {...getLineProps({ line, key: i, })}>
                    <LineNumber>{i + 1}</LineNumber>
                    <LineContent>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key, })} />
                      ))}
                    </LineContent>
                  </Line>
                ))}
              </PreContainer>
            </div>
          </>
        )}
      </Highlight>
    </>
  );
};

export default PrismPre;