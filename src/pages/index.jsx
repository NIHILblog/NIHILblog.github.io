import React from 'react';
import { css } from '@emotion/react';
import AppLayout from '@components/AppLayout';
// import PropTypes from 'prop-types';

const App = () => {
  const style = css`
    background-color: #333333;
    color: #ffffff;
    padding: 5px 10px;
    text-align: center;
    border-radius: 10px;
  `;

  return (
    <>
      <AppLayout pageName={'홈'}>
        <div css={style}>Hello World!!</div>
      </AppLayout>
    </>
  );
};

// name.propTypes = {
//
// };

// node: PropTypes.node.isRequired,
// string: PropTypes.string.isRequired,
// number: PropTypes.number.isRequired,
// func: PropTypes.func.isRequired,
// object: PropTypes.object.isRequired,
// array: PropTypes.array.isRequired,
// bool: PropTypes.bool.isRequired,
// symbol: PropTypes.symbol.isRequired,
// elementType: PropTypes.elementType.isRequired,

// shape: PropTypes.shape({
//   item: PropTypes.string.isRequired,
// });

export default App;