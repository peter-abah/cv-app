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
    <div className="work">
      <h3 className="work__title">
        <span>{position}</span> <span>{organisation}</span>
      </h3>
      <p>
        {startDate} to {endDate}
      </p>
      <p>{description}</p>
      <div className="work__btns">
        <button className="form__btn form__btn--small" type="button" data-id={id} onClick={toggleForm}>
          Edit
        </button>
        <button className="form__btn form__btn--small" type="button" data-id={id} onClick={deleteWork}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Work;
