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
    <div className="form__section-preview">
      <h3 className="form__section-preview__title">
        <span>{position}</span> <span>{organisation}</span>
      </h3>
      {startDate && (
        <p>
          <span>{startDate}</span>
          <span> to </span>
          <span>{endDate ? endDate : 'Now'}</span>
        </p>
      )}
      <p>{description}</p>
      <div className="form__section-preview__btns">
        <button
          className="form__btn form__btn--small"
          type="button"
          data-id={id}
          onClick={toggleForm}
        >
          Edit
        </button>
        <button
          className="form__btn form__btn--small"
          type="button"
          data-id={id}
          onClick={deleteWork}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Work;
