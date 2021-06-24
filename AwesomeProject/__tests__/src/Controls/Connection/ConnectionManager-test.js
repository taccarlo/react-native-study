// __tests__/ConnectionManager-test.js
// run a single test: npm test -t ConnectionManager-test

import ConnectionManager from '../../../../src/Controls/Connection/ConnectionManager';

test('sum test', () => {
  let sumRes = ConnectionManager.sum(1, 2);
  expect(sumRes).toBe(3);
  console.log('La somma è uguale a ' + sumRes);
});
