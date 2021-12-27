import formatDate from '../formatDate';

const WorkPreview = (props) => {
  const { organisation, position, startDate, endDate, description } = props;

  return (
    <div>
      <div>
        <h4>{position}</h4>
        <p>{organisation}</p>
        {startDate && (
          <p>
            <span>{formatDate(startDate)}</span> -{' '}
            <span>{endDate ? formatDate(endDate) : 'Current'}</span>
          </p>
        )}
      </div>
      {description && <p>{description}</p>}
    </div>
  );
};

export default WorkPreview;
