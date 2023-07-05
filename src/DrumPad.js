import React from 'https://esm.sh/react@18.2.0'
import DrumButton from './DrumButton';
import './App.css';

class DrumPad extends React.Component {
    

    constructor(props){
        super(props);
        this.state = {
            input: ''
          }
    
        this.handleClick = this.handleClick.bind(this);
    
      }

    

      
    
    handleClick = (inputValue) => {
      this.setState({
        input: inputValue
      });
    }
    
    render() {
     return (
     <div id="drum-machine" class="drum">
         <div class="row">
           <div class="col container-fluid">
             <div class="row">
               <div class="col col-4">
                 <DrumButton name = "Q" id = "Heater 1" src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" onClick={this.handleClick}/>
               </div>
               <div class="col col-4">
                 <DrumButton name = "W" id = "Heater 2" src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" onClick={this.handleClick}/>
               </div>
               <div class="col col-4">
                 <DrumButton name = "E" id = "Heater 3" src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" onClick={this.handleClick}/>
               </div>
             </div>
             <div class="row">
               <div class="col col-4">
                 <DrumButton name = "A" id = "Heater 4" src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" onClick={this.handleClick}/>
               </div>
               <div class="col col-4">
                 <DrumButton name = "S" id = "Clap" src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" onClick={this.handleClick}/>
               </div>
               <div class="col col-4">
                 <DrumButton name = "D" id = "Open-HH" src = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" onClick={this.handleClick}/>
               </div>
             </div>
             <div class="row">
               <div class="col col-4">
                 <DrumButton name = "Z" id = "Kick-n'-Hat" src = "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" onClick={this.handleClick}/>
               </div>
               <div class="col col-4">
                 <DrumButton name = "X" id = "Kick" src = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" onClick={this.handleClick}/>
               </div>
               <div class="col col-4">
                 <DrumButton name = "C" id = "Closed-HH" src = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" onClick={this.handleClick}/>
               </div>
             </div>
           </div>
           <div class="col container-fluid">
             <div>
               <p id="display">{this.state.input}</p>
             </div>
           </div>
          </div>
      </div>    
      );  
  }}

  export default DrumPad;
  