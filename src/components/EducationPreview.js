import formatDate from './formatDate';

const EducationPreview = (props) => {
  const { school, course, degree, graduationYear } = props;

  return (
    <div>
      <h4>{degree} {course}</h4>
      <p>{school}</p>
      <p>{formatDate(graduationYear)}</p>
    </div>
  );
};

export default EducationPreview;
