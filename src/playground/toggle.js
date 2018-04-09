class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
      this.setState(prevState => {
        return {
          visibility: !prevState.visibility
        };
      });
    }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Lorem ipsum</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let showDetails = false;

// const toggle = () => {
//   showDetails = !showDetails;
//   renderApp();
// };

// console.log(showDetails);

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggle}>
//         {showDetails ? 'Hide details' : 'Show details'}
//       </button>
//       {showDetails && <p>Lorem ipsum</p>}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById('app'));
// };

// renderApp();