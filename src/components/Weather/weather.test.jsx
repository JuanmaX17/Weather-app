import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { act } from 'react-test-renderer';
import axios from 'axios';
import store from '../../redux/configureStore';
import { Video } from './index.weather';
import json from './wheather.json';

describe('The component Whater run', () => {
  test('the first temp should be in the screen', async () => {
    jest.spyOn(axios, 'get').mockImplementation(() => (Promise.resolve({
      data: json,
    })));

    const component = await act(() => (
      render(<Provider store={store}><Video /></Provider>)
    ));

    const temp = component.getByText(/temperature/i);
    const place = component.getByText(/Medellin/i);
    expect(component.container).toBeInTheDocument();
    expect(temp).toBeInTheDocument();
    expect(place).toBeInTheDocument();
  });
});
