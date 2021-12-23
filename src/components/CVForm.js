import { Component } from 'react';
import EducationForm from './EducationForm';
import Education from './Education';

class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, name, phone, address, email, description, educations } = this.props;
    return (
      <form>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" onChange={handleChange}/>
          </div>
          
          <div>
            <label htmlFor="phone">Telephone No</label>
            <input type="text" name="phone" id="phone" onChange={handleChange}/>
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" onChange={handleChange}/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange}/>
          </div>

          <div>
            <label htmlFor="description">Describe Yourself</label>
            <textarea name="description" id="description" onChange={handleChange}>
            </textarea>
          </div>
        </div>

        <div>
          <div>
            {educations.map((education, index) => {
              return <Education key={index} {...education}></Education>
            })}
          </div>
          <EducationForm></EducationForm>
        </div>
      </form>
    )
  };
}

export default CVForm;