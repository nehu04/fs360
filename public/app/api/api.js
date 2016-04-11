import fetch from 'isomorphic-fetch'
import actions from '../actions/actions'
import store from '../stores/store'

export default {

	handleGet: function(endpoint, params, completion){

		fetch(endpoint, {
		    method: 'GET',
//		    URLSearchParams: params,
		    headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		    },
		})
		.then(response => response.json())
		.then(function(json){
	    	if (completion != null){
	    		if (json.confirmation == 'success')
		    		completion(null, json)
	    		else
		    		completion({message: json.message}, null)
	    	}
		})
		.catch( err => console.log(err) )
	},

	handlePost: function(endpoint, body, completion){
//		console.log('HANDLE POST: '+JSON.stringify(body));
	    fetch(endpoint, {
	        method: 'POST',
	        headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
	        },
	        body: JSON.stringify(body),
	    })
	    .then(response => response.json())
	    .then(function(json){
	    	if (completion != null){
	    		if (json.confirmation == 'success')
		    		completion(null, json)
	    		else
		    		completion({message: json.message}, null)
	    	}
	    	
	    })
	    .catch(function(err){
	    	if (completion != null)
	    		completion(err, null)
	    	
	    })
	}



}