import * as React from 'react';
import { match, withRouter } from 'react-router';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import * as queryString from 'querystring';
import { useEffect } from 'react';
import { Location, History } from 'history';
import { connect } from 'react-redux';
import { checkLanguageActionCreators } from '../LanguageToggle/actionCreators/LanguageToggle.actionCreators';
import PostItemLoader from '../PostItemLoader/PostItemLoader';
// import loadable from '@loadable/component';
// const ClearPost = loadable(() => import('../share.components/ClearPost/ClearPost'));

interface IPostsListProps {
  location?: Location;
  history: History;
  match: match;
  setLang: (lang: Object) => void;
}

interface IPostListResponse {
  posts: Array<IPostsId>;
  loading: boolean;
  error: boolean;
}

interface IPostsId {
  id: string;
}

const PostsList: React.FunctionComponent<IPostsListProps> = (props: IPostsListProps) => {
  const parsed = queryString.parse(props.location.search.replace('?', ''));
  console.log(parsed);

  useEffect(() => {
    if (!parsed.lang) {
      props.setLang({parsed: parsed});
    }
  });

  const {lang, title} = parsed;
    return (
      <div className="posts-list">
        <Query<IPostListResponse>
          query={GET_POSTS}
          variables={{title, lang}}
        >
          {({data, loading, error}) => {
            if (loading) {return null; }
            if (error) {return <div>Error</div>; }
            return (
              data.posts.map((post: IPostsId, i: number) =>
                <PostItemLoader postId={post.id} key={i}/>
              )
            );
          }}
        </Query>
      </div>
    );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {language: state.languageReducer.language};
};

const mapDispatchToProps = (dispatch) => {
  return { setLang: lang => dispatch(checkLanguageActionCreators(lang))};
};

export default withRouter(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(PostsList));