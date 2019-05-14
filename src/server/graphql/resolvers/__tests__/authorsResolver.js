import { makeExecutableSchema, } from 'graphql-tools';
import resolvers from '../rootResolver';
import { typeDefs } from '../../schema/postsSchema';
import { graphql } from 'graphql';

const mock = {
  data: {"authors": [
      {
        "id": "p1_c1_a",
        "name": "Name Surname"
      },
      {
        "id": "p1_c2_a",
        "name": "Name Surname"
      },
      {
        "id": "p1_c3_a",
        "name": "Name Surname"
      },
      {
        "id": "p2_c1_a",
        "name": "Name Surname"
      },
      {
        "id": "p2_c2_a",
        "name": "Name Surname"
      },
      {
        "id": "p2_c3_a",
        "name": "Name Surname"
      },
      {
        "id": "p3_c1_a",
        "name": "Name Surname"
      },
      {
        "id": "p3_c2_a",
        "name": "Name Surname"
      },
      {
        "id": "p3_c3_a",
        "name": "Name Surname"
      }
    ]}
}

describe('post resolver', () => {
  const schema = makeExecutableSchema({typeDefs, resolvers});
  const query = `
  {
    authors {
      id
      name
      }
  }`;

  it('should response equal mock data', async () => {
    const result = await graphql(schema, query,null, {});
    expect(result).toEqual(mock)
  });
})

