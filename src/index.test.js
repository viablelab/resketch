import * as exported from './';

['Button'].forEach(namespace => {
  test(`exports ${namespace}`, () => {
    expect(exported[namespace]).toBeDefined();
  });
});
