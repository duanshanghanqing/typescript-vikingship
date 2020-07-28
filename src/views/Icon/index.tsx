import React from 'react';
import { Icon } from '../../components';

class _Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <Icon icon="coffee" theme="primary" size="1x"/>
            <Icon icon="coffee" theme="primary" size="2x"/>
            <Icon icon="coffee" theme="primary" size="3x"/>
            <Icon icon="coffee" theme="primary" size="4x"/>
            <Icon icon="coffee" theme="primary" size="5x"/>
        </div>
    );
  }
}

export default _Icon;
