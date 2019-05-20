import * as React from 'react';
import { Fragment, SyntheticEvent, useState } from 'react';
import { InputText } from '../share.components/inputText/InputText';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';

import './searchForm.scss';
import { useEffect } from 'react';

// interface ISearchFormState  {
//   inputValue: string;
//   redirect: boolean;
// }
/* tslint:disable */
interface IProps {
  history?: any;
  location?: any;
}

/* tslint:enable */
const SearchForm: React.FunctionComponent<IProps & RouteComponentProps<{}>> =
  (props: IProps & RouteComponentProps<{}>) => {

    const [inputValue, inputValueOnChange] = useState<string>('');
    const[redirect, redirectToggle] = useState<boolean>(false);

    useEffect(() => {
      console.log(redirect);
      if (props.location.pathname === '/list' && redirect) {
        redirectToggle(false);
      }
    });

    const onChange = (event: SyntheticEvent<HTMLInputElement>) => {
      inputValueOnChange(event.currentTarget.value);
    };

    const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (props.location.pathname !== '/list') {
        redirectToggle(true);
      }
      props.history.push({search: `?search=${inputValue}`});
    };

    if (redirect) {
      return <Redirect to={{pathname: '/list', search: `?search=${inputValue}`}}/>;
    }
    return (
      <Fragment>
        <form onSubmit={onSubmit} className="search-form">
          <InputText
            value={inputValue}
            placeholder="Search title"
            onChange={onChange}
            name="inputValue"
            className="search-form__input-field"
          />
          <button
            type="submit"
            className="search-form__submit-btn"
          >Submit
          </button>
        </form>
      </Fragment>
    );
  };

export default withRouter(SearchForm);