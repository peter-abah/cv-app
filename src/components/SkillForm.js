const SkillForm = (props) => {
  const { name, handleChange, saveInfo } = props;

  return (
    <div>
      <div>
        <label htmlFor="skill">Skill Name</label>
        <input type="text" name="name" id="skill" value={name} onChange={handleChange} />
      </div>
      <button type="button" onClick={saveInfo}>Save</button>
    </div>
  )
};

export default SkillForm;
