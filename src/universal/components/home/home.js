// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrease, increase } from './actionCreators/action-creator';
import '../../index.scss';
import { Link } from 'react-router-dom';

type Props = {
  count: any,
  increase: any,
  decrease: any
}
type State = {
  showBlock: boolean
}

const mapStateToProps = state => ({
  count: state.HomeReducer.count,
})
const mapDispatchToProps = {
  increase,
  decrease,
};

export class Home extends Component<Props, State> {
  state = {
    showBlock: false,
  };

  onToggleChange = () => {
    this.setState(
      {showBlock: !this.state.showBlock}
    )
  };

  render() {
    const {showBlock} = this.state;
    const {count, increase, decrease} = this.props;

    return (
      <div>
        <div>
          {count}
          <button className="test" onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </div>
          <button data-testid="btn-testId" className='btn' onClick={this.onToggleChange}>Show block</button>
          {showBlock && (
            <div className="red">
              BLOCK
            </div>
          )}
        <div>
          <Link to='/posts'>Link to Users list</Link>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)