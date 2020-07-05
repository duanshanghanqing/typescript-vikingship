import React from 'react';
import { Link } from 'react-router-dom';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
          <h3>vik 文档</h3>
          <ul>
            <li><Link to="/buttons">Button</Link></li>
          </ul>
      </div>
    );
  }
}

export default Index;
