import formatDate from '../formatDate';

const EducationPreview = (props) => {
  const { school, course, degree, graduationYear } = props;

  return (
    <div className="preview__info">
      <h4 className="preview__info__title">{degree} {course}</h4>
      <p>{school}</p>
      <p className="preview__info__date">{formatDate(graduationYear)}</p>
    </div>
  );
};

export default EducationPreview;
