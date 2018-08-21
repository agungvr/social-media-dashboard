import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/users';

class App extends Component {
	componentDidMount(){
		this.props.dispatchGetUser();
	}

	render() {
		return (
			<div className="App">
				<p className="App-intro">
					Agung Ganteng
				</p>
			</div>
		);
	}
}

const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = dispatch => ({
	dispatchGetUser: bindActionCreators(usersActions.usersRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
