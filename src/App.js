import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      userInfo: {
        [name]: value,
      }
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        hello world    
      </div>
    )
  }
}

export default App;
