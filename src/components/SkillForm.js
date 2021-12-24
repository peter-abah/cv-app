const SkillForm = (props) => {
  const { name, saveInfo } = props;

  return (
    <div>
      <div>
        <label htmlFor="skill">Skill Name</label>
        <input type="text" name="name" id="skill" value={name} />
      </div>
      <button type="button" onClick={saveInfo}>Save</button>
    </div>
  )
};

export default SkillForm;
