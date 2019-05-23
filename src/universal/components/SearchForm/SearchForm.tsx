import * as React from 'react';
import { Fragment, SyntheticEvent, useState } from 'react';
import { InputText } from '../share.components/inputText/InputText';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';

import './searchForm.scss';
import { useEffect } from 'react';

/* tslint:disable */
interface IProps {
  history?: any;
  location?: any;
}

/* tslint:enable */
const SearchForm: React.FunctionComponent<IProps & RouteComponentProps<{}>> =
  (props: IProps & RouteComponentProps<{}>) => {
    const [inputValue, inputValueOnChange] = useState<string>('');
    const [redirect, redirectToggle] = useState<boolean>(false);

    useEffect(() => {
      return () => {
        redirectToggle(false);
      };
    });

    const onChange = (event: SyntheticEvent<HTMLInputElement>) => {
      inputValueOnChange(event.currentTarget.value);
    };

    const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (props.location.pathname !== '/') {
        redirectToggle(true);
      }
      props.history.push({search: `?search=${inputValue}`});
    };

    if (redirect) {
      return <Redirect to={{pathname: '/', search: `?search=${inputValue}`}}/>;
    }
    return (
      <Fragment>
        <form onSubmit={onSubmit} className="search-form">
          <FormattedMessage id="form.inputPlaceholder">
            {placeholder => (<InputText
              value={inputValue}
              placeholder={placeholder}
              onChange={onChange}
              name="inputValue"
              className="search-form__input-field"
            />)}
          </FormattedMessage>

          <button
            type="submit"
            className="search-form__submit-btn"
          >
            <FormattedMessage id="form.submitBtn"/>
          </button>
        </form>
      </Fragment>
    );
  };

export default withRouter(SearchForm);