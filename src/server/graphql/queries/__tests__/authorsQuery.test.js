import { authorsQuery } from '../authorsQuery';

describe('authorsQuery', () => {
  it('should response have ids', async () => {
    const result = await authorsQuery({}, {}, {});
    result.forEach(author => expect(author).toHaveProperty('id'))
  });
})
