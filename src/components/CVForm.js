import { Component } from 'react';
import uniqid from 'uniqid';
import PersonalInfoForm from './PersonalInfoForm';
import EducationForm from './EducationForm';
import Education from './Education';

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
    };
  }

  handleEducationChange = (e) => {
    const { name, value } = e.target;
    const education = { ...this.state.education, [name]: value };
    this.setState({ education });
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

  toggleEducationForm = (e) => {
    if (this.state.isEducationEdit) return;

    const id = e.target.dataset.id;
    const education = this.props.educations.filter((elem) => elem.id === id)[0];
    debugger
    this.setState({ education, isEducationEdit: true });
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

              return <Education key={education.id} toggleForm={this.toggleEducationForm} {...education}></Education>;
            })}
          </div>
          <EducationForm
            saveInfo={this.saveEducationInfo}
            handleChange={this.handleEducationChange}
            {...this.state.education}
          ></EducationForm>
        </div>
      </form>
    );
  }
}

export default CVForm;
