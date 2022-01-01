const SkillForm = (props) => {
  const { name, handleChange, errors, saveInfo } = props;

  return (
    <div>
      <div className="form__field">
        <label className="form__label" htmlFor="skill">Skill Name</label>
        <input
          className="form__input"
          type="text"
          name="name"
          id="skill"
          value={name}
          data-key="skills"
          onChange={handleChange}
        />
        {errors.name && <p className="form__error-msg">{errors.name}</p>}
      </div>
      <div className="btns">
        <button className="btn" type="button" data-key="skills" onClick={saveInfo}>
          SAVE
        </button>
      </div>
    </div>
  );
};

export default SkillForm;
