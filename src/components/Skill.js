const Skill = (props) => {
  const { name, id, deleteSkill } = props;
  return (
    <div className="skill">
      <p className="skill__name">{name}</p>
      <button className="form__btn form__btn--small" data-id={id} onClick={deleteSkill}>Delete</button>
    </div>
  );
};

export default Skill;