import { postsLoader } from '../postsLoader';


describe('posts loader', () => {
  it('should loader return value if title null', async () => {
    const res = await postsLoader({}, {}, {contet:{}});
    expect(res.commentsIds).not.toBeNull()
  })
})

