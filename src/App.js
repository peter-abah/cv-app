import { useState } from 'react';
import uniqid from 'uniqid';
import humanizeString from 'humanize-string';
import Header from './components/Header';
import CVForm from './components/CVForm';
import PreviewSection from './components/PreviewSection';

const defaultEntries = {
  personal: () => ({
    name: '',
    address: '',
    email: '',
    phone: '',
  }),
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
};

const initialStates = {
  personal: () => ({
    entry: defaultEntries.personal(),
    errors: {},
  }),
  work: () => ({
    list: [],
    entry: defaultEntries.work(),
    errors: {
      organisation: '',
      position: '',
    },
    isFormOpen: true,
    isEditMode: false,
  }),
  education: () => ({
    list: [],
    entry: defaultEntries.education(),
    errors: {
      school: '',
      course: '',
      degree: '',
      graduationYear: '',
    },
    isFormOpen: true,
    isEditMode: false,
  }),
  skills: () => ({
    list: [],
    entry: defaultEntries.skills(),
    errors: { name: '' },
  }),
};

const App = (props) => {
  const [work, setWork] = useState(initialStates.work());
  const [personal, setPersonal] = useState(initialStates.personal());
  const [education, setEducation] = useState(initialStates.education());
  const [skills, setSkills] = useState(initialStates.skills());

  const state = { personal, work, education, skills };
  const setState = { personal: setPersonal, work: setWork, education: setEducation, skills: setSkills };

  const toggleEntryForm = (e) => {
    const { key } = e.target.dataset;
    if (state[key].isEditMode) return;

    const isFormOpen = !state[key].isFormOpen;
    setState[key]({...state[key], isFormOpen});
  };

  const openEditEntryForm = (e) => {
    const { key, id } = e.target.dataset;
    if (state[key].isEditMode) return;

    const entry = state[key].list.filter((elem) => elem.id === id)[0];
    setState[key]({
      ...state[key],
      entry,
      isEditMode: true,
      isFormOpen: true,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const { key } = e.target.dataset;
    
    const entry = { ...state[key].entry, [name]: value };
    setState[key]({ ...state[key], entry });
  };

  const getErrorMsg = (field, value) => {
    if (value !== '') return '';

    return `${humanizeString(field)} should not be blank`;
  };

  const isValidEntry = (errors) => {
    const isValid = Object.values(errors).every((msg) => msg === '');
    return isValid;
  };

  const getErrors = (key) => {
    const errorFields = Object.keys(state[key].errors);
    const { entry } = state[key];

    const errors = errorFields.reduce((result, field) => {
      const value = entry[field];
      result[field] = getErrorMsg(field, value);
      return result;
    }, {});

    return errors;
  };

  const addEntry = (e) => {
    const { key } = e.target.dataset
    const errors = getErrors(key);

    if (!isValidEntry(errors)) {
      setState[key]({ ...state[key], errors });
      return;
    }

    const { entry } = state[key];
    // filters entry from list if it is an existing entry that is being updated
    let list = state[key].list.filter((elem) => elem.id !== entry.id);
    list = [...list, entry];

    const defaultEntry = defaultEntries[key]();
    setState[key]({
      ...state[key],
      list,
      errors,
      entry: defaultEntry,
      isEditMode: false,
      isFormOpen: false
    });
  };

  const deleteEntry = (e) => {
    const { key, id } = e.target.dataset;
    const list = state[key].list.filter((elem) => elem.id !== id);
    setState[key]({ ...state[key], list });
  };

  return (
    <div>
      <Header />
      <CVForm
        handleChange={handleChange}
        deleteEntry={deleteEntry}
        addEntry={addEntry}
        toggleEntryForm={toggleEntryForm}
        openEditEntryForm={openEditEntryForm}
        {...state}
      />
      <PreviewSection {...state}/>
    </div>
  );
}

export default App;
