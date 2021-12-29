import { Component } from 'react';
import WorkPreview from './WorkPreview';
import EducationPreview from './EducationPreview';

class Preview extends Component {
  render() {
    const {
      name,
      email,
      phone,
      address,
      description,
      works,
      educations,
      skills,
    } = this.props;
    return (
      <div className="preview">
        <div className="preview__main">
          <div className="preview__section">
            <h2 className="preview__name">{name}</h2>
            <p className="preview__description">{description}</p>
          </div>

          <div className="preview__section">
            <h2 className="preview__section__title">Work Experience</h2>
            {works.map((work) => (
              <WorkPreview key={work.id} {...work} />
            ))}
          </div>

          <div className="preview__section">
            <h2 className="preview__section__title">Education</h2>
            {educations.map((education) => (
              <EducationPreview key={education.id} {...education} />
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
              {skills.map(({ name, id }) => (
                <p
                  className="preview-sidebar__info preview-sidebar__info__title"
                  key={id}
                >
                  {name}
                </p>
              ))}
            </div>
          </div>
        </aside>
      </div>
    );
  }
};

export default Preview;
