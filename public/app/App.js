import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './stores/store'
import Main from './components/Main'


class App extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.refreshData = this.refreshData.bind(this);
		this.state = {
			page: null,
			slug: null
		};
	}

	initialState(){
		return {
			page: null,
			slug: null
		}

	}

	componentWillMount(){
		var path = window.location.pathname.replace('/', ''); // http://localhost:3000/
//		console.log('PATH = ' + path);

		var page = 'home'
		var slug = null
		if (path.length > 0){
			var parts = path.split('/')
			page = parts[0]
			if (parts.length > 1)
				slug = parts[1]
		}

		var address = window.location.href // http://localhost:3000/courses?type=online
		var params = null
		if (address.indexOf('?') != -1){
			params = {}
			var parts = address.split('?')
			var paramsString = parts[1] // key=value&key=value
			var keyValuePairs = paramsString.split('&')
			for (var i=0; i<keyValuePairs.length; i++){
				var keyValue = keyValuePairs[i]
				if (keyValue.indexOf('=') == -1)
					continue

				var pieces = keyValue.split('=');
				var key = pieces[0]
				var value = pieces[1]
				params[key] = value
			}
		}

		console.log('PARAMS: '+JSON.stringify(params));


		this.setState({
			page: page,
			slug: slug,
			params: params
		});
	}

	componentDidMount(){

	}


	refreshData(){

	}

	render(){
		return (
			<Main page={this.state.page} slug={this.state.slug} params={this.state.params} />
		)
	}
}

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>	
), document.getElementById('app'));


