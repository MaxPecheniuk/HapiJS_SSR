import React from 'react'
import '../index.scss'
import {connect} from "react-redux";

class Home extends React.Component {

	render() {
		return (
			<div className="red">
				<h1>
					!!!!!!Lorem ips5sfsf55um dolor aaapraeaaaaadgdsssssaaentaaaium reprsfsfsehenderit saepe.
				</h1>
			</div>
		)
	}
}

const MapStateToProps = (state) => {
	return {count: state.HomeReducer.count}
}

export default connect(MapStateToProps)(Home)