import { expect } from '@bundled-es-modules/chai';
import { add } from '../src/utils';

describe('add()', () => {
  it('works', () => {
    expect(add(2, 3)).to.equal(5);
  });
});
