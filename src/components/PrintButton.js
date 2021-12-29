import { Component } from 'react';
import ReactToPrint from 'react-to-print';

class PrintButton extends Component {
  componentRef = null;

  printTrigger = () => {
    return <button className="btn">Print</button>;
  };

  render() {
    const { ComponentClass, componentProps } = this.props;

    return (
      <div className="btns">
        <ReactToPrint
          trigger={this.printTrigger}
          content={() => this.componentRef}
        />
        <div style={{display: 'none'}}>
          <ComponentClass
            ref={(el) => (this.componentRef = el)}
            {...componentProps}
          />
        </div>
      </div>
    );
  }
}

export default PrintButton;