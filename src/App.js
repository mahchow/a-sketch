import React, { Component } from 'react';
import profile from './abrar.jpg';
import background from './valor.jpg';
import './App.css';
import home from './pokeball.png';
import Countdown from './countdown';

const Silhouette = ({onClick}) => ( 
	<div onClick={onClick}>
		<p className="App-intro">Nujabes</p>
    		<p className="App-body'">
It's funny how the music puts time in perspective<br />
Add a soundtrack to your life and perfect it<br /> <br />
Whenever you are feeling blue keep walking and we can get far<br />
Wherever you are<br />
			</p>
	</div>
)

const Unmasked = () => ( 
	<div>
		<p className="App-outro"> Rest in Beats</p>
			<p className="App-muscles">
From blocks away you will see me comin <br />
With the biggest smile you ever seen on my face <br />
Cause even the toughest man on the planet needs loving <br />
			</p>
	</div>
)

const Header = ({onClick}) => (
	<header className="App-header">
     <h1 className="App-title">AMC</h1>
     <button className="Nav-link" onClick={ () => onClick('home') }><img src={profile} className="App-logo" alt="logo" /></button>
     <button className="Nav-link" onClick={ () => onClick('end') }><img src={home} className="App-home" alt="home" /></button>
	 <button className="Nav-link" onClick={ () => onClick('countdown') }><img src={background} className="App-home" alt="home" /></button>
	</header>
)

const routes = {
	home : <Silhouette/>,
	end: <Unmasked />,
	countdown: <Countdown />
}
class App extends Component {
  constructor(props) {
  	super(props);
    this.state = {
    	route: <Silhouette/>, //default setting
    };
  }
  changeNav(route) {
  	this.setState( {route : routes[route]} )
  	
  }
  render() {
//     console.log(this.state);
    const route = this.state.route
    return (
      <div className="App">
    	<Header onClick={this.changeNav.bind(this)}/>
		{route}
      </div>
    );
  }
}

export default App;
