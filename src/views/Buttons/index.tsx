import React from 'react';
import { Butten } from '../../../src_package';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Butten>Default</Butten>
        <Butten 
          btnType="primary"
          size="ml"
          disabled={true}
        >
            Primary
        </Butten>
        <Butten 
          btnType="danger"
          size="sm"
        >
          Danger
        </Butten>
        <Butten 
          btnType="link"
          href="https://blog.csdn.net"
        >
          Link
        </Butten>
      </div>
    );
  }
}

export default Buttons;
