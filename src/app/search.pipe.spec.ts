import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  let pipe: SearchPipe;

  beforeEach(() => {
    pipe = new SearchPipe();
  });

  it('should filter items by search text', () => {
    const items = [
      { name: 'Name1' },
      { name: 'Name2' },
      { name: 'Name3' }
    ];

    const searchText = 'name1';

    const expectedResult = [
      { name: 'Name1' }
    ];

    const result = pipe.transform(items, searchText);

    expect(result).toEqual(expectedResult);
  });

  it('should return all items if search text is empty', () => {
    const items = [
      { name: 'Name1' },
      { name: 'Name2' },
      { name: 'Name3' }
    ];

    const searchText = '';

    const expectedResult = items;

    const result = pipe.transform(items, searchText);

    expect(result).toEqual(expectedResult);
  });

});