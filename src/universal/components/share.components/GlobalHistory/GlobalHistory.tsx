import React from 'react';
import { withRouter } from 'react-router';

// variable which will point to react-router history
let globalHistory = null;

class Spy extends React.Component<any, any> {// tslint:disable-line

  componentDidMount() {
    const { history } = this.props;
    globalHistory = history;
  }

  componentDidUpdate(props: any) {// tslint:disable-line
    console.log(props);
    globalHistory = props.history;
  }

  render() {
    return null;
  }
}

export const GlobalHistory = withRouter(Spy);

export default function getHistory() {
  return globalHistory;
}