import { Component } from 'react';
import Header from './components/Header';
import CVForm from './components/CVForm';
import Preview from './components/Preview';

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
        works: [],
        skills: [],
        errors: {
          name: '',
          address: '',
          email: '',
          phone: '',
          description: '',
        },
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const userInfo = {...this.state.userInfo, [name]: value};
    this.setState({ userInfo })
  };

  addEducation = (education) => {
    // filters existing education if it exists incase of update
    let educations = this.state.userInfo.educations.filter(
      (elem) => elem.id !== education.id
    );
    educations = [...educations, education];
    const userInfo = { ...this.state.userInfo, educations };
    this.setState({ userInfo });
  };

  addWork = (work) => {
    // filters existing work if it exists incase of update
    let works = this.state.userInfo.works.filter((elem) => elem.id !== work.id);
    works = [...works, work];
    const userInfo = { ...this.state.userInfo, works };
    this.setState({ userInfo });
  };

  addSkill = (skill) => {
    // filters existing skill if it exists incase of update
    let skills = this.state.userInfo.skills.filter(
      (elem) => elem.id !== skill.id
    );
    skills = [...skills, skill];
    const userInfo = { ...this.state.userInfo, skills };
    this.setState({ userInfo });
  };

  deleteSkill = (e) => {
    const id = e.target.dataset.id;
    let skills = this.state.userInfo.skills.filter((elem) => elem.id !== id);
    const userInfo = { ...this.state.userInfo, skills };
    this.setState({ userInfo });
  };

  deleteEducation = (e) => {
    const id = e.target.dataset.id;
    let educations = this.state.userInfo.educations.filter(
      (elem) => elem.id !== id
    );
    const userInfo = { ...this.state.userInfo, educations };
    this.setState({ userInfo });
  };

  deleteWork = (e) => {
    const id = e.target.dataset.id;
    let works = this.state.userInfo.works.filter((elem) => elem.id !== id);
    const userInfo = { ...this.state.userInfo, works };
    this.setState({ userInfo });
  };

  render() {
    return (
      <div>
        <Header />
        <CVForm
          handleChange={this.handleChange}
          onEducationSave={this.addEducation}
          onWorkSave={this.addWork}
          onSkillSave={this.addSkill}
          onDeleteEducation={this.deleteEducation}
          onDeleteWork={this.deleteWork}
          onDeleteSkill={this.deleteSkill}
          {...this.state.userInfo}
        />
        <div className="preview-wrapper">
          <Preview {...this.state.userInfo} />
        </div>
      </div>
    );
  }
}

export default App;
