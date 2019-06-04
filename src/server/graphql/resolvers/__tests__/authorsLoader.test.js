import { authorsLoader } from '../authorsLoader';

describe('authors list', () => {
  it('should loader return value', async () => {
    const res = await authorsLoader({author: {id: 'p3_c3_a'}}, {}, {});
    expect(res).toHaveProperty('id')
  })
})

