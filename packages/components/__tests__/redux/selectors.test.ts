import * as selectors from '../../src/redux/selectors';

describe('REDUX SELECTORS TESTS', () => {
  it('should return isFetching true boolean', () => {
    const mockParameters = { chuck: { isFetching: true } };
    expect(selectors.isFetching(mockParameters)).toBeTruthy();
  });

  it('should return isFetching false boolean', () => {
    const mockParameters = { chuck: { isFetching: false } };
    expect(selectors.isFetching(mockParameters)).toBeFalsy();
  });

  it('should return a single joke IJoke', () => {
    const mockParameters = { chuck: { isFetching: false, joke: {} } };
    expect(selectors.getJoke(mockParameters)).toEqual({});
  });

  it('should return an array of jokes IJoke', () => {
    const mockParameters = { chuck: { isFetching: false, jokes: [] } };
    expect(selectors.getJokes(mockParameters)).toEqual([]);
  });
});
