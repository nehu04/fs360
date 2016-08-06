import React, { Component } from 'react'
import api from '../utils/APIManager'

class DetailBox extends Component {

	constructor(props, context){
		super(props, context)
		this.updateVisitor = this.updateVisitor.bind(this)
		this.submitRequest = this.submitRequest.bind(this)
		this.state = {
			visitor: {
				name: '',
				email: ''
			}
		}
	}

	updateVisitor(event){
		event.preventDefault()
		var s = Object.assign({}, this.state.visitor)
		s[event.target.id] = event.target.value
		s['course'] = this.props.course.title
		this.setState({
			visitor: s
		})
	}

	submitRequest(event){
		event.preventDefault()

		if (this.state.visitor.name.length == 0){
			alert('Please enter your name.')
			return
		}

		if (this.state.visitor.email.length == 0){
			alert('Please enter your email.')
			return
		}

		this.props.showLoader()

		var s = Object.assign({}, this.state.visitor)
		var parts = s.name.split(' ')
		s['firstName'] = parts[0]
		if (parts.length > 1)
			s['lastName'] = parts[parts.length-1]

		var _this = this
		var url = ''

		const course = this.props.course
		if (course.type == 'immersive'){ // syllabus request
			s['pdf'] = course.syllabus
			s['subject'] = 'Syllabus Request'
			url = '/account/syllabus'
		}
		if (course.type == 'online'){ 
			s['subject'] = 'New Subscriber'
			url = '/account/subscribe'
		}
		if (course.type == 'live'){ 
			s['subject'] = 'Free Session Request'
			url = '/account/freesession'
		}

		api.handlePost(url, s, function(err, response){
			_this.props.hideLoader()

			if (err){
				alert(err.message)
				return
			}

			alert(response.message)
		})
	}

	render(){
		var detailContent = null
		const course = this.props.course
		if (course.type == 'online'){
			detailContent = {
				title: 'Newsletter',
				text: 'Join our newsletter for notifications on upcoming courses, events and tutorials.',
				path: '/account/subscribe'
			}
		}
		else if (course.type == 'immersive'){
			detailContent = {
				title: 'Request Syllabus',
				text: 'Complete the form below to receive a syllabus for '+course.title,
				path: '/account/syllabus'
			}
		}
		else {
			detailContent = {
				title: 'Preview Free Session',
				text: 'Complete the form below to preview the next session of '+course.title+' for free.',
				path: '/account/subscribe'
			}
		}


		return (
			<div className="col_half panel panel-default col_last">
				<div style={{backgroundColor:'#f1f9f5', textAlign:'center'}} className="panel-heading">{detailContent.title}</div>
				<div className="panel-body" style={{textAlign:'center'}}>
					<img style={{width:96, marginBottom:12}} src="/images/logo_round_blue_260.png" />
					<p>{detailContent.text}</p>
					<hr />
					<input type="text" onChange={this.updateVisitor} value={this.state.visitor.name} id="name" placeholder="Name" className="form-control" style={{background:'#f9f9f9'}} /><br />
					<input type="text" onChange={this.updateVisitor} value={this.state.visitor.email} id="email" placeholder="Email" className="form-control" style={{background:'#f9f9f9'}} /><br />
					<a onClick={this.submitRequest} href="#" className="button button-border button-dark button-rounded noleftmargin">Submit</a>
				</div>
			</div>
		)


	}

}

export default DetailBox