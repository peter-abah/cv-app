import { Component } from 'react';
import uniqid from 'uniqid';
import humanizeString from 'humanize-string';
import PersonalInfoForm from './PersonalInfoForm';
import EducationForm from './EducationForm';
import WorkForm from './WorkForm';
import SkillForm from './SkillForm';
import Education from './Education';
import Work from './Work';
import Skill from './Skill';

class CVForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: {
        school: '',
        course: '',
        degree: '',
        graduationYear: '',
        id: uniqid(),
      },
      educationErrors: {
        school: '',
        course: '',
        degree: '',
        graduationYear: '',
      },
      isEducationEdit: false,
      isEducationFormOpen: true,
      work: {
        organisation: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
        id: uniqid(),
      },
      workErrors: {
        organisation: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
      isWorkEdit: false,
      isWorkFormOpen: true,
      skill: {
        name: '',
        id: uniqid(),
      },
      skillErrors: {
        name: '',
      }
    };
  }

  handleEducationChange = (e) => {
    const { name, value } = e.target;
    const education = { ...this.state.education, [name]: value };
    this.setState({ education });
  };

  handleWorkChange = (e) => {
    const { name, value } = e.target;
    const work = { ...this.state.work, [name]: value };
    this.setState({ work });
  };

  handleSkillChange = (e) => {
    const { name, value } = e.target;
    const skill = { ...this.state.skill, [name]: value };
    this.setState({ skill });
  };

  isEducationFormValid = () => {
    const keys = ['school', 'course', 'degree', 'graduationYear'];
    const errors = keys.reduce((acc, key) => {
      const value = this.state.education[key];
      acc[key] = value === '' ? `${humanizeString(key)} should not be empty`: '';
      return acc; 
    }, {});

    const educationErrors = {...this.state.workErrors, ...errors};
    this.setState({ educationErrors });

    const isValid = Object.values(errors).every((msg) => msg.length === 0);
    return isValid;
  }

  saveEducationInfo = (e) => {
    if (!this.isEducationFormValid()) return;
    this.props.onEducationSave(this.state.education);

    this.setState({
      education: {
        school: '',
        course: '',
        degree: '',
        graduationYear: '',
        id: uniqid(),
      },
      isEducationEdit: false,
      isEducationFormOpen: false,
    });
  };

  isWorkFormValid = () => {
    const keys = ['organisation', 'position'];
    const errors = keys.reduce((acc, key) => {
      const value = this.state.work[key];
      acc[key] = value === '' ? `${humanizeString(key)} should not be empty`: '';
      return acc; 
    }, {});

    const workErrors = {...this.state.workErrors, ...errors};
    this.setState({ workErrors });

    const isValid = Object.values(errors).every((msg) => msg.length === 0);
    return isValid;
  }

  saveWorkInfo = (e) => {
    if (!this.isWorkFormValid()) return;
    this.props.onWorkSave(this.state.work);

    this.setState({
      work: {
        organisation: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
        id: uniqid(),
      },
      isWorkEdit: false,
      isWorkFormOpen: false,
    });
  };

  saveSkillInfo = (e) => {
    this.props.onSkillSave(this.state.skill);

    this.setState({
      skill: {
        name: '',
        id: uniqid(),
      },
    })
  };

  toggleWorkForm = (e) => {
    if (this.state.isWorkEdit) return;

    this.setState({
      isWorkFormOpen: !this.state.isWorkFormOpen,
    });
  };

  toggleEducationForm = () => {
    if (this.state.isEducationEdit) return;

    this.setState({
      isEducationFormOpen: !this.state.isEducationFormOpen,
    });
  };

  toggleEditEducationForm = (e) => {
    if (this.state.isEducationEdit) return;

    const id = e.target.dataset.id;
    const education = this.props.educations.filter((elem) => elem.id === id)[0];
    this.setState({ education, isEducationEdit: true, isEducationFormOpen: true });
  };

  toggleEditWorkForm = (e) => {
    if (this.state.isWorkEdit) return;

    const id = e.target.dataset.id;
    const work = this.props.works.filter((elem) => elem.id === id)[0];
    this.setState({ work, isWorkEdit: true, isWorkFormOpen: true });
  };

  render() {
    const {
      handleChange,
      name,
      phone,
      address,
      email,
      description,
      educations,
      works,
      skills,
      errors,
      onDeleteEducation,
      onDeleteWork,
      onDeleteSkill,
    } = this.props;

    return (
      <form className="form">
        <PersonalInfoForm
          name={name}
          phone={phone}
          address={address}
          email={email}
          description={description}
          errors={errors}
          handleChange={handleChange}
        ></PersonalInfoForm>

        <div className="form__section">
          <h2 className="form__section__title">Education</h2>
          
          <div>
            {educations.map((education) => {
              if (this.state.education.id === education.id) return null;

              return (
                <Education
                  key={education.id}
                  toggleForm={this.toggleEditEducationForm}
                  deleteEducation={onDeleteEducation}
                  {...education}
                />
              );
            })}
          </div>

          {this.state.isEducationFormOpen && (
            <EducationForm
              errors={this.state.educationErrors}
              saveInfo={this.saveEducationInfo}
              handleChange={this.handleEducationChange}
              closeForm={this.toggleEducationForm}
              {...this.state.education}
            />
          )}
          {!this.state.isEducationFormOpen && (
            <div className="btns">
              <button className="btn" type="button" onClick={this.toggleEducationForm}>ADD EDUCATION</button>
            </div>
          )}
        </div>

        <div className="form__section">
          <h2 className="form__section__title">Work History</h2>

          <div>
            {works.map((work) => {
              if (this.state.work.id === work.id) return null;

              return (
                <Work
                  key={work.id}
                  toggleForm={this.toggleEditWorkForm}
                  deleteWork={onDeleteWork}
                  {...work}
                />
              );
            })}
          </div>

          {this.state.isWorkFormOpen && (
            <WorkForm
              errors={this.state.workErrors}
              saveInfo={this.saveWorkInfo}
              handleChange={this.handleWorkChange}
              closeForm={this.toggleWorkForm}
              {...this.state.work}
            />
          )}
          {!this.state.isWorkFormOpen && (
            <div className="btns">
              <button className="btn" type="button" onClick={this.toggleWorkForm}>ADD WORK</button>
            </div>
          )}
        </div>

        <div className="form__section">
          <h2 className="form__section__title">Skills</h2>

          <div>
            {skills.map((skill) => {
              return (
                <Skill
                  key={skill.id}
                  deleteSkill={onDeleteSkill}
                  {...skill}
                />
              )
            })}
          </div>

          <SkillForm
            saveInfo={this.saveSkillInfo}
            handleChange={this.handleSkillChange}
            {...this.state.skill}
          />
        </div>
      </form>
    );
  }
}

export default CVForm;
