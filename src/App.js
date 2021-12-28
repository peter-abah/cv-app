import { Component } from 'react';
import humanizeString from 'humanize-string';
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
      shouldShowPreview: false,
    };
  }

  getErrorMsg = (key) => {
    const value = this.state.userInfo[key];
    const emailRegex = /.+@.+/;

    if (key === 'email') {
      return emailRegex.test(value) ? '' : 'Email is invalid';
    }

    return value === '' ? `${humanizeString(key)} can't be empty` : '';
  };

  scrollToForm = () => {
    const section = document.getElementById('personal');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  validateFields = () => {
    const keys = ['name', 'address', 'email', 'phone', 'description'];

    const errors = keys.reduce((acc, key) => {
      acc[key] = this.getErrorMsg(key);
      return acc;
    }, {});

    const userInfo = { ...this.state.userInfo, errors };
    this.setState({ userInfo });

    const isValid = Object.values(errors).every((msg) => msg.length === 0);
    if (!isValid) this.scrollToForm();
    return isValid;
  };

  showPreview = () => {
    if (!this.validateFields()) return;

    this.setState({ shouldShowPreview: true });
  };

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
        <button className="form__btn" onClick={this.showPreview}>
          Preview
        </button>
        {this.state.shouldShowPreview && (
          <div className="preview-wrapper">
            <Preview {...this.state.userInfo} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
