
class Toggle extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         isToggleOn : true
      };
   }

   handleClick(msg) {
      console.log(msg);

      this.setState(prevState => ({
         isToggleOn : !prevState.isToggleOn
      }));
   }

   render() {
      return (
         <button onClick={(e) => this.handleClick("hello", e)}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      );
   }
}
