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
          buttonType="primary"
          buttonSize="ml"
          disabled={true}
        >
            Primary
        </Button>
        <Button 
          buttonType="danger"
          buttonSize="sm"
        >
          Danger
        </Button>
        <Button 
          buttonType="link"
          href="https://blog.csdn.net"
        >
          Link
        </Button>
      </div>
    );
  }
}

export default Buttons;
