import Preview from './Preview';
import PrintButton from './PrintButton';

const PreviewSection = (props) => {
  return (
    <section className="preview-section">
      <h2 className="preview-section__title">CV Preview</h2>
      <PrintButton
        ComponentClass={Preview}
        componentProps={props}
      />
      <div className="preview-wrapper">
        <Preview {...props} />
      </div>
    </section>
  )
};

export default PreviewSection;