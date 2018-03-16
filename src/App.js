import React, { Component } from 'react';
import profile from './abrar.jpg';
import background from './valor.jpg';
import home from './pokeball.png';
import Countdown from './countdown';

const styles = StyleSheet.create({
	App: {
		textAlign: center
	},
	
	home: {
		textAlign: left,
		height: 50px,
		width: 50px
	},
	
	countdown: {
		height: 50px,
		width: 50px,
		textAlign: right
	},
	
	logo: {
		height: 100px,
		width: 100px
	},
	
	header: {
		background: radial-gradient(circle, red, black),
		height: 150px,
		padding: 70px,
		color: white
	},
	
	title: {
		textAlign: center,
		font-size: 1.5em,
		font-family: "Verdana"
	},
	
	intro: {
		textAlign: center,
		font-size: xx-large
	},
	
	outro: {
		textAlign: center,
		font-size: xx-large
	},
	
	body: {
		font-color: #22222,
		textAlign: center
	},
	
	muscles: {
		textAlign: center
	},
	
	navLink: {
		background: transparent,
		border: none
	}
})
const Silhouette = ({onClick}) => ( 
	<View onClick={onClick}>
		<p className="App-intro">Nujabes</p>
    		<p className="App-body'">
It's funny how the music puts time in perspective<br />
Add a soundtrack to your life and perfect it<br /> <br />
Whenever you are feeling blue keep walking and we can get far<br />
Wherever you are<br />
			</p>
	</View>
)

const Unmasked = () => ( 
	<View>
		<p className="App-outro"> Rest in Beats</p>
			<p className="App-muscles">
From blocks away you will see me comin <br />
With the biggest smile you ever seen on my face <br />
Cause even the toughest man on the planet needs loving <br />
			</p>
	</View>
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
    const route = this.state.route
    return (
      <View className="App">
    	<Header onClick={this.changeNav.bind(this)}/>
		{route}
      </View>
    );
  }
}

export default App;
