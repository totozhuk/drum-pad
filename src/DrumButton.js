class DrumButton extends React.Component{
  constructor(props){
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this); //hgfhgf

  }

   componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
    let element = document.getElementsByName(event.key.toUpperCase())
    if (element[0] != undefined) {
      element[0].children[0].play()
      this.props.onClick(element[0].id)
    }
  }

  playAudio (event){
    this.props.onClick(event.target.id)
    event.target.children[0].play()
  }

  render() {
    return (
      <div>
       <button name={this.props.name} onClick={() => this.playAudio(event)} className = "drum-pad" id = {this.props.id}>
         <audio className="clip" id={this.props.name} src={this.props.src}></audio>
          {this.props.name}
       </button>
     </div>
    );
  }
}