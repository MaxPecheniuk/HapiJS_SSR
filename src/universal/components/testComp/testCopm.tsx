import * as React from 'react';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import PostItem from '../PostItem/PostItem';
// import { PostTypes } from '../PostsList/PostsList';
// import PostItem from '../PostItem/PostItem';
// import { PostTypes } from '../PostsList/PostsList';
// import { Query } from 'react-apollo';
// import { GET_POSTS } from '../../queries/posts.query';
// import  PostItem  from '../PostItem/PostItem';
// import { CommentTypes } from '../PostComments/PostComments';
interface State {
  variables: any;
}

interface PostsListProps {
  location?: any;
}

interface IPostListResponse {
  posts: Array<PostsId>;
  loading: boolean;
  error: boolean;
}

interface PostsId {
  id: string
}

class MaxComp extends React.Component<PostsListProps, State> {
  state = {
    variables: ''
  }

  componentDidMount(): void {
    console.log('TESTCOPM');
  }

  componentDidUpdate(prevProps, prevState): any {
    // if (this.props.location.search !== prevProps.location.search) {
    //   this.setState({
    //     variables: this.props.location.search
    //   })
    // }
    // console.log('state');
    // console.log(prevState.variables);
    // console.log('props')
    // console.log(prevProps.location.search);
    // console.log('nextProps');
    // console.log(nextProps);
    // console.log('nextState');
    // console.log(nextState);
  }


  render() {
    // console.log('state');
    // console.log(this.state);
    // console.log('props')
    // console.log(this.props.location.search);
    // console.log(this.props.location.search);
    // let variables;
    // if (this.props.location.search.includes('?search=')) {
    //   variables = {'title': decodeURIComponent(this.props.location.search.replace('?search=', '')).toLowerCase()};
    // }
    // console.log(variables);
    return (
      <div className="posts-list">
        <Query<IPostListResponse> query={GET_POSTS} variables={{}}>
          {({data, loading, error}) => {
            if (loading) {
              return null;
            }
            if (error) {
              return <div>Error</div>;
            }

            // console.log(loading);
            return (
              data.posts.map((post: PostsId, i: number) =>

                <PostItem postId={post.id} key={i}/>
              )
            )
          }}
        </Query>
      </div>
    )
  }

}

export default MaxComp;