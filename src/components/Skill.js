const Skill = (props) => {
  const { name, id, deleteSkill } = props;
  return (
    <div className="skill">
      <p className="skill__name">{name}</p>
      <button
        className="btn btn--small"
        type="button"
        data-id={id}
        data-key="skills"
        onClick={deleteSkill}
      >
        Delete
      </button>
    </div>
  );
};

export default Skill;
