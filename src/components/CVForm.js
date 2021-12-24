import { Component } from 'react';
import uniqid from 'uniqid';
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
      isWorkEdit: false,
      isWorkFormOpen: true,
      skill: {
        name: '',
        id: uniqid(),
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

  saveEducationInfo = (e) => {
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
    });
  };

  saveWorkInfo = (e) => {
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
    this.setState({ work, isworkEdit: true, isWorkFormOpen: true });
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
      onDeleteEducation,
      onDeleteWork,
      onDeleteSkill,
    } = this.props;

    return (
      <form>
        <PersonalInfoForm
          name={name}
          phone={phone}
          address={address}
          email={email}
          description={description}
          handleChange={handleChange}
        ></PersonalInfoForm>

        <div>
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
              saveInfo={this.saveEducationInfo}
              handleChange={this.handleEducationChange}
              closeForm={this.toggleEducationForm}
              {...this.state.education}
            />
          )}
          {!this.state.isEducationFormOpen && (
            <button onClick={this.toggleEducationForm}>Add Education</button>
          )}
        </div>

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
          {this.state.isWorkFormOpen && (
            <WorkForm
              saveInfo={this.saveWorkInfo}
              handleChange={this.handleWorkChange}
              closeForm={this.toggleWorkForm}
              {...this.state.work}
            />
          )}
          {!this.state.isWorkFormOpen && (
            <button onClick={this.toggleWorkForm}>Add Work</button>
          )}
        </div>

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
