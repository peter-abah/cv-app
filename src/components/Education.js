const Education = (props) => {
  const { school, degree, year, course, toggleForm, id } = props;
  return (
    <div>
      <p><span>{degree}</span> <span>{year}</span></p>
      <p>{course}</p>
      <p>{school}</p>
      <button data-id={id} type="button" onClick={toggleForm}>Edit</button>
    </div>
  )
}

export default Education;