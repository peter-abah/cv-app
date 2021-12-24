const Education = (props) => {
  const { school, degree, year, course, toggleForm, id, deleteEducation } =
    props;
  return (
    <div>
      <p>
        <span>{degree}</span> <span>{year}</span>
      </p>
      <p>{course}</p>
      <p>{school}</p>
      <button data-id={id} type="button" onClick={toggleForm}>
        Edit
      </button>
      <button data-id={id} type="button" onClick={deleteEducation}>
        Delete
      </button>
    </div>
  );
};

export default Education;
