import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import News from './components/News';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
 
  
	render() {
		return (
			<BrowserRouter>
				<div>
					<div className="App">

						<Header />
						<Navigation />
						<Switch>
							<Route path="/" component={Login} exact/>
							<Route path="/Register" component={Register}/>
							<Route path="/News" component={News}/>
						</Switch>
			 
						

					</div>
				</div> 
		</BrowserRouter>
    );
  }
}

export default App;