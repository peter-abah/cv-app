import PersonalInfoForm from './PersonalInfoForm';
import EducationForm from './EducationForm';
import WorkForm from './WorkForm';
import SkillForm from './SkillForm';
import Education from './Education';
import Work from './Work';
import Skill from './Skill';

const CVForm = (props) => {
  const {
    personal,
    work,
    education,
    skills,
    addEntry,
    deleteEntry,
    toggleEntryForm,
    openEditEntryForm,
    handleChange,
  } = props;
  
  return (
    <form className="form">
      <PersonalInfoForm
        {...personal.entry}
        errors={personal.errors}
        handleChange={handleChange}
      ></PersonalInfoForm>

      <div className="form__section">
        <h2 className="form__section__title">Education</h2>

        <div>
          {education.list.map((entry) => {
            if (education.entry.id === entry.id) return null;

            return (
              <Education
                key={entry.id}
                toggleForm={openEditEntryForm}
                deleteEducation={deleteEntry}
                {...entry}
              />
            );
          })}
        </div>

        {education.isFormOpen && (
          <EducationForm
            errors={education.errors}
            saveInfo={addEntry}
            handleChange={handleChange}
            closeForm={toggleEntryForm}
            {...education.entry}
          />
        )}
        {!education.isFormOpen && (
          <div className="btns">
            <button
              className="btn"
              type="button"
              data-key="education"
              onClick={toggleEntryForm}
            >
              ADD EDUCATION
            </button>
          </div>
        )}
      </div>

      <div className="form__section">
        <h2 className="form__section__title">Work History</h2>

        <div>
          {work.list.map((entry) => {
            if (work.entry.id === entry.id) return null;

            return (
              <Work
                key={entry.id}
                toggleForm={openEditEntryForm}
                deleteWork={deleteEntry}
                {...entry}
              />
            );
          })}
        </div>

        {work.isFormOpen && (
          <WorkForm
            errors={work.errors}
            saveInfo={addEntry}
            handleChange={handleChange}
            closeForm={toggleEntryForm}
            {...work.entry}
          />
        )}
        {!work.isFormOpen && (
          <div className="btns">
            <button
              className="btn"
              type="button"
              data-key="work"
              onClick={toggleEntryForm}
            >
              ADD WORK
            </button>
          </div>
        )}
      </div>

      <div className="form__section">
        <h2 className="form__section__title">Skills</h2>

        <div>
          {skills.list.map((skill) => {
            return (
              <Skill key={skill.id} deleteSkill={deleteEntry} {...skill} />
            );
          })}
        </div>

        <SkillForm
          saveInfo={addEntry}
          handleChange={handleChange}
          {...skills.entry}
        />
      </div>
    </form>
  );
};

export default CVForm;
