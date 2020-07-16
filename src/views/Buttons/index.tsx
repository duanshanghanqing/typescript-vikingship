import React from 'react';
import { Butten } from '../../components';
// import { Butten } from '../../../lib';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Butten autoFocus={true} onClick={() => { alert(111); }}>Default</Butten>
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
