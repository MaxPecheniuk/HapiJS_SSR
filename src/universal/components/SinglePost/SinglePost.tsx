import * as React from 'react';
import { useEffect } from 'react';
import { match, withRouter } from 'react-router';
import * as queryString from 'querystring';
import { Query } from 'react-apollo';
import { GET_POST_EN, GET_POST_RU } from '../../queries/postItem.query';
import ClearPost from '../share.components/ClearPost/ClearPost';
import { History, Location } from 'history';
import { checkLanguageActionCreators } from '../LanguageToggle/actionCreators/LanguageToggle.actionCreators';
import { connect } from 'react-redux';
import PostItem, { IPostItemTypes } from '../PostItem/PostItem';

interface IPostItemProps {
  history: History;
  match: match<{id: string}>;
  location: Location;
  setLang: (lang: Object) => void;
}

interface IPostItemResponse {
  postById: IPostItemTypes;
  loading: boolean;
  error: boolean;
}

const SinglePost: React.FunctionComponent<IPostItemProps> = (props: IPostItemProps) => {
  const {match, location, history} = props;
  const parsed = queryString.parse(location.search.replace('?', ''));
  useEffect(() => {
    if (match.params.id !== undefined && parsed.title) {
      delete parsed.title;
      const stringified = queryString.stringify(parsed);
      history.push({search: stringified});
    }
    if (!parsed.lang) {
      props.setLang({parsed: parsed});
    }
  });

  return (
    <Query<IPostItemResponse>
      query={parsed.lang === 'en' ? GET_POST_EN : GET_POST_RU}
      variables={{'id': match.params.id}}
    >
      {({data, loading, error}) => {
        if (loading) { return <div><ClearPost/></div>; }
        if (error) { return <div>Error</div>; }
        return (
        <PostItem postData={data.postById} lang={parsed.lang}/>
        );
      }}
    </Query>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: lang => dispatch(checkLanguageActionCreators(lang))
  };
};

export default withRouter(connect<any, any, any>(null, mapDispatchToProps)(SinglePost));// tslint:disable-line