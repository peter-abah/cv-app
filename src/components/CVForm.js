import { Component } from 'react';
import EducationForm from './EducationForm';
import Education from './Education';
import uniqid from 'uniqid'

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
      }
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
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="phone">Telephone No</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="description">Describe Yourself</label>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
              value={description}
            ></textarea>
          </div>
        </div>

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
