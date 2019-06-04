import * as React from 'react';
import { match, withRouter } from 'react-router';
import { Query } from 'react-apollo';
import * as queryString from 'querystring';
import { useEffect } from 'react';
import { Location, History } from 'history';
import { connect } from 'react-redux';
import { checkLanguageActionCreators } from '../LanguageToggle/actionCreators/LanguageToggle.actionCreators';
import { GET_POSTS_EN, GET_POSTS_RU } from '../../queries/posts.query';
import PostItem, { IPostItemTypes } from '../PostItem/PostItem';

interface IPostsListProps {
  location?: Location;
  history: History;
  match: match;
  setLang: (lang: Object) => void;
}

interface IPostListResponse {
  posts: Array<IPostItemTypes>;
  loading: boolean;
  error: boolean;
}

const PostsList: React.FunctionComponent<IPostsListProps> = (props: IPostsListProps) => {
  const parsed = queryString.parse(props.location.search.replace('?', ''));

  useEffect(() => {
    if (!parsed.lang) {
      props.setLang({parsed: parsed});
    }
  });

  const {lang, title} = parsed;
  return (
    <section className="posts-list">
      <Query<IPostListResponse>
        query={parsed.lang === 'en' ? GET_POSTS_EN : GET_POSTS_RU}
        variables={{title, lang}}
      >
        {({data, loading, error}) => {
          if (loading) { return null; }
          if (error) {return <div>Error</div>; }
          return (
            data.posts.map((post: IPostItemTypes, i: number) =>
              <PostItem postData={post} lang={parsed.lang} key={i}/>
            )
          );
        }}
      </Query>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {language: state.languageReducer.language};
};

const mapDispatchToProps = (dispatch) => {
  return {setLang: lang => dispatch(checkLanguageActionCreators(lang))};
};

export default withRouter(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(PostsList));// tslint:disable-line