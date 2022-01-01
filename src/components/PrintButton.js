import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintButton = (props) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { ComponentToPrint, componentProps } = props;

  return (
    <div className="btns">
      <button className="btn" onClick={handlePrint}>Print</button>

      <div style={{display: 'none'}}>
        <ComponentToPrint
          ref={componentRef}
          {...componentProps}
        />
      </div>
    </div>
  );
}

export default PrintButton;
