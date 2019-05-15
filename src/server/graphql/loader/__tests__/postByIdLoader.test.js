

import { postsByIdLoader } from '../postByIdLoader';

describe('post by id loader-2', ()=>{
  it('should loader return value', async ()=> {
    const res = await postsByIdLoader({}, {id: "p1"}, {});
    expect(res).toHaveProperty('id')

  })
})