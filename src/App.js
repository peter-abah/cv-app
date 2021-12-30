import { Component } from 'react';
import uniqid from 'uniqid';
import humanizeString from 'humanize-string';
import Header from './components/Header';
import CVForm from './components/CVForm';
import Preview from './components/Preview';
import PrintButton from './components/PrintButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      personal: {
        entry: {
          name: '',
          address: '',
          email: '',
          phone: '',
        },
        errors: {},
      },
      education: {
        list: [],
        entry: {
          school: '',
          course: '',
          degree: '',
          graduationYear: '',
          id: uniqid(),
        },
        errors: {
          school: '',
          course: '',
          degree: '',
          graduationYear: '',
        },
        isFormOpen: true,
        isEditMode: false,
      },
      work: {
        list: [],
        entry: {
          organisation: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
          id: uniqid(),
        },
        errors: {
          organisation: '',
          position: '',
        },
        isFormOpen: true,
        isEditMode: false,
      },
      skills: {
        list: [],
        entry: {
          name: '',
          id: uniqid(),
        },
        errors: { name: '' },
      },
    };
  }

  toggleEntryForm = (e) => {
    const { key } = e.target.dataset;
    if (this.state[key].isEditMode) return;

    const isFormOpen = !this.state[key].isFormOpen;
    const section = { ...this.state[key], isFormOpen };
    this.setState({ [key]: section });
  };

  openEditEntryForm = (e) => {
    const { key, id } = e.target.dataset;
    if (this.state[key].isEditMode) return;

    const entry = this.state[key].list.filter((elem) => elem.id === id)[0];
    const section = {
      ...this.state[key],
      entry,
      isEditMode: true,
      isFormOpen: true,
    };
    this.setState({ [key]: section });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const { key } = e.target.dataset;
    
    const entry = { ...this.state[key].entry, [name]: value };
    const section = { ...this.state[key], entry };
    this.setState({ [key]: section });
  };

  getErrorMsg = (field, value) => {
    if (value !== '') return '';

    return `${humanizeString(field)} should not be blank`;
  };

  isValidEntry = (errors) => {
    const isValid = Object.values(errors).every((msg) => msg === '');
    return isValid;
  };

  getErrors = (key) => {
    const errorFields = Object.keys(this.state[key].errors);
    const { entry } = this.state[key];

    const errors = errorFields.reduce((result, field) => {
      const value = entry[field];
      result[field] = this.getErrorMsg(field, value);
      return result;
    }, {});

    return errors;
  };

  addEntry = (e) => {
    const { key } = e.target.dataset
    const errors = this.getErrors(key);
    let section = { ...this.state[key], errors };

    if (this.isValidEntry(errors)) { // only adds entry if errors object is empty or valid
      const entry = this.state[key].entry;

      // filters entry from list if it is an existing entry that is being updated
      let list = this.state[key].list.filter((elem) => elem.id !== entry.id);
      list = [...list, entry];

      const defaultEntry = this.props.default[key]();
      section = { ...section, list, entry: defaultEntry, isEditMode: false, isFormOpen: false};
    }

    this.setState({ [key]: section });
  };

  deleteEntry = (e) => {
    const { key, id } = e.target.dataset;
    const list = this.state[key].list.filter((elem) => elem.id !== id);
    const section = { ...this.state[key], list };
    this.setState({ [key]: section });
  };

  render() {
    return (
      <div>
        <Header />
        <CVForm
          handleChange={this.handleChange}
          deleteEntry={this.deleteEntry}
          addEntry={this.addEntry}
          toggleEntryForm={this.toggleEntryForm}
          openEditEntryForm={this.openEditEntryForm}
          {...this.state}
        />
        <section className="preview-section">
          <h2 className="preview-section__title">CV Preview</h2>
          <PrintButton
            ComponentClass={Preview}
            componentProps={this.state}
          />
          <div className="preview-wrapper">
            <Preview {...this.state} />
          </div>
        </section>
      </div>
    );
  }
}

// setting the default state of the sections
// saving them in functions so a new object is returned when called
App.defaultProps = {
  default: {
    work: () => ({
      organisation: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      id: uniqid(),
    }),
    education: () => ({
      school: '',
      course: '',
      degree: '',
      graduationYear: '',
      id: uniqid(),
    }),
    skills: () => ({
      name: '',
      id: uniqid(),
    }),
  },
};

export default App;
