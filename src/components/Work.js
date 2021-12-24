const Work = (props) => {
  const {
    id,
    organisation,
    position,
    description,
    startDate,
    endDate,
    toggleForm,
    deleteWork,
  } = props;

  return (
    <div>
      <p>
        {position} {organisation}
      </p>
      <p>
        {startDate} to {endDate}
      </p>
      <p>{description}</p>
      <button type="button" data-id={id} onClick={toggleForm}>
        Edit
      </button>
      <button type="button" data-id={id} onClick={deleteWork}>
        Delete
      </button>
    </div>
  );
};

export default Work;
