const Education = (props) => {
  const { school, degree, graduationYear, course, toggleForm, id, deleteEducation } =
    props;
  return (
    <div className="form__section-preview">
      <h3 className="form__section-preview__title">
        <span>{degree}</span> <span>{course}</span>
      </h3>
      <p>{graduationYear}</p>
      <p>{school}</p>
      <div className="form__section-preview__btns">
        <button className="form__btn form__btn--small" data-id={id} type="button" onClick={toggleForm}>
          Edit
        </button>
        <button className="form__btn form__btn--small" data-id={id} type="button" onClick={deleteEducation}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Education;
