import React from 'react';
import {connect} from 'react-redux';
import { decrease, increase } from './action-creator';
import '../index.scss';

const mapStateToProps = state => ({
  count: state.HomeReducer.count,
})
const mapDispatchToProps = {
  increase,
  decrease,
};

class Home extends React.Component{

  render() {
		const { count, increase, decrease, title, url } = this.props;
    return (
      <div className="red">
        {count}gggggggggggg
        <button className="test" onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <a href={url} onClick={this.testClick}>{title}</a>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)