import { Component } from 'react';
import uniqid from 'uniqid';
import humanizeString from 'humanize-string';
import Header from './components/Header';
import CVForm from './components/CVForm';
import Preview from './components/Preview';
import PrintButton from './components/PrintButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      personal: {
        entry: {
          name: '',
          address: '',
          email: '',
          phone: '',
        },
        // errors: {
        //   name: '',
        //   address: '',
        //   email: '',
        //   phone: '',
        // },
      },
      education: {
        list: [],
        entry: {
          school: '',
          course: '',
          degree: '',
          graduationYear: '',
          id: uniqid(),
        },
        errors: {
          school: '',
          course: '',
          degree: '',
          graduationYear: '',
        },
      },
      work: {
        list: [],
        entry: {
          organisation: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
          id: uniqid(),
        },
        errors: {
          organisation: '',
          position: '',
        },
      },
      skills: {
        list: [],
        entry: {
          name: '',
          id: uniqid(),
        },
        errors: { name: '' },
      },
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

  xhandleChange = (key, name, value) => {
    const entry = { ...this.state[key].entry, [name]: value };
    const section = { ...this.state[key], entry };
    this.setState({ [key]: section });
  };

  xgetErrorMsg = (field, value) => {
    if (value !== '') return '';
    
    return `${humanizeString(field)} should not be empty`;
  };

  xgetErrors = (entry, errorFields) => {
    const errors = errorFields.reduce((result, field) => {
      const value = entry[field];
      result[field] = this.getErrorMsg(field, value)
      return result; 
    }, {});

    return errors;
  };

  xvalidateEntry = (section) => {
    const errorFields = Object.keys(this.state[section].errors);
    const { entry } = this.state[section]

    const errors = this.getErrors(entry, errorFields);
    this.setState({ ...this.state[section], errors });

    const isValid = Object.values(errors).every((msg) => msg === '');
    return isValid;
  };

  xaddEntry = (key) => {
    if (!this.validateEntry(key)) return;

    const entry = this.state[key].entry;
    // filters entry from list if it is an existing entry that is being updated
    let list = this.state[key].list.filter((elem) => elem.id !== entry.id);
    list = [...list, entry];

    const defaultEntry = this.props[key];
    const section = {...this.state[key], list, entry: defaultEntry}

    this.setState({ [key]: section });
  };

  xdeleteEntry = (key, id) => {
    const list = this.state[key].list.filter((elem) => elem.id !== id);
    const section = {...this.state[key], list};
    this.setState({ [key]: section });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const userInfo = { ...this.state.userInfo, [name]: value };
    this.setState({ userInfo });
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
          xhandleChange={this.xhandleChange}
          xvalidateEntry={this.xvalidateEntry}
          xdeleteEntry={this.xdeleteEntry}
          xaddEntry={this.xaddEntry}

          handleChange={this.handleChange}
          onEducationSave={this.addEducation}
          onWorkSave={this.addWork}
          onSkillSave={this.addSkill}
          onDeleteEducation={this.deleteEducation}
          onDeleteWork={this.deleteWork}
          onDeleteSkill={this.deleteSkill}
          {...this.state.userInfo}
        />
        <section className="preview-section">
          <h2 className="preview-section__title">CV Preview</h2>
          <PrintButton
            ComponentClass={Preview}
            componentProps={this.state.userInfo}
          />
          <div className="preview-wrapper">
            <Preview {...this.state.userInfo} />
          </div>
        </section>
      </div>
    );
  }
}

// setting the default state of the sections
// saving them in functions so a new object is returned when called
App.defaultProps = {
  default: {
    work: () => ({
      organisation: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      id: uniqid(),
    }),
    education: () => ({
      school: '',
      course: '',
      degree: '',
      graduationYear: '',
      id: uniqid(),
    }),
    skills: () => ({
      name: '',
      id: uniqid(),
    }),
  },
};

export default App;
