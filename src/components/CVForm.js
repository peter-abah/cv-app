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
    });
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
              return <Education key={education.id} {...education}></Education>;
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
