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
        educations: [],
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { [name]: value };

    this.setState({
      userInfo: { ...this.state.userInfo, ...updated },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  addEducation = (education) => {
    const educations = [...this.state.userInfo.educations, education];
    const userInfo = { ...this.state.userInfo, educations };
    this.setState({ userInfo });
  };

  render() {
    return (
      <div>
        <CVForm
          handleChange={this.handleChange}
          onEducationSave={this.addEducation}
          {...this.state.userInfo}
        ></CVForm>
      </div>
    );
  }
}

export default App;
