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
      <div>
        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          id="position"
          value={position}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="organisation">Organisation</label>
        <input
          type="text"
          name="organisation"
          id="organisation"
          value={organisation}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="startDate">Start Date</label>
        <input
          type="text"
          name="startDate"
          id="startDate"
          value={startDate}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="endDate">End Date</label>
        <input
          type="text"
          name="endDate"
          id="endDate"
          value={endDate}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="description">Work description</label>
        <textarea
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
