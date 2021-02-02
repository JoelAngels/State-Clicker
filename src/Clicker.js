import React, {Component} from 'react';

class Clicker extends Component {
    state = {num: 1};
    genRandom = () => {
        //pick random number 1 to 10
        let rand = Math.floor(Math.random() * 10) + 1;
        //then update stand with new random
        this.setState({num: rand});
        //then bind genrandom
    }
        render(){
            return (    
                <div>
                    <h1>Number is: {this.state.num}</h1>
                    {this.state.num === 7 
                    ? <h2>"You win"</h2>
                    :  
                    <button onClick = {this.genRandom}>Random Number</button>
                    }
                </div>
            )
        }

    }

export default Clicker;

//Step one lets display the clicker on the webpage
//Step 2 , lets make it stateful and set number  === 1
//Add the button


//      {this.state.num === 7 && <h2>"You win"</h2>} means is num === 7 DISPLAY THAT 
