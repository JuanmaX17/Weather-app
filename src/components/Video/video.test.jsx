import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../redux/configureStore';
import { Video } from './index.video';

describe('The component Video run', () => {
  test('show video in the screen', () => {
    render(<Provider store={store}><Video /></Provider>);
    const textComponent = screen.getByText(/video/i);
    expect(textComponent).toBeInTheDocument();
  });
});
