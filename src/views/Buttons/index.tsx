import React from 'react';
import { Button } from '../../components';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Button autoFocus={true} onClick={() => { alert(111); }}>Default</Button>
        <Button 
          btnType="primary"
          size="ml"
          disabled={true}
        >
            Primary
        </Button>
        <Button 
          btnType="danger"
          size="sm"
        >
          Danger
        </Button>
        <Button 
          btnType="link"
          href="https://blog.csdn.net"
        >
          Link
        </Button>
      </div>
    );
  }
}

export default Buttons;
