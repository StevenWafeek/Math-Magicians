import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './Calculator';
import '@testing-library/jest-dom/extend-expect';

test('Calculator snapshot', () => {
  const calculator = render(
    <Calculator />,
  );
  const tree = calculator.container;
  expect(tree).toMatchSnapshot();
  expect(calculator.container).toHaveTextContent('AC');
});
