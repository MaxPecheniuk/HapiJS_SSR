import { postsByIdLoader } from '../postByIdLoader';

descride('post by id loader', ()=>{
  it('should loader return value', async ()=> {
    const res = await postsByIdLoader(_, "p1", {});

    console.log(res);
  })
})
