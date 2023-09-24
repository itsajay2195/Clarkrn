import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import PrimaryButton from '../components/PrimaryButton';
import '@testing-library/jest-native/extend-expect';

describe('PrimaryButton Component', () => {
  it('renders correctly with default props', () => {
    const onPressMock = jest.fn();
    const {getByText, getByTestId} = render(
      <PrimaryButton onPress={onPressMock} />,
    );
    const button = getByTestId('primary-button');

    expect(button).toBeTruthy();
    expect(button.props.style.backgroundColor).toBe('#000000');
    expect(button.props.style.opacity).toBe(1);

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('renders correctly with custom props', () => {
    const onPressMock = jest.fn();
    const {getByText, getByTestId} = render(
      <PrimaryButton
        onPress={onPressMock}
        title="Custom Button"
        containerStyle={{backgroundColor: 'red'}}
        textStyle={{color: 'blue'}}
        disabled={true}
      />,
    );
    const button = getByTestId('primary-button');

    expect(button).toBeTruthy();
    expect(button.props.style.backgroundColor).toBe('red');
    expect(button.props.style.opacity).toBe(0.5);

    fireEvent.press(button);
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
