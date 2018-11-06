import * as exported from './';

['Button', 'Input', 'Select'].forEach(namespace => {
  test(`exports ${namespace}`, () => {
    expect(exported[namespace]).toBeDefined();
  });
});
