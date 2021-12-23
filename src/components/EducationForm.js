const EducationForm = (props) => {
  const { school, course, degree, graduationYear, handleChange, saveInfo } =
    props;
  return (
    <div>
      <div>
        <div>
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            value={school}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="course">Course</label>
          <input
            type="text"
            name="course"
            id="course"
            value={course}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="school">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            value={degree}
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="button" onClick={saveInfo}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
