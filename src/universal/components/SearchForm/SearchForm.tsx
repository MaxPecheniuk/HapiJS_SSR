import * as React from 'react';
import { Fragment, SyntheticEvent, useState } from 'react';
import { InputText } from '../share.components/inputText/InputText';
import { RouteComponentProps, withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';
import * as queryString from 'querystring';
import { History, Location } from 'history';

import './SearchForm.scss';

interface ISearchFormProps {
  history?: History;
  location?: Location;
}

const SearchForm: React.FunctionComponent<ISearchFormProps & RouteComponentProps<{}>> =
  (props: ISearchFormProps & RouteComponentProps<{}>) => {
    const [inputValue, inputValueOnChange] = useState<string>('');

    const onChange = (event: SyntheticEvent<HTMLInputElement>) => {
      inputValueOnChange(event.currentTarget.value);
    };

    const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();

      let parsed = queryString.parse(props.location.search.replace('?', ''));
      if (Object.keys(parsed).length > 0) {
        parsed['title'] = inputValue;
      } else { parsed.search = inputValue; }
      const stringified = queryString.stringify(parsed);
      props.history.push({pathname: '/', search: stringified});
    };

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