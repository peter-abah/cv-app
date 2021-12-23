const Education = (props) => {
  const { school, degree, year, course } = props;
  return (
    <div>
      <p><span>{degree}</span> <span>{year}</span></p>
      <p>{course}</p>
      <p>{school}</p>
    </div>
  )
}

export default Education;