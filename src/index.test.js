import * as exported from './';

['Button', 'Input'].forEach(namespace => {
  test(`exports ${namespace}`, () => {
    expect(exported[namespace]).toBeDefined();
  });
});
