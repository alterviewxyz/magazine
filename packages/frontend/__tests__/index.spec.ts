import { add, greet } from '../src';

describe('@alterview/frontend module', () => {
  it('should add', () => {
    expect(add(2, 3)).toEqual(5);
  });
  it('should greet', () => {
    expect(greet('world')).toEqual('@alterview/frontend says: hello to world');
  });
});
