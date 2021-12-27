import WorkPreview from './WorkPreview';
import EducationPreview from './EducationPreview';

const Preview = (props) => {
  const { name, email, phone, address, description, works, educations, skills } = props;
  return (
    <div>
      <div>
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>

        <div>
          <h2>Work Experience</h2>
          {works.map((work) => <WorkPreview key={work.id} {...work} />)}
        </div>

        <div>
          <h2>Education</h2>
          {educations.map((education) => <EducationPreview key={education.id} {...education}/>)}
        </div>
      </div>

      <div>
        <div>
          <h2>Contact details</h2>
          <div>
            <h3>EMAIL</h3>
            <p>{email}</p>
          </div>

          <div>
            <h3>ADDRESS</h3>
            <p>{address}</p>
          </div>

          <div>
            <h3>PHONE</h3>
            <p>{phone}</p>
          </div>
        </div>
      </div>

      <div>
        <h2>Skills</h2>
        {skills.map(({name, id}) => <p key={id}>{name}</p>)}
      </div>
    </div>
  );
};

export default Preview;
