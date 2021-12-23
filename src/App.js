import { Component } from 'react';
import CVForm from './components/CVForm';

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
        <CVForm></CVForm>   
      </div>
    )
  }
}

export default App;
