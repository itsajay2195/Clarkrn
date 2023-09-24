import React from 'react';
import {render} from '@testing-library/react-native';
import Line from '../components/Line';
import '@testing-library/jest-native/extend-expect';

describe('Line Component', () => {
  it('renders with default lineHeight', () => {
    const {getByTestId} = render(<Line />);
    const line = getByTestId('line');

    expect(line).toBeTruthy();
    expect(line).toHaveStyle({
      height: 1,
      marginVertical: 10,
      backgroundColor: '#808080',
    });
  });

  it('renders with custom lineHeight', () => {
    const {getByTestId} = render(<Line lineHeight={3} />);
    const line = getByTestId('line');

    expect(line).toBeTruthy();
    expect(line).toHaveStyle({
      height: 3,
      marginVertical: 10,
      backgroundColor: '#808080',
    });
  });
});
