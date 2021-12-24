const EducationForm = (props) => {
  const {
    school,
    course,
    degree,
    graduationYear,
    handleChange,
    saveInfo,
    closeForm,
  } = props;
  return (
    <div>
      <div>
        <div className="form__field">
          <label className="form__label" htmlFor="school">School</label>
          <input
            className="form__input"
            type="text"
            name="school"
            id="school"
            value={school}
            onChange={handleChange}
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="course">Course</label>
          <input
            className="form__input"
            type="text"
            name="course"
            id="course"
            value={course}
            onChange={handleChange}
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="school">Degree</label>
          <input
            className="form__input"
            type="text"
            name="degree"
            id="degree"
            value={degree}
            onChange={handleChange}
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="graduationYear">Graduation Year</label>
          <input
            className="form__input"
            type="number"
            max="9999"
            min="1000"
            id="graduationYear"
            name="graduationYear"
            value={graduationYear}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="button" onClick={saveInfo}>
            Save
          </button>

          <button type="button" onClick={closeForm}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
