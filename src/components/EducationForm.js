const EducationForm = (props) => {
  const {
    school,
    course,
    degree,
    graduationYear,
    errors,
    handleChange,
    saveInfo,
    closeForm,
  } = props;
  return (
    <div>
      <div>
        <div className="form__row">
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
            {errors.school && <p className="form__error-msg">{errors.school}</p>}
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
            {errors.course && <p className="form__error-msg">{errors.course}</p>}
          </div>
        </div>

        <div className="form__row">
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
            {errors.degree && <p className="form__error-msg">{errors.degree}</p>}
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="graduationYear">Graduation Year</label>
            <input
              className="form__input"
              type="month"
              max="9999"
              min="1000"
              id="graduationYear"
              name="graduationYear"
              value={graduationYear}
              onChange={handleChange}
            />
            {errors.graduationYear && <p className="form__error-msg">{errors.graduationYear}</p>}
          </div>
        </div>

        <div className="btns">
          <button className="btn" type="button" onClick={saveInfo}>
            SAVE
          </button>

          <button className="btn" type="button" onClick={closeForm}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
