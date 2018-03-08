import React, {Component} from 'react';
//import { AppRegistry, Text, TextInput, View } from 'react-native'

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: 63, timerState: 'paused' };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.setTimer = this.setTimer.bind(this);
  }
	
  secondsToTime(secs){
  
  	let years = Math.floor(secs/ (60 * 60 * 24 * 352));
  	let days = Math.floor(secs/ (60 * 60 * 24));
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "y": years,
      "d": days,
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
	this.timer = setInterval(this.countDown, 1000);
    this.setState({
    	timerState: 'running'
    })
  }

  stopTimer() {
  		if (this.timer !== 0) {
  			clearInterval(this.timer);
  			console.log('Stop the timer');
	  	}
		this.setState({
    		timerState: 'paused'
	    })
  }
  
  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds === 0) { 
      clearInterval(this.timer);
//       alert('Complete'); 
      this.setState({
      	timerState: 'completed'
      })
    }
  }

  setTimer(e) {
  	this.setState({
  	    time: this.secondsToTime(e.target.value),
  		seconds: e.target.value
  	})
  }

  render() {
  	let content;
  	switch(this.state.timerState) {
  		case 'paused':
  			content = <PausedView />;
  			break;
  		case 'completed':
  			content = <CompletedView />;
  			break;
  		case 'running':
  			content = <TimerView time={this.state.time}/>;
  			break;  		
  		default:
  			throw new Error('you forgot something you stupid developer');
  	}
    return(
      <div>
        <button onClick={this.startTimer}>Start</button> &nbsp;
        <button onClick={this.stopTimer}>Stop</button> &nbsp;
        { 
        	this.state.timerState === 'running' 
        		? null 
        		: <input type="number" value={this.state.seconds} onChange={this.setTimer}/>
        }
        {content}
      </div> 
    )
  }
}


const PausedView = () => <div>Timer Paused</div>

const CompletedView = () => <div>Bitch U Done</div>

const TimerView = ({ time }) => (
	<div>
		{time.y} &nbsp; years &nbsp;
        {time.d} &nbsp; days &nbsp;
        {time.h} &nbsp; hours &nbsp;
        {time.m} &nbsp; minutes &nbsp;
        {time.s} &nbsp; seconds &nbsp;
	</div>
)


export default Countdown;

/* TODO: add stop, reset, and set functions
		 if timer is done, change text 
		 
		 
 if (hours === 0 && minutes === 0 && seconds === 0) {
        	<div> Complete! </div> } else {
        		console.log('Timer is running');
        }*/

/* 


 
 	  <div>
       <View Style={{padding: 10}}>
	    <TextInput 
	     style={{height: 40}}>
	     placeholder='Type here to translate!'
	     onChangeText={(text) => this.setState({text})}
	    />
	    <Text style ={{padding: 10, fontSize: 42}}>
        {this.state.text.split(' ').map((word) => word && 'asdf').join(' ')}
        </Text>
       </View>
      </div>
 */
 
 

