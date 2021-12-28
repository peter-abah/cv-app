import formatDate from '../formatDate';

const WorkPreview = (props) => {
  const { organisation, position, startDate, endDate, description } = props;

  return (
    <div className="preview__info">
      <div>
        <h4 className="preview__info__title">{position}</h4>
        <p>{organisation}</p>
        {startDate && (
          <p className="preview__info__date">
            <span>{formatDate(startDate)}</span> -{' '}
            <span>{endDate ? formatDate(endDate) : 'Current'}</span>
          </p>
        )}
      </div>
      {description && <p className="preview__info_description">{description}</p>}
    </div>
  );
};

export default WorkPreview;
