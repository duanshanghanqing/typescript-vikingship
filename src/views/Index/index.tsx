import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="index">
          <h3>vik 文档</h3>
          <ul>
            <li><Link to="/buttons">Button</Link></li>
            <li><Link to="/menus">Menu</Link></li>
          </ul>
      </div>
    );
  }
}

export default Index;
