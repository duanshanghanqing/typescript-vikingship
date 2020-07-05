import React from 'react';
import Butten, { ButtonType, ButtonSize } from '../../components/Butten';

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
          btnType={ButtonType.Primary} 
          size={ButtonSize.Middle}
          disabled={true}
        >
            Primary
        </Butten>
        <Butten 
          btnType={ButtonType.Danger} 
          size={ButtonSize.Small}
        >
          Danger
        </Butten>
        <Butten 
          btnType={ButtonType.Link} 
          href="https://blog.csdn.net"
        >
          Link
        </Butten>
      </div>
    );
  }
}

export default Buttons;
