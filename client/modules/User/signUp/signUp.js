import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { formData } from '../userAction';
import { connect } from 'react-redux';
 


class signUp extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			firstname:'',
			lastname:'',
			password:'',
			email:'',
			number:''
		};
		this.submitData = this.submitData.bind(this);
	};

	submitData(e) {
		e.preventDefault();
		let firstname = ReactDOM.findDOMNode(this.refs.firstname).value;
		let lastname = ReactDOM.findDOMNode(this.refs.lastname).value;
		let password = ReactDOM.findDOMNode(this.refs.password).value;
		let email = ReactDOM.findDOMNode(this.refs.email).value;
		let number = ReactDOM.findDOMNode(this.refs.number).value;
		console.log(firstname, lastname);
		this.props.dispatch(formData({firstname, lastname, password, email, number}));
		
	};

	



	render(){
		return(
			<div>
				<form>
					firstname:<input type="text"  ref="firstname" />
					<br/>
					LastName:<input type="text"  ref="lastname"/>
					<br/>
					Password:<input type="text"  ref="password"/>
					<br/>
					Email:<input type="text"  ref="email"/>
					<br/> 
					MobileNumber:<input type="text"  ref="number"/>
					<br/>
					<input type="submit" value="submit" onClick={this.submitData}/>				
				</form>
				
			</div>
		);
	}

}
	
export default connect()(signUp);



