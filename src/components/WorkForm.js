const WorkForm = (props) => {
  const {
    organisation,
    position,
    startDate,
    endDate,
    description,
    errors,
    handleChange,
    saveInfo,
    closeForm,
  } = props;

  return (
    <div>
      <div className="form__row">
        <div className="form__field">
          <label className="form__label" htmlFor="position">
            Position
          </label>
          <input
            className="form__input"
            type="text"
            name="position"
            id="position"
            placeholder="Assistant Manager"
            value={position}
            data-key="work"
            onChange={handleChange}
          />
          {errors.position && <p className="form__error-msg">{errors.position}</p>}
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="organisation">
            Organisation
          </label>
          <input
            className="form__input"
            type="text"
            name="organisation"
            id="organisation"
            placeholder="Some company"
            value={organisation}
            data-key="work"
            onChange={handleChange}
          />
          {errors.organisation && <p className="form__error-msg">{errors.organisation}</p>}
        </div>
      </div>

      <div className="form__row">
        <div className="form__field">
          <label className="form__label" htmlFor="startDate">
            Start Date
          </label>
          <input
            className="form__input"
            type="month"
            name="startDate"
            id="startDate"
            value={startDate}
            data-key="work"
            onChange={handleChange}
          />
          {errors.startDate && <p className="form__error-msg">{errors.startDate}</p>}
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="endDate">
            End Date
          </label>
          <input
            className="form__input"
            type="month"
            name="endDate"
            id="endDate"
            value={endDate}
            data-key="work"
            onChange={handleChange}
          />
          {errors.endDate && <p className="form__error-msg">{errors.endDate}</p>}
        </div>
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="description">
          Work description
        </label>
        <textarea
          className="form__input form__textarea"
          name="description"
          id="description"
          value={description}
          placeholder="Details about the job"
          data-key="work"
          onChange={handleChange}
        ></textarea>
        {errors.description && <p className="form__error-msg">{errors.description}</p>}
      </div>

      <div className="btns">
        <button className="btn" type="button" data-key="work" onClick={saveInfo}>
          SAVE
        </button>

        <button className="btn" type="button" data-key="work" onClick={closeForm}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default WorkForm;
