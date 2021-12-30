import formatDate from '../formatDate';

const Education = (props) => {
  const {
    school,
    degree,
    graduationYear,
    course,
    toggleForm,
    id,
    deleteEducation,
  } = props;
  return (
    <div className="form__section-preview">
      <h3 className="form__section-preview__title">
        <span>{degree}</span> <span>{course}</span>
      </h3>
      <p>{formatDate(graduationYear)}</p>
      <p>{school}</p>
      <div className="form__section-preview__btns">
        <button
          className="btn btn--small"
          data-id={id}
          data-key="education"
          type="button"
          onClick={toggleForm}
        >
          Edit
        </button>
        <button
          className="btn btn--small"
          data-id={id}
          data-key="education"
          type="button"
          onClick={deleteEducation}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Education;
