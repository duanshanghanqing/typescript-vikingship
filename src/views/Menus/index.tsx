import React from 'react';
import { Menu } from '../../components';
const { Item } = Menu;


class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Menu defaultIndex={0} onSelect={(index) => { console.log(index); }}>
          <Item>active</Item>
          <Item disabled={true}>disabled</Item>
          <Item>xyz</Item>
        </Menu>
      </div>
    );
  }
}

export default Menus;
