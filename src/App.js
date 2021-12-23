import { Component } from 'react';
import CVForm from './components/CVForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: '',
        address: '',
        email: '',
        phone: '',
        description: '',
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { [name]: value };

    this.setState({
      userInfo: {...this.state.userInfo, ...updated}
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <CVForm handleChange={this.handleChange}></CVForm>   
      </div>
    )
  }
}

export default App;
