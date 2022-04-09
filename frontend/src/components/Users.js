import React from "react";

class Users extends React.Component {
	constructor(props) {
		super(props);
	}
	state = {  }
	componentDidMount() {
		console.log(this.props)
	}
	render() { 
		return ( <div>Users:</div> );
	}
}
 
export default Users;