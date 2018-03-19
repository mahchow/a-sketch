import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render, ReactDOM } from 'react-dom'

import { 
	StyleSheet, 
	View, 
	TouchableOpacity, 
	Image, 
	Text 
} from 'react-native'

import hacker from './glider.jpeg'
import profile from './abrar.jpg'
import background from './valor.jpg'
import home from './pokeball.png'
import Countdown from './countdown.js'

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 50
	},
	icon: {
		height: '10vh',
		width: '10vw',
		resizeMode: 'cover'
	},
	menu: {
		flex: 1,
		flexDirection: 'column'
	},
	profile: {
		height: '50vh',
		width: '50vw',
	}
})

const Silhouette = ({onClick}) => ( 
	<View style={styles.container}> 
		<Text style={styles.title}>Abrar Mahmud Chowdhury</Text>
		<Text> Operations & Design </Text>
	</View>
)
const Menu = () => (
	<View style = {styles.menu}>
		<Image source={profile} style={styles.icon}/>
		<Image source={background} style={styles.icon}/>
		<Image source={home} style={styles.icon}/>
	</View>
)
const Unmasked = () => ( 
	<Image resizeMode= 'repeat' draggable={false} style={styles.profile} source ={hacker}/>
)

const Header = ({onClick}) => (
     <View>
      <Silhouette/>
	</View>
	
)

// const routes = () => {
// 	home: <Silhouette />,
// 	end: <Unmasked />,
// 	countdown: <Countdown />
//  }

// routes.PropTypes = {
// 	home: PropTypes.func,
// 	end: Proptypes.func,
// 	countdown: Proptypes.func
// }
// class App extends Component {
//   constructor(props) {
//   	super(props);
//     this.state = {
//     	route: <Silhouette/>, //default setting
// 	}
//   }
//   changeNav(route) {
//   	this.setState( route: routes[route] )
//   }
//   render() {
//     const route = this.state.route
//     return (
//       <View>
//     	<Header onClick={this.changeNav.bind(this)}/>
// 		{route}
//       </View>
//     )
//   }
// }

/* <Image style={styles['Nav-link']} onClick={ () => onClick('home') } source={profile} alt="logo" />
<Image style={styles['Nav-link']} onClick={ () => onClick('end') } source={home} alt="home" />
<Image style={styles['Nav-link']} onClick={ () => onClick('countdown') } source={background} alt="timer" /> */

const App = () => (
 <View>
	<Menu/>
 	<Header/>
 	<Unmasked/>
 </View>
)


const div = document.createElement('root')
div.id = 'root'
document.body.appendChild(div)
render(<App />, document.querySelector('#root'))