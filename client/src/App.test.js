import {render, screen, shallow, act} from '@testing-library/react';
import App from './App';

describe('<App />', () => {
    it('renders without errors', () => {
        render(<App />)
    });

  it('fetches products', async () => {
      let fakeItems = [
           {
               id: "1",
               name: "IPA",
               minimumTemperature: 4,
               maximumTemperature: 6,
               temperature: 2
           }
      ]

    const mockSuccessResponse = fakeItems;
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const wrapper = render(<App />);

    expect(global.fetch).toHaveBeenCalledTimes(6);
    await act(() => mockJsonPromise)
  });
});
