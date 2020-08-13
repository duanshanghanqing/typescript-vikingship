import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
          <h3><FontAwesomeIcon icon={faCoffee} /> vik 文档</h3>
          <ul>
            <li><Link to="/buttons">Button</Link></li>
            <li><Link to="/menus">Menu</Link></li>
            <li><Link to="/icon">icon</Link></li>
            <li><Link to="/transition">Transition</Link></li>
            <li><Link to="/upload">Upload</Link></li>
          </ul>
      </div>
    );
  }
}

export default Index;
