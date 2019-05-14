import { postsByIdLoader } from '../postByIdLoader';

describe('post by id loader', ()=>{
  it('should loader return value', async ()=> {
    const res = await postsByIdLoader({}, {id: "p1"}, {});
    expect(res.comments).toHaveLength(3)
    // console.log(res);
  })
})
