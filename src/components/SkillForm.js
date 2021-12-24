const SkillForm = (props) => {
  const { name, handleChange, saveInfo } = props;

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
          onChange={handleChange}
        />
      </div>
      <div className="form__btns">
        <button className="form__btn" type="button" onClick={saveInfo}>
          SAVE
        </button>
      </div>
    </div>
  );
};

export default SkillForm;
