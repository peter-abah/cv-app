import { Component } from 'react';

class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" />
          </div>
          
          <div>
            <label htmlFor="phone">Telephone No</label>
            <input type="text" name="phone" id="phone" />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="description">Describe Yourself</label>
            <textarea name="description" id="description"></textarea>
          </div>
        </div>
      </form>
    )
  };
}

export default CVForm;