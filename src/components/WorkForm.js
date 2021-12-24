const WorkForm = (props) => {
  const {
    organisation,
    position,
    startDate,
    endDate,
    description,
    handleChange,
    saveInfo,
    closeForm,
  } = props;

  return (
    <div>
      <div className="form__field">
        <label className="form__label" htmlFor="position">Position</label>
        <input
          className="form__input"
          type="text"
          name="position"
          id="position"
          value={position}
          onChange={handleChange}
        />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="organisation">Organisation</label>
        <input
          className="form__input"
          type="text"
          name="organisation"
          id="organisation"
          value={organisation}
          onChange={handleChange}
        />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="startDate">Start Date</label>
        <input
          className="form__input"
          type="text"
          name="startDate"
          id="startDate"
          value={startDate}
          onChange={handleChange}
        />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="endDate">End Date</label>
        <input
          className="form__input"
          type="text"
          name="endDate"
          id="endDate"
          value={endDate}
          onChange={handleChange}
        />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="description">Work description</label>
        <textarea
          className="form__input"
          name="description"
          id="description"
          value={description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div>
        <button type="button" onClick={saveInfo}>
          Save
        </button>

        <button type="button" onClick={closeForm}>
            Close
          </button>
      </div>
    </div>
  );
};

export default WorkForm;
