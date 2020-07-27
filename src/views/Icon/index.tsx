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
            <Icon icon="coffee" theme="danger" />
        </div>
    );
  }
}

export default _Icon;
