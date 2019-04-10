// @flow
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { decrease, increase } from './action-creator';
import '../../index.scss';

type Props = {
  count: any,
  increase: any,
  decrease: any
}

const mapStateToProps = state => ({
  count: state.HomeReducer.count,
})
const mapDispatchToProps = {
  increase,
  decrease,
};

class Home extends Component<Props>{
  render() {
		const { count, increase, decrease} = this.props;
    return (
      <div className="red">
        {count}
        <button className="test" onClick={increase}>+</button>
        <button onClick={decrease}>-</button>

      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)