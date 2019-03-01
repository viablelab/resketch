import * as exported from './';

test('exports', () => {
  expect(exported).toMatchSnapshot();
});
