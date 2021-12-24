import { Component } from 'react';
import uniqid from 'uniqid';
import PersonalInfoForm from './PersonalInfoForm';
import EducationForm from './EducationForm';
import WorkForm from './WorkForm';
import Education from './Education';
import Work from './Work';

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
      work: {
        organisation: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
        id: uniqid(),
      },
      isWorkEdit: false,
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

  toggleEducationForm = (e) => {
    if (this.state.isEducationEdit) return;

    const id = e.target.dataset.id;
    const education = this.props.educations.filter((elem) => elem.id === id)[0];
    this.setState({ education, isEducationEdit: true });
  };

  toggleWorkForm = (e) => {
    if (this.state.isWorkEdit) return;

    const id = e.target.dataset.id;
    const work = this.props.works.filter((elem) => elem.id === id)[0];
    this.setState({ work, isworkEdit: true });
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
      onDeleteEducation,
      onDeleteWork,
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
                  toggleForm={this.toggleEducationForm}
                  deleteEducation={onDeleteEducation}
                  {...education}
                />
              );
            })}
          </div>
          <EducationForm
            saveInfo={this.saveEducationInfo}
            handleChange={this.handleEducationChange}
            {...this.state.education}
          />
        </div>

        <div>
          {works.map((work) => {
            if (this.state.work.id === work.id) return null;

            return (
              <Work
                key={work.id}
                toggleForm={this.toggleWorkForm}
                deleteWork={onDeleteWork}
                {...work}
              />
            );
          })}
          <WorkForm
            saveInfo={this.saveWorkInfo}
            handleChange={this.handleWorkChange}
            {...this.state.work}
          />
        </div>
      </form>
    );
  }
}

export default CVForm;
