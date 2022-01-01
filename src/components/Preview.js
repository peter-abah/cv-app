import React from 'react';
import WorkPreview from './WorkPreview';
import EducationPreview from './EducationPreview';

const Preview = React.forwardRef((props, ref) => {
  const { personal, work, education, skills } = props;
  const { name, email, address, phone, description } = personal.entry;

  return (
    <div ref={ref} className="preview">
      <div className="preview__main">
        <div className="preview__section">
          <h2 className="preview__name">{name}</h2>
          <p className="preview__description">{description}</p>
        </div>

        <div className="preview__section">
          <h2 className="preview__section__title">Work Experience</h2>
          {work.list.map((entry) => (
            <WorkPreview key={entry.id} {...entry} />
          ))}
        </div>

        <div className="preview__section">
          <h2 className="preview__section__title">Education</h2>
          {education.list.map((entry) => (
            <EducationPreview key={entry.id} {...entry} />
          ))}
        </div>
      </div>

      <aside className="preview-sidebar">
        <div className="preview-sidebar__section">
          <h2 className="preview-sidebar__section__title">Contact details</h2>
          <div className="preview-sidebar__section__details">
            <div className="preview-sidebar__info">
              <h3 className="preview-sidebar__info__title">EMAIL</h3>
              <p>{email}</p>
            </div>

            <div className="preview-sidebar__info">
              <h3 className="preview-sidebar__info__title">ADDRESS</h3>
              <p>{address}</p>
            </div>

            <div className="preview-sidebar__info">
              <h3 className="preview-sidebar__info__title">PHONE</h3>
              <p>{phone}</p>
            </div>
          </div>
        </div>

        <div className="preview-sidebar__section">
          <h2 className="preview-sidebar__section__title">Skills</h2>
          <div className="preview-sidebar__section__details">
            {skills.list.map((entry) => (
              <p
                className="preview-sidebar__info preview-sidebar__info__title"
                key={entry.id}
              >
                {entry.name}
              </p>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
});

export default Preview;
