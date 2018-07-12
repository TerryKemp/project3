import React, {Component} from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Motion, spring} from 'react-motion';
import NavigationPanel from './components/NavigationPanel';
import Modal from './components/Modal';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mounted: false
		};
	}

	componentDidMount() {
		this.setState({ mounted: true });
	}
	
	handleSubmit = (e) => {
		this.setState({ mounted: false });
		e.preventDefault();
	}

	render() {
		const {mounted} = this.state;

		let child;
		let test = 12;

		if(mounted) {
			child = (
				<div className="App_test">
					<NavigationPanel></NavigationPanel>
					<Modal onSubmit={this.handleSubmit}/>
				</div>
			);
		}
		
		return(
			
			<div className="App">
				<div>
				        <header className='App-header'>
          <img src='https://www.shareicon.net/download/2016/07/09/118949_virus_512x512.png'
            className='App-logo'
            alt='logo' />
          <h1 className='App-title'>HEIR POLLUTION</h1>
        </header>
        <p className='App-intro'>
                        WELCOME TO HEIR POLLUTION.  WHERE YOU HAVE INHERITED THE PREVIOUS GENERATIONS PROBLEMS </p>

		</div>
				<ReactCSSTransitionGroup 
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
						{child}
				</ReactCSSTransitionGroup>
			
			</div>
		);
	}
}

export default App;

