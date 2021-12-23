import { Component } from 'react';

class EducationForm extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div></div>
        <div>
          <div>
            <label htmlFor="school">School</label>
            <input type="text" name="school" id="school" />
          </div>

          <div>
            <label htmlFor="course">Course</label>
            <input type="text" name="course" id="course" />
          </div>

          <div>
            <label htmlFor="school">Degree</label>
            <input type="text" name="degree" id="degree" />
          </div>

          <div>
            <label htmlFor="graduationYear">Graduation Year</label>
            <input type="number" max="9999" min="1000" id="graduationYear" name="graduationYear" />
          </div>

          <div>
            <button type="button">Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default EducationForm;