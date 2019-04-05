import React from 'react'
import '../index.scss'
import {connect} from "react-redux";
import {decrease, increase} from "./action-creator";

class Home extends React.Component {

	render() {
		const {count, increase, decrease} = this.props;
		return (
			<div className="red">
				{count}s
				<button onClick={increase}>+</button>
				<button onClick={decrease}>-</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {count: state.HomeReducer.count}
}
const mapDispatchToProps = {
	increase,
	decrease
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)