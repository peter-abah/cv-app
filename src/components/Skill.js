const Skill = (props) => {
  const { name, id, deleteSkill } = props;
  return (
    <div>
      <p>{name}</p>
      <button data-id={id} onClick={deleteSkill}>Delete</button>
    </div>
  );
};

export default Skill;