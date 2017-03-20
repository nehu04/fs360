import React, { Component } from 'react'
import { Footer } from '../view'
import { Dashboard, Nav, BaseContainer } from '../containers'
import styles from './styles'

class Split extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }

	render(){
		//const style = styles.home

        const path = this.props.location.pathname.replace('/', '')
        const parts = path.split('/')
        const page = parts[0]

        let content = null
        if (parts.length == 1){
            if (page == 'dashboard')
                content = <Dashboard />
        }

        const FooterHOC = BaseContainer(Footer)
		return ( 
            <div>
                <Nav type="standard" />
                <div className="main-container">
                    { content }
                    <FooterHOC />
                </div>
            </div>
		)
	}
}


export default Split
