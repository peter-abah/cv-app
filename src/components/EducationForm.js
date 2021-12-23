import { Component } from 'react';

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      course: '',
      degree: '',
      graduationYear: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  saveInfo = (e) => {
    this.props.addEducation(this.state);
    this.setState({
      school: '',
      course: '',
      degree: '',
      graduationYear: '',
    });
  };

  render() {
    const { school, course, degree, graduationYear } = this.state;
    return (
      <div>
        <div></div>
        <div>
          <div>
            <label htmlFor="school">School</label>
            <input
              type="text"
              name="school"
              id="school"
              value={school}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="course">Course</label>
            <input
              type="text"
              name="course"
              id="course"
              value={course}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="school">Degree</label>
            <input
              type="text"
              name="degree"
              id="degree"
              value={degree}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="graduationYear">Graduation Year</label>
            <input
              type="number"
              max="9999"
              min="1000"
              id="graduationYear"
              name="graduationYear"
              value={graduationYear}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <button type="button" onClick={this.saveInfo}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationForm;
