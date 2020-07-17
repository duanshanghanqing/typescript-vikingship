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
          <Menu defaultIndex={0}>
              <Item>1</Item>
              <Item>2</Item>
              <Item>3</Item>
          </Menu>
      </div>
    );
  }
}

export default Menus;
