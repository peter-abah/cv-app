const Work = (props) => {
  const { id, organisation, position, description, startDate, endDate, toggleForm } = props;

  return (
    <div>
      <p>{position} {organisation}</p>
      <p>{startDate} to {endDate}</p>
      <p>{description}</p>
      <button type="button" data-id={id} onClick={toggleForm}>Edit</button>
    </div>
  );
};

export default Work;
