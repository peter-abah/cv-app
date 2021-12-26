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
      <p>
        {position} {organisation}
      </p>
      <p>
        {startDate} to {endDate}
      </p>
      <p>{description}</p>
      <div className="form__btns form__btns--small">
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
